import { useState, useEffect } from 'react';
import { playClick } from '../utils/sounds.js';

/**
 * Module 6: Sequence Stories
 * Displays shuffled steps of a story. User taps them in order to complete the sequence.
 */
export default function SequenceStories({ puzzle, feedback, showHint, answered, onAnswer, level, settings }) {
  const [selectedOrder, setSelectedOrder] = useState([]);
  
  // Reset when puzzle changes
  useEffect(() => {
    setSelectedOrder([]);
  }, [puzzle]);

  if (!puzzle) return null;

  const numSteps = puzzle.steps.length;
  
  const handleTapStep = (step, indexInShuffled) => {
    if (answered) return;
    
    // If already selected, deselect it (and any after it)
    const existingIndex = selectedOrder.findIndex(s => s.shuffledIndex === indexInShuffled);
    if (existingIndex >= 0) {
      setSelectedOrder(prev => prev.slice(0, existingIndex));
      if (settings?.sfx !== false) playClick();
      return;
    }
    
    // Add to selection
    const newOrder = [...selectedOrder, { ...step, shuffledIndex: indexInShuffled }];
    setSelectedOrder(newOrder);
    if (settings?.sfx !== false) playClick();
    
    // If we've selected all of them, auto-submit!
    if (newOrder.length === numSteps) {
      onAnswer(newOrder);
    }
  };

  return (
    <>
      <div className="puzzle-instruction" style={{ fontSize: 18 }}>
        {puzzle.title}
      </div>
      <div style={{ textAlign: 'center', fontSize: 14, color: 'var(--on-dim)', marginBottom: 20 }}>
        Tap the steps in the right order
      </div>
      
      <div className="story-slots">
        {puzzle.shuffledSteps.map((step, i) => {
          // Check if this step is currently selected
          const selectedIndex = selectedOrder.findIndex(s => s.shuffledIndex === i);
          const isSelected = selectedIndex >= 0;
          const orderNum = isSelected ? selectedIndex + 1 : null;
          
          // Hint logic: show glow on the one that should be picked NEXT
          const isNextCorrect = showHint && step.correctIndex === selectedOrder.length;
          
          // Feedback logic for this specific row when fully answered
          let rowClass = '';
          if (answered && isSelected) {
            if (feedback === 'correct') {
              rowClass = 'locked'; // all green
            } else if (step.correctIndex !== selectedIndex) {
              rowClass = 'wrong-order'; // shake this specific one
            }
          } else if (isSelected) {
            rowClass = 'selected';
          } else if (isNextCorrect) {
            rowClass = 'hint-glow';
          }

          return (
            <div 
              key={i}
              className={`story-slot ${rowClass}`}
              onClick={() => handleTapStep(step, i)}
            >
              <div className={`story-badge ${isSelected ? 'filled' : ''}`}>
                {orderNum || ''}
              </div>
              <div className="story-emoji">{step.emoji}</div>
              <div className="story-label">{step.label}</div>
            </div>
          );
        })}
      </div>
    </>
  );
}
