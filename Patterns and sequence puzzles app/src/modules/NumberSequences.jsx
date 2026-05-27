import { useState, useEffect } from 'react';

/**
 * Module 3: Number Sequences
 * Displays a row of numbers with one missing, sometimes with emoji visual aids.
 */
export default function NumberSequences({ puzzle, feedback, showHint, answered, onAnswer, level }) {
  if (!puzzle) return null;

  return (
    <>
      <div className="puzzle-instruction">
        What number comes next?
      </div>
      
      <div className="sequence-row" style={{ marginTop: 24, marginBottom: 32 }}>
        {puzzle.sequence.map((num, i) => {
          const isBlank = num === '?';
          
          return (
            <div 
              key={i} 
              style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', gap: 8 }}
            >
              {puzzle.visual && !isBlank && (
                <div style={{ fontSize: 24, minHeight: 28, letterSpacing: -2 }}>
                  {puzzle.visual[i]}
                </div>
              )}
              {puzzle.visual && isBlank && (
                <div style={{ minHeight: 28 }} />
              )}
              
              <div 
                className={`number-tile ${isBlank ? 'blank' : ''} ${showHint && i < puzzle.blankIndex ? 'hint-glow' : ''}`}
              >
                {isBlank ? '?' : num}
              </div>
            </div>
          );
        })}
      </div>
      
      <div className="choices-grid">
        {puzzle.shuffledOptions.map((opt, i) => {
          const isSelected = answered && puzzle.answer === opt;
          
          return (
            <button
              key={i}
              className={`choice-tile ${isSelected && feedback === 'correct' ? 'picked-correct' : ''} ${answered ? 'disabled' : ''}`}
              onClick={() => onAnswer(opt)}
              disabled={answered}
            >
              <span style={{ fontSize: 36, fontWeight: 800 }}>{opt}</span>
            </button>
          );
        })}
      </div>
    </>
  );
}
