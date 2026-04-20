/* Shared nav + footer + global interactive features */

const NAV_LINKS = [
  { href: 'index.html', label: 'Головна' },
  { href: 'gallery.html', label: 'Котики' },
  { href: 'diary.html', label: 'Щоденник' },
  { href: 'projects.html', label: 'Проєкти' },
  { href: 'faq.html', label: 'FAQ' },
  { href: 'hire.html', label: 'Найняти' },
];

const Nav = ({ active }) => {
  const [open, setOpen] = React.useState(false);
  return (
    <nav className="nav">
      <a href="index.html" className="brand">
        <span className="brand-mark">
          <CatMark size={30}/>
        </span>
        <span>CodePaws</span>
      </a>
      <div className={'links' + (open ? ' open' : '')}>
        {NAV_LINKS.map(l => (
          <a key={l.href} href={l.href} className={active === l.href ? 'active' : ''}>{l.label}</a>
        ))}
      </div>
      <a href="hire.html" className="btn small cta">Приєднатись <Paw size={14} color="currentColor"/></a>
      <button onClick={() => setOpen(!open)} aria-label="menu" style={{display:'none'}} className="menu-toggle">≡</button>
    </nav>
  );
};

const Footer = () => (
  <footer>
    <div className="footer-inner">
      <div>
        <div style={{display:'flex', alignItems:'center', gap:10, marginBottom:12}}>
          <span className="brand-mark" style={{width:44,height:44,borderRadius:'50%',background:'var(--rose)',border:'2.5px solid var(--outline)',display:'grid',placeItems:'center'}}>
            <CatMark size={32}/>
          </span>
          <span style={{fontFamily:'Fredoka',fontWeight:700,fontSize:22}}>CodePaws</span>
        </div>
        <p style={{maxWidth:320, fontSize:14}}>Академія, де коти вчать людей кодити. Мурчання включено, баги ловимо лапою.</p>
      </div>
      <div>
        <h4>Навчання</h4>
        <a href="gallery.html">Котики-викладачі</a>
        <a href="projects.html">Проєкти</a>
        <a href="diary.html">Щоденник</a>
      </div>
      <div>
        <h4>Компанія</h4>
        <a href="faq.html">FAQ</a>
        <a href="hire.html">Приєднатись</a>
        <a href="#">Контакти</a>
      </div>
      <div>
        <h4>Соцмережі</h4>
        <a href="#">Meowstodon</a>
        <a href="#">Purrsonal Blog</a>
        <a href="#">GitPaw</a>
      </div>
    </div>
    <div style={{maxWidth:1280,margin:'40px auto 0',padding:'24px 0 0',borderTop:'2px dashed var(--outline)',display:'flex',justifyContent:'space-between',flexWrap:'wrap',gap:12,fontSize:13,color:'var(--ink-soft)',fontWeight:600}}>
      <span>© 2026 CodePaws. Усі лапки захищено.</span>
      <span>Зроблено з <span style={{color:'oklch(0.7 0.12 20)'}}>♥</span> і муркотінням в Києві</span>
    </div>
  </footer>
);

/* ------- Global floating widgets: Pet button + Night toggle + Yarn ------- */

