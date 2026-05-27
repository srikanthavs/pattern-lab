import { useState, useEffect } from 'react';

/**
 * Module 5: Odd One Out
 * Displays a grid of items where one does not belong.
 */
export default function OddOneOut({ puzzle, feedback, showHint, answered, onAnswer, level }) {
  if (!puzzle) return null;

  const numItems = puzzle.items?.length || 4;
  const gridClass = numItems >= 5 ? `items-${numItems}` : 'items-4';

  return (
    <>
      <div className="puzzle-instruction" style={{ marginBottom: 24 }}>
        Which one does not belong?
      </div>
      
      <div className={`odd-grid ${gridClass}`}>
        {puzzle.shuffledItems?.map((item, i) => {
          const isOdd = item.originalIndex === puzzle.oddIndex;
          const isSelected = answered && isOdd;
          
          return (
            <div 
              key={i} 
              className={`odd-item ${isSelected && feedback === 'correct' ? 'picked-correct' : ''} ${answered ? 'disabled' : ''} ${showHint && isOdd ? 'hint-glow' : ''}`}
              onClick={() => onAnswer(item.originalIndex)}
            >
              <div className="odd-emoji">{item.emoji}</div>
              <div className="odd-label">{item.label}</div>
            </div>
          );
        })}
      </div>
      
      {answered && feedback === 'correct' && (
        <div style={{ textAlign: 'center', marginTop: 24, padding: '0 20px' }}>
          <div style={{ fontSize: 16, fontWeight: 700, color: 'var(--good)' }}>Yes!</div>
          <div style={{ fontSize: 14, color: 'var(--on-dim)' }}>{puzzle.explanation}</div>
        </div>
      )}
    </>
  );
}
