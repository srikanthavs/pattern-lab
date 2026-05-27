import HoloPanel from '../components/HoloPanel.jsx';

/** Settings screen — audio, bilingual, gameplay, profile, danger zone. */
export default function Settings({ settings, setSettings, appState, onBack, onDifficulty, onReset }) {

  function toggle(key) {
    setSettings(s => ({ ...s, [key]: !s[key] }));
  }

  return (
    <div className="screen screen-enter">
      {/* Header */}
      <div className="page-head" style={{ marginTop: 6, marginBottom: 12 }}>
        <button className="back-btn" onClick={onBack} aria-label="Back">‹</button>
        <div style={{ flex: 1 }}>
          <h1>Settings</h1>
          <div className="sub">Customise your lab</div>
        </div>
      </div>

      {/* ── AUDIO ─────────────────────────────────────────────────── */}
      <div className="px">
        <div className="mono" style={{ fontSize: 11, letterSpacing: '.18em', color: 'var(--on-mute)', marginBottom: 8 }}>
          AUDIO
        </div>
        <div className="card" style={{ padding: 6 }}>
          <SettingRow
            ico="🔊" title="Sound effects" desc="Beeps, clicks and rewards"
            right={<Switch on={settings.sfx} onChange={() => toggle('sfx')} />}
          />
          <SettingRow
            ico="🎵" title="Background music" desc="Cosmic ambient loops"
            right={<Switch on={settings.music} onChange={() => toggle('music')} />}
          />
          <SettingRow
            ico="🗣️" title="Voice speed" desc="How fast instructions are spoken"
            bottom={
              <Slider
                value={settings.voiceSpeed} min={0.5} max={1.5} step={0.1}
                onChange={v => setSettings(s => ({ ...s, voiceSpeed: v }))}
                labels={['Slow', 'Normal', 'Fast']}
              />
            }
          />
        </div>
      </div>

      {/* ── LANGUAGE ──────────────────────────────────────────────── */}
      <div className="px" style={{ marginTop: 18 }}>
        <div className="mono" style={{ fontSize: 11, letterSpacing: '.18em', color: 'var(--on-mute)', marginBottom: 8 }}>
          LANGUAGE
        </div>
        <div className="card" style={{ padding: 6 }}>
          <SettingRow
            ico="🌐" title="Bilingual mode" desc="Show Telugu alongside English"
            right={<Switch on={settings.telugu} onChange={() => toggle('telugu')} />}
          />
        </div>
      </div>

      {/* ── GAMEPLAY ──────────────────────────────────────────────── */}
      <div className="px" style={{ marginTop: 18 }}>
        <div className="mono" style={{ fontSize: 11, letterSpacing: '.18em', color: 'var(--on-mute)', marginBottom: 8 }}>
          GAMEPLAY
        </div>
        <div className="card" style={{ padding: 6 }}>
          {/* Hints per puzzle */}
          <SettingRow
            ico="💡" title="Hints per puzzle" desc="How many hints are allowed"
            bottom={
              <div className="seg" style={{ gridTemplateColumns: 'repeat(4, 1fr)', marginTop: 8 }}>
                {[0, 1, 2, 3].map(n => (
                  <button
                    key={n}
                    className={settings.hints === n ? 'on' : ''}
                    onClick={() => setSettings(s => ({ ...s, hints: n }))}
                  >
                    {n === 0 ? 'Off' : n}
                  </button>
                ))}
              </div>
            }
          />

          {/* Adaptive difficulty */}
          <SettingRow
            ico="🧠" title="Adaptive difficulty" desc="Adjusts to Advaith's accuracy"
            right={<Switch on={settings.adaptiveDifficulty} onChange={() => toggle('adaptiveDifficulty')} />}
          />

          {/* Difficulty level link */}
          <button
            onClick={onDifficulty}
            style={{
              width: '100%',
              display: 'flex', alignItems: 'center', gap: 12,
              padding: 14, borderRadius: 18,
              background: 'rgba(255,255,255,0.04)',
              border: '1px solid rgba(255,255,255,0.1)',
              textAlign: 'left', marginTop: 8,
            }}
          >
            <div style={{
              width: 40, height: 40, borderRadius: 12,
              background: 'rgba(167,139,250,0.18)',
              border: '1px solid rgba(167,139,250,0.4)',
              display: 'grid', placeItems: 'center', fontSize: 18,
            }}>
              🎚️
            </div>
            <div style={{ flex: 1 }}>
              <div style={{ fontWeight: 800, fontSize: 15 }}>Difficulty level</div>
              <div style={{ fontSize: 12, color: 'var(--on-mute)', fontWeight: 700 }}>
                Currently: {settings.difficulty}
              </div>
            </div>
            <span style={{ fontSize: 20 }}>›</span>
          </button>
        </div>
      </div>

      {/* ── CAPTAIN PROFILE ───────────────────────────────────────── */}
      <div className="px" style={{ marginTop: 18 }}>
        <div className="mono" style={{ fontSize: 11, letterSpacing: '.18em', color: 'var(--on-mute)', marginBottom: 8 }}>
          CAPTAIN PROFILE
        </div>
        <HoloPanel color="#A78BFA" style={{ padding: 16 }}>
          <div style={{ display: 'flex', alignItems: 'center', gap: 12 }}>
            <div style={{
              width: 56, height: 56, borderRadius: 18,
              background: 'linear-gradient(160deg, #A78BFA, #4ECDC4)',
              display: 'grid', placeItems: 'center', fontSize: 30,
              boxShadow: '0 0 14px rgba(167,139,250,0.5)',
            }}>
              👨‍🚀
            </div>
            <div style={{ flex: 1 }}>
              <div style={{ fontFamily: 'var(--head)', fontWeight: 800, fontSize: 18 }}>
                {appState.name}
              </div>
              <div style={{ fontSize: 12, color: 'var(--on-dim)', fontWeight: 700 }}>
                Age 6 · Class 1 · Hyderabad
              </div>
              <div style={{ fontSize: 11, color: 'var(--on-mute)', marginTop: 4, fontWeight: 600 }}>
                Streak: {appState.streak} days active
              </div>
            </div>
          </div>
        </HoloPanel>
      </div>

      {/* ── DANGER ZONE ───────────────────────────────────────────── */}
      <div className="px" style={{ marginTop: 18 }}>
        <div className="mono" style={{ fontSize: 11, letterSpacing: '.18em', color: 'var(--on-mute)', marginBottom: 8 }}>
          DANGER ZONE
        </div>
        <button
          onClick={onReset}
          style={{
            width: '100%', textAlign: 'left',
            padding: 14, borderRadius: 18,
            background: 'rgba(255,111,141,0.1)',
            border: '1px solid rgba(255,111,141,0.4)',
            display: 'flex', alignItems: 'center', gap: 12,
          }}
        >
          <div style={{
            width: 40, height: 40, borderRadius: 12,
            background: 'rgba(255,111,141,0.2)',
            display: 'grid', placeItems: 'center', fontSize: 18,
          }}>
            ♻️
          </div>
          <div style={{ flex: 1 }}>
            <div style={{ fontWeight: 800, fontSize: 15, color: '#ffb8c5' }}>Reset progress</div>
            <div style={{ fontSize: 12, color: 'var(--on-mute)', fontWeight: 700 }}>
              Wipe stars, badges and unlocked planets
            </div>
          </div>
        </button>
      </div>

      <div className="px" style={{ marginTop: 24, textAlign: 'center' }}>
        <div className="mono" style={{ fontSize: 10, color: 'var(--on-mute)', letterSpacing: '.18em' }}>
          PATTERN LAB · v0.1 · BUILT WITH LOVE
        </div>
      </div>

      <div style={{ height: 18 }} />
    </div>
  );
}