const PetButton = () => {
  const [count, setCount] = React.useState(() => Number(localStorage.getItem('pets') || 0));
  const [burst, setBurst] = React.useState(0);
  const [purrs, setPurrs] = React.useState([]);

  const pet = (e) => {
    const n = count + 1;
    setCount(n);
    localStorage.setItem('pets', String(n));
    setBurst(b => b + 1);
    const id = Date.now() + Math.random();
    const words = ['мур', 'муррр', 'мяу', 'пррр', 'nya~', '♥'];
    const w = words[Math.floor(Math.random()*words.length)];
    setPurrs(p => [...p, {id, w, x: (Math.random()-0.5)*60, y: -20 - Math.random()*30}]);
    setTimeout(() => setPurrs(p => p.filter(x => x.id !== id)), 1400);
  };

  return (
    <div style={{position:'fixed',right:24,bottom:24,zIndex:200,display:'flex',flexDirection:'column',alignItems:'flex-end',gap:10}}>
      <div style={{position:'relative'}}>
        {purrs.map(p => (
          <span key={p.id} style={{
            position:'absolute', left:'50%', top:0,
            transform:`translate(${p.x}px, ${p.y}px)`,
            fontFamily:'Fredoka', fontWeight:700, fontSize:18,
            color:'oklch(0.55 0.15 20)',
            animation:'purrFloat 1.4s ease-out forwards',
            pointerEvents:'none',
            whiteSpace:'nowrap',
          }}>{p.w}</span>
        ))}
      </div>
      <button onClick={pet} className="btn rose" style={{
        borderRadius:'50%',
        width:72, height:72, padding:0,
        boxShadow:'0 6px 0 -1px var(--outline)',
        display:'grid', placeItems:'center',
        transform: burst ? 'scale(1.1)' : 'scale(1)',
        transition: 'transform .18s cubic-bezier(.4,2,.6,1)',
      }} onMouseDown={e => e.currentTarget.style.transform='scale(0.92)'}
         onMouseUp={e => e.currentTarget.style.transform='scale(1)'}
         title="Погладити кота">
        <Paw size={32} color="white"/>
      </button>
      <div style={{background:'var(--paper)',border:'2.5px solid var(--outline)',borderRadius:14,padding:'6px 12px',fontSize:13,fontWeight:700,fontFamily:'Fredoka',boxShadow:'0 3px 0 -1px var(--outline)'}}>
        {count} погладжень
      </div>
    </div>
  );
};

const NightToggle = () => {
  const [night, setNight] = React.useState(() => localStorage.getItem('night') === '1');
  React.useEffect(() => {
    document.body.classList.toggle('night', night);
    localStorage.setItem('night', night ? '1' : '0');
  }, [night]);
  return (
    <button onClick={() => setNight(!night)} aria-label="day/night"
      style={{
        position:'fixed', left:24, bottom:24, zIndex:200,
        width:56, height:56, borderRadius:'50%',
        background: night ? 'oklch(0.3 0.05 280)' : 'var(--butter)',
        border:'2.5px solid var(--outline)',
        boxShadow:'0 5px 0 -1px var(--outline)',
        display:'grid', placeItems:'center',
        fontSize:24,
      }}>
      {night ? '🌙' : '☀️'}
    </button>
  );
};

// Draggable yarn ball — floats on page, can be dragged
const DraggableYarn = () => {
  const [pos, setPos] = React.useState({ x: 80, y: window.innerHeight - 200 });
  const [drag, setDrag] = React.useState(false);
  const offset = React.useRef({x:0,y:0});
  const [rot, setRot] = React.useState(0);

  const onDown = (e) => {
    const p = e.touches ? e.touches[0] : e;
    offset.current = { x: p.clientX - pos.x, y: p.clientY - pos.y };
    setDrag(true);
  };
  React.useEffect(() => {
    if (!drag) return;
    const move = (e) => {
      const p = e.touches ? e.touches[0] : e;
      setPos({ x: p.clientX - offset.current.x, y: p.clientY - offset.current.y });
      setRot(r => r + 8);
    };
    const up = () => setDrag(false);
    window.addEventListener('mousemove', move);
    window.addEventListener('touchmove', move);
    window.addEventListener('mouseup', up);
    window.addEventListener('touchend', up);
    return () => {
      window.removeEventListener('mousemove', move);
      window.removeEventListener('touchmove', move);
      window.removeEventListener('mouseup', up);
      window.removeEventListener('touchend', up);
    };
  }, [drag]);

  return (
    <div onMouseDown={onDown} onTouchStart={onDown}
      style={{
        position:'fixed', left:pos.x, top:pos.y, zIndex:150,
        cursor: drag ? 'grabbing' : 'grab',
        transform:`rotate(${rot}deg)`,
        userSelect:'none',
        touchAction:'none',
        filter:'drop-shadow(0 4px 0 oklch(0.27 0.025 55 / 0.2))',
      }}
      title="Пограти з клубком!">
      <YarnBall size={64}/>
    </div>
  );
};

const FloatingWidgets = () => (
  <>
    <PetButton/>
    <NightToggle/>
    <DraggableYarn/>
    <div className="stars"/>
  </>
);

Object.assign(window, { Nav, Footer, NAV_LINKS, PetButton, NightToggle, DraggableYarn, FloatingWidgets });
