import { useState, useEffect } from 'react';

/**
 * Module 2: Growing Patterns
 * Displays a sequence that gets larger at each step.
 */
export default function GrowingPatterns({ puzzle, feedback, showHint, answered, onAnswer, level }) {
  if (!puzzle) return null;

  // We can show just numbers, or both emojis and numbers
  const hasEmojis = Array.isArray(puzzle.sequence) && puzzle.sequence[0] !== undefined && typeof puzzle.sequence[0] === 'string' && puzzle.sequence[0].length > 0;
  const isEmojiStack = hasEmojis && isNaN(Number(puzzle.sequence[0]));

  return (
    <>
      <div className="puzzle-instruction">
        Find what comes next!
      </div>
      
      <div className="sequence-row" style={{ marginTop: 16, marginBottom: 32, alignItems: 'flex-end', gap: 12 }}>
        {puzzle.display.map((num, i) => {
          const isBlank = num === '?';
          
          return (
            <div key={i} className="bar-item">
              {isEmojiStack && !isBlank && (
                <div style={{ fontSize: 24, lineHeight: 1, letterSpacing: -4, textAlign: 'center' }}>
                  {puzzle.sequence[i]}
                </div>
              )}
              {isBlank && isEmojiStack && (
                <div className="puzzle-tile blank" style={{ minWidth: 48, minHeight: 48, fontSize: 20 }}>?</div>
              )}
              <div 
                className={`bar-block ${isBlank ? 'blank' : ''} ${showHint ? 'hint-glow' : ''}`} 
                style={{ 
                  height: isBlank ? 40 : Math.max(20, Math.min(120, Number(num) * 10)),
                  width: 48 
                }}
              />
              <div className="bar-label">{isBlank ? '?' : num}</div>
            </div>
          );
        })}
      </div>
      
      <div className="choices-grid">
        {puzzle.shuffledOptions.map((opt, i) => {
          const isSelected = answered && (puzzle.answer === opt || puzzle.answerDisplay === opt || (Array.isArray(puzzle.optionDisplays) && puzzle.answerDisplay === puzzle.optionDisplays[puzzle.options.indexOf(opt)]));
          const displayVal = Array.isArray(puzzle.optionDisplays) ? puzzle.optionDisplays[i] : opt;
          
          return (
            <button
              key={i}
              className={`choice-tile ${isSelected && feedback === 'correct' ? 'picked-correct' : ''} ${answered ? 'disabled' : ''}`}
              onClick={() => onAnswer(opt)}
              disabled={answered}
            >
              <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center' }}>
                <span style={{ fontSize: 32, fontWeight: 800 }}>{displayVal}</span>
                {isEmojiStack && typeof opt === 'string' && isNaN(Number(opt)) && (
                  <span style={{ fontSize: 16, letterSpacing: -2, marginTop: -4 }}>{opt}</span>
                )}
              </div>
            </button>
          );
        })}
      </div>
    </>
  );
}
