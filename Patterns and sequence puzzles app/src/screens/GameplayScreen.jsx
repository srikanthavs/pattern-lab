import { useState, useEffect, useRef, useCallback } from 'react';
import PuzzleHUD from '../components/PuzzleHUD.jsx';
import { MODULES } from '../data/modules.js';
import { loadPuzzles, checkAnswer, getHint, calculateStars, calculateAccuracy, PUZZLES_PER_LEVEL } from '../utils/puzzleEngine.js';
import { playCorrect, playWrong, playClick, playStarBurst, speak } from '../utils/sounds.js';
import { formatTime } from '../utils/helpers.js';

// Module components
import RepeatingPatterns from '../modules/RepeatingPatterns.jsx';
import GrowingPatterns from '../modules/GrowingPatterns.jsx';
import NumberSequences from '../modules/NumberSequences.jsx';
import ShapeColourLogic from '../modules/ShapeColourLogic.jsx';
import OddOneOut from '../modules/OddOneOut.jsx';
import SequenceStories from '../modules/SequenceStories.jsx';

const MODULE_COMPONENTS = {
  repeating: RepeatingPatterns,
  growing:   GrowingPatterns,
  numbers:   NumberSequences,
  shape:     ShapeColourLogic,
  odd:       OddOneOut,
  story:     SequenceStories,
};

/**
 * GameplayScreen — the real puzzle engine.
 * Loads puzzles, renders module components, tracks answers,
 * handles hints, timing, feedback, and level completion.
 */
export default function GameplayScreen({ moduleId, level, appState, settings, onBack, onComplete, onHint, hintOpen }) {
  const mod = MODULES.find(m => m.id === moduleId) || MODULES[0];
  const ModuleComponent = MODULE_COMPONENTS[moduleId];

  // Puzzle state
  const [puzzles, setPuzzles] = useState([]);
  const [currentIndex, setCurrentIndex] = useState(0);
  const [feedback, setFeedback] = useState(null); // null | 'correct' | 'wrong'
  const [showHint, setShowHint] = useState(false);
  const [hintsUsed, setHintsUsed] = useState(0);
  const [wrongAttempts, setWrongAttempts] = useState(0);
  const [correctFirst, setCorrectFirst] = useState(0);
  const [puzzleKey, setPuzzleKey] = useState(0); // for re-mount animation
  const [answered, setAnswered] = useState(false);

  // Timer
  const [elapsed, setElapsed] = useState(0);
  const timerRef = useRef(null);
  const startTimeRef = useRef(Date.now());
  const wrongOnCurrent = useRef(false);

  // Load puzzles on mount
  useEffect(() => {
    const loaded = loadPuzzles(moduleId, level);
    setPuzzles(loaded);
    startTimeRef.current = Date.now();

    // Start timer
    timerRef.current = setInterval(() => {
      setElapsed(Math.floor((Date.now() - startTimeRef.current) / 1000));
    }, 1000);

    // Speak instruction
    if (settings?.sfx !== false) {
      setTimeout(() => {
        const instructions = {
          repeating: 'What comes next in the pattern?',
          growing:   'Find what comes next!',
          numbers:   'What number comes next?',
          shape:     'Complete the shape pattern!',
          odd:       'Which one does not belong?',
          story:     'Put the steps in the right order!',
        };
        speak(instructions[moduleId] || 'Solve the puzzle!', settings?.voiceSpeed || 1.0);
      }, 500);
    }

    return () => {
      if (timerRef.current) clearInterval(timerRef.current);
    };
  }, [moduleId, level]);

  const currentPuzzle = puzzles[currentIndex];

  // Handle answer from module component
  const handleAnswer = useCallback((answer) => {
    if (answered || !currentPuzzle) return;

    const isCorrect = checkAnswer(currentPuzzle, answer);

    if (isCorrect) {
      setAnswered(true);
      setFeedback('correct');
      if (settings?.sfx !== false) playCorrect();
      if (!wrongOnCurrent.current) {
        setCorrectFirst(prev => prev + 1);
      }

      // Advance to next puzzle after delay
      setTimeout(() => {
        setFeedback(null);
        setAnswered(false);
        wrongOnCurrent.current = false;

        if (currentIndex + 1 >= puzzles.length) {
          // Level complete!
          if (timerRef.current) clearInterval(timerRef.current);
          const totalTime = Math.floor((Date.now() - startTimeRef.current) / 1000);
          const stars = calculateStars(totalTime, hintsUsed, wrongAttempts, puzzles.length);
          const accuracy = calculateAccuracy(correctFirst + 1, puzzles.length); // +1 for current

          if (settings?.sfx !== false) {
            setTimeout(() => playStarBurst(), 200);
          }

          onComplete({
            stars,
            time: totalTime,
            accuracy,
            hintUsed: hintsUsed > 0,
            wrongAttempts,
            correctFirst: correctFirst + 1,
          });
        } else {
          setCurrentIndex(prev => prev + 1);
          setPuzzleKey(prev => prev + 1);
        }
      }, 1200);
    } else {
      setFeedback('wrong');
      setWrongAttempts(prev => prev + 1);
      wrongOnCurrent.current = true;
      if (settings?.sfx !== false) playWrong();

      setTimeout(() => {
        setFeedback(null);
      }, 600);
    }
  }, [answered, currentPuzzle, currentIndex, puzzles.length, hintsUsed, wrongAttempts, correctFirst, settings, onComplete]);

  // Handle hint
  const handleHint = useCallback(() => {
    if (showHint || answered) return;
    setShowHint(true);
    setHintsUsed(prev => prev + 1);
    if (settings?.sfx !== false) playClick();

    // Auto-hide hint after 4 seconds
    setTimeout(() => setShowHint(false), 4000);
  }, [showHint, answered, settings]);

  if (!currentPuzzle || !ModuleComponent) {
    return (
      <div className="screen screen-enter" style={{ paddingBottom: 30 }}>
        <PuzzleHUD
          stars={appState.stars}
          streak={appState.streak}
          rank=""
          moduleId={moduleId}
          level={level}
          current={0}
          total={PUZZLES_PER_LEVEL}
          onBack={onBack}
        />
        <div className="px" style={{ marginTop: 40, textAlign: 'center' }}>
          <div style={{ fontSize: 48, marginBottom: 12 }}>🚀</div>
          <h2 style={{ fontSize: 20 }}>Loading puzzles...</h2>
        </div>
      </div>
    );
  }

  return (
    <div className="screen screen-enter" style={{ paddingBottom: 30 }}>
      {/* HUD — stars, streak, level, puzzle counter, back button */}
      <PuzzleHUD
        stars={appState.stars}
        streak={appState.streak}
        rank=""
        moduleId={moduleId}
        level={level}
        current={currentIndex + 1}
        total={puzzles.length}
        onBack={onBack}
      />

      {/* Progress dots */}
      <div className="progress-dots">
        {puzzles.map((_, i) => (
          <div
            key={i}
            className={`progress-dot ${
              i < currentIndex ? 'done' :
              i === currentIndex ? 'active' : ''
            }`}
          />
        ))}
      </div>

      {/* Timer */}
      <div style={{ display: 'flex', justifyContent: 'center', marginBottom: 4 }}>
        <div className="timer-display">⏱ {formatTime(elapsed)}</div>
      </div>

      {/* Module puzzle component */}
      <div className="puzzle-area" key={puzzleKey}>
        <div className="puzzle-enter">
          <ModuleComponent
            puzzle={currentPuzzle}
            feedback={feedback}
            showHint={showHint}
            answered={answered}
            onAnswer={handleAnswer}
            level={level}
            settings={settings}
          />
        </div>
      </div>

      {/* Hint button */}
      <div className="px" style={{ marginTop: 8, display: 'flex', gap: 10 }}>
        <button
          className="btn ghost"
          style={{ minHeight: 50, flex: 1 }}
          onClick={handleHint}
          disabled={answered || showHint}
        >
          💡 Hint <span style={{ fontSize: 12, fontWeight: 700, color: 'var(--on-mute)' }}>(-1 ⭐)</span>
        </button>
      </div>

      {/* Hint overlay */}
      {showHint && (
        <HintOverlay
          mod={mod}
          hint={getHint(currentPuzzle)}
          onClose={() => setShowHint(false)}
        />
      )}

      {/* Full-screen feedback flash */}
      {feedback && (
        <div className={`answer-feedback ${feedback === 'correct' ? 'correct-feedback' : 'wrong-feedback'}`}>
          <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center' }}>
            <div className="feedback-icon">
              {feedback === 'correct' ? '✨' : '🔄'}
            </div>
            <div className="feedback-text">
              {feedback === 'correct'
                ? ['Amazing!', 'Great job!', 'You got it!', 'Brilliant!', 'Super!'][Math.floor(Math.random() * 5)]
                : 'Try again!'
              }
            </div>
          </div>
        </div>
      )}
    </div>
  );
}

