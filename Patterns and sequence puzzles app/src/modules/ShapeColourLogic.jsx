import { useState, useEffect } from 'react';

/**
 * Module 4: Shape & Colour Logic
 * Renders sequences of CSS shapes (circle, square, triangle, etc.) in various colours.
 */
export default function ShapeColourLogic({ puzzle, feedback, showHint, answered, onAnswer, level }) {
  if (!puzzle) return null;

  return (
    <>
      <div className="puzzle-instruction">
        Complete the shape pattern!
      </div>
      
      <div className="sequence-row" style={{ marginTop: 24, marginBottom: 32 }}>
        {puzzle.sequence.map((item, i) => {
          const isBlank = item === null;
          
          return (
            <div 
              key={i} 
              className={`shape-container ${isBlank ? 'blank' : ''} ${showHint && !isBlank ? 'hint-glow' : ''}`}
            >
              {!isBlank && (
                <div 
                  className={`css-shape ${item.shape}`} 
                  style={{ color: item.color, backgroundColor: item.shape !== 'triangle' ? item.color : 'transparent' }} 
                />
              )}
              {isBlank && (
                <span style={{ fontSize: 24, color: 'var(--p-teal)', fontWeight: 800 }}>?</span>
              )}
            </div>
          );
        })}
      </div>
      
      <div className="choices-grid">
        {puzzle.shuffledOptions.map((opt, i) => {
          // Check if selected option matches the answer in both shape and color
          const isSelected = answered && puzzle.answer.shape === opt.shape && puzzle.answer.color === opt.color;
          
          return (
            <button
              key={i}
              className={`shape-choice ${isSelected && feedback === 'correct' ? 'picked-correct' : ''} ${answered ? 'disabled' : ''}`}
              onClick={() => onAnswer(opt)}
              disabled={answered}
            >
              <div 
                className={`css-shape ${opt.shape}`} 
                style={{ color: opt.color, backgroundColor: opt.shape !== 'triangle' ? opt.color : 'transparent' }} 
              />
            </button>
          );
        })}
      </div>
    </>
  );
}
