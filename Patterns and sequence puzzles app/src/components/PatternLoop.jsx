import { hexA, shade } from '../utils/helpers.js';

/**
 * Animated mini-pattern preview shown on each module tile.
 * kind: 'repeat' | 'grow' | 'number' | 'shape' | 'odd' | 'story'
 */
export default function PatternLoop({ kind = 'repeat', color = '#A78BFA' }) {
  const cell = (content, key, dim = false) => (
    <div
      key={key}
      style={{
        width: 22, height: 22, borderRadius: 8,
        background: dim
          ? 'rgba(255,255,255,0.05)'
          : `linear-gradient(160deg, ${color}, ${shade(color, -20)})`,
        border: dim
          ? '1px dashed rgba(255,255,255,0.25)'
          : '1px solid rgba(255,255,255,0.2)',
        display: 'grid', placeItems: 'center',
        fontSize: 11, fontWeight: 800,
        color: dim ? 'rgba(255,255,255,0.4)' : '#1a0734',
        boxShadow: dim ? 'none' : `0 0 10px ${hexA(color, 0.4)}`,
        flexShrink: 0,
      }}
    >
      {content}
    </div>
  );

  if (kind === 'repeat') {
    return (
      <div style={{ display: 'flex', gap: 5, alignItems: 'center' }}>
        {['▲','●','▲','●'].map((s, i) => cell(s, i))}
        {cell('?', 'q', true)}
      </div>
    );
  }

  if (kind === 'grow') {
    return (
      <div style={{ display: 'flex', gap: 5, alignItems: 'flex-end' }}>
        {[10, 14, 18, 22].map((h, i) => (
          <div key={i} style={{
            width: 12, height: h,
            borderRadius: 4,
            background: `linear-gradient(180deg, ${color}, ${shade(color, -20)})`,
            boxShadow: `0 0 7px ${hexA(color, 0.5)}`,
          }} />
        ))}
        {cell('?', 'q', true)}
      </div>
    );
  }

  if (kind === 'number') {
    return (
      <div style={{ display: 'flex', gap: 4 }}>
        {[2, 4, 6, '?', 10].map((n, i) => cell(n, i, n === '?'))}
      </div>
    );
  }

  if (kind === 'shape') {
    const items = [
      { s: '●', c: '#FF6FB5' },
      { s: '■', c: '#4D96FF' },
      { s: '▲', c: '#FF6FB5' },
      { s: '●', c: '#4D96FF' },
    ];
    return (
      <div style={{ display: 'flex', gap: 5, alignItems: 'center' }}>
        {items.map((it, i) => (
          <div key={i} style={{
            width: 22, height: 22, borderRadius: 8,
            background: `linear-gradient(160deg, ${it.c}, ${shade(it.c, -20)})`,
            display: 'grid', placeItems: 'center',
            fontSize: 11, color: '#1a0734', fontWeight: 800,
            boxShadow: `0 0 8px ${hexA(it.c, 0.4)}`,
          }}>{it.s}</div>
        ))}
        {cell('?', 'q', true)}
      </div>
    );
  }

  if (kind === 'odd') {
    const items = ['🐶', '🐱', '🐰', '🍌'];
    const oddIdx = 3;
    return (
      <div style={{ display: 'flex', gap: 5 }}>
        {items.map((it, i) => (
          <div key={i} style={{
            width: 24, height: 24, borderRadius: 8,
            display: 'grid', placeItems: 'center',
            background: i === oddIdx
              ? 'rgba(255,217,61,0.18)'
              : 'rgba(255,255,255,0.05)',
            border: i === oddIdx
              ? '1px solid rgba(255,217,61,0.7)'
              : '1px solid rgba(255,255,255,0.12)',
            boxShadow: i === oddIdx ? '0 0 10px rgba(255,217,61,0.5)' : 'none',
            fontSize: 13,
          }}>{it}</div>
        ))}
      </div>
    );
  }

  if (kind === 'story') {
    return (
      <div style={{ display: 'flex', gap: 4, alignItems: 'center' }}>
        {[1, 2, 3, 4].map((n, i) => (
          <div key={i} style={{ display: 'flex', alignItems: 'center', gap: 4 }}>
            <div style={{
              width: 22, height: 22, borderRadius: 6,
              background: `linear-gradient(160deg, ${color}, ${shade(color, -20)})`,
              display: 'grid', placeItems: 'center',
              fontSize: 11, fontWeight: 800, color: '#1a0734',
            }}>{n}</div>
            {i < 3 && (
              <div style={{ width: 5, height: 2, background: 'rgba(255,255,255,0.4)' }} />
            )}
          </div>
        ))}
      </div>
    );
  }

  return null;
}