function HintOverlay({ mod, hint, onClose }) {
  return (
    <div
      style={{
        position: 'absolute', inset: 0,
        background: 'rgba(6,2,26,0.65)',
        backdropFilter: 'blur(8px)',
        zIndex: 50,
        display: 'flex', alignItems: 'flex-end',
        animation: 'warpIn .35s ease',
      }}
      onClick={onClose}
    >
      <div
        onClick={e => e.stopPropagation()}
        style={{
          width: '100%',
          background: 'linear-gradient(180deg, rgba(20,8,55,0.95), rgba(8,3,30,0.95))',
          borderTopLeftRadius: 32, borderTopRightRadius: 32,
          border: '1px solid rgba(167,139,250,0.35)',
          borderBottom: 'none',
          padding: '16px 18px 28px',
          boxShadow: '0 -30px 60px rgba(167,139,250,0.25)',
        }}
      >
        <div style={{ width: 50, height: 5, borderRadius: 999, background: 'rgba(255,255,255,0.2)', margin: '0 auto 14px' }} />
        <div style={{ display: 'flex', alignItems: 'center', gap: 12, marginBottom: 12 }}>
          <div style={{
            width: 48, height: 48, borderRadius: 16,
            background: `linear-gradient(160deg, ${mod.color}, rgba(0,0,0,0.3))`,
            display: 'grid', placeItems: 'center', fontSize: 26,
          }}>💡</div>
          <div>
            <div style={{ fontFamily: 'var(--head)', fontWeight: 800, fontSize: 20 }}>Captain's Tip</div>
            <div style={{ fontSize: 12, color: 'var(--on-mute)', fontWeight: 700 }}>Costs 1 ⭐ to use</div>
          </div>
        </div>
        <div style={{
          padding: 14, borderRadius: 18, marginBottom: 16,
          background: 'rgba(255,217,61,0.1)',
          border: '1px solid rgba(255,217,61,0.4)',
        }}>
          <div style={{ fontSize: 15, lineHeight: 1.4, fontWeight: 600 }}>
            👀 {hint}
          </div>
        </div>
        <button className="btn block" onClick={onClose}>Got it!</button>
      </div>
    </div>
  );
}
