/** Persistent bottom navigation bar — Home / Progress / Daily / Settings */
export default function BottomNav({ active, onNav }) {
  const items = [
    { id: 'home',     ico: '🪐', label: 'Home'     },
    { id: 'progress', ico: '📈', label: 'Progress'  },
    { id: 'daily',    ico: '🎯', label: 'Daily'     },
    { id: 'settings', ico: '⚙️', label: 'Settings'  },
  ];

  return (
    <div className="nav-wrap">
      <nav className="nav" role="navigation" aria-label="Main navigation">
        {items.map(it => (
          <button
            key={it.id}
            className={active === it.id ? 'active' : ''}
            onClick={() => onNav(it.id)}
            aria-label={it.label}
            aria-current={active === it.id ? 'page' : undefined}
          >
            <span className="nv-ico" aria-hidden="true">{it.ico}</span>
            <span>{it.label}</span>
          </button>
        ))}
      </nav>
    </div>
  );
}
