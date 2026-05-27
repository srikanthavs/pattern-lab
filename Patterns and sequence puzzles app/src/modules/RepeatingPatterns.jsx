import { useState, useEffect } from 'react';

/**
 * Module 1: Repeating Patterns
 * Displays a sequence of items with a missing blank.
 * User taps one of 4 options to fill the blank.
 */
export default function RepeatingPatterns({ puzzle, feedback, showHint, answered, onAnswer, level }) {
  const [sequence, setSequence] = useState([]);
  
  useEffect(() => {
    if (puzzle) {
      setSequence(puzzle.sequence);
    }
  }, [puzzle]);

  if (!puzzle) return null;

  return (
    <>
      <div className="puzzle-instruction">
        What comes next?
      </div>
      
      <div className="sequence-row" style={{ marginTop: 24, marginBottom: 32 }}>
        {sequence.map((item, i) => (
          <div 
            key={i} 
            className={`puzzle-tile ${item === '?' ? 'blank' : ''} ${showHint && i < puzzle.blankIndex ? 'hint-glow' : ''}`}
          >
            {item === '?' ? '?' : item}
          </div>
        ))}
      </div>
      
      <div className="choices-grid">
        {puzzle.shuffledOptions.map((opt, i) => {
          const isSelected = answered && puzzle.answer === opt;
          const isWrong = feedback === 'wrong' && !isSelected; // we don't strictly track WHICH wrong they tapped for UI, just that it was wrong
          // but we can visually show if this specific tile was tapped by relying on the feedback prop
          
          return (
            <button
              key={i}
              className={`choice-tile ${isSelected && feedback === 'correct' ? 'picked-correct' : ''} ${answered ? 'disabled' : ''}`}
              onClick={() => onAnswer(opt)}
              disabled={answered}
            >
              {opt}
            </button>
          );
        })}
      </div>
    </>
  );
}