/* ── Sub-components ──────────────────────────────────────────── */

function SettingRow({ ico, title, desc, right, bottom }) {
  return (
    <div style={{ padding: 12, borderBottom: bottom ? '1px solid rgba(255,255,255,0.06)' : 'none' }}>
      <div style={{ display: 'flex', alignItems: 'center', gap: 12 }}>
        <div style={{
          width: 40, height: 40, borderRadius: 12,
          background: 'rgba(255,255,255,0.06)',
          border: '1px solid rgba(255,255,255,0.12)',
          display: 'grid', placeItems: 'center', fontSize: 18, flexShrink: 0,
        }}>
          {ico}
        </div>
        <div style={{ flex: 1, minWidth: 0 }}>
          <div style={{ fontWeight: 800, fontSize: 15 }}>{title}</div>
          {desc && <div style={{ fontSize: 12, color: 'var(--on-mute)', fontWeight: 700, marginTop: 1 }}>{desc}</div>}
        </div>
        {right}
      </div>
      {bottom}
    </div>
  );
}

function Switch({ on, onChange }) {
  return (
    <div
      className={`switch${on ? ' on' : ''}`}
      onClick={onChange}
      role="switch"
      aria-checked={on}
    />
  );
}

function Slider({ value, min, max, step, onChange, labels }) {
  return (
    <div style={{ marginTop: 10 }}>
      <input
        type="range" value={value} min={min} max={max} step={step}
        onChange={e => onChange(parseFloat(e.target.value))}
        style={{ width: '100%', accentColor: '#A78BFA' }}
      />
      <div style={{
        display: 'flex', justifyContent: 'space-between',
        marginTop: 2, fontSize: 10, color: 'var(--on-mute)', fontWeight: 700,
      }}>
        {labels.map((l, i) => <span key={i}>{l}</span>)}
      </div>
      <div style={{ textAlign: 'center', marginTop: 4, fontSize: 12, fontWeight: 800, color: '#A78BFA' }}>
        {value.toFixed(1)}x
      </div>
    </div>
  );
}
