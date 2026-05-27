import { useState, useEffect } from 'react';

/**
 * useState backed by localStorage.
 * Reads once on mount, writes on every state change.
 */
export function useStorage(key, initialValue) {
  const [state, setState] = useState(() => {
    try {
      const stored = localStorage.getItem(key);
      return stored ? JSON.parse(stored) : initialValue;
    } catch {
      return initialValue;
    }
  });

  useEffect(() => {
    try {
      localStorage.setItem(key, JSON.stringify(state));
    } catch (e) {
      console.warn('useStorage: could not write to localStorage', e);
    }
  }, [key, state]);

  return [state, setState];
}
