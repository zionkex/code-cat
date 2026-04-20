/* Home page content */

// Animated counters
const Counter = ({ value, label, color }) => {
  const [n, setN] = React.useState(0);
  React.useEffect(() => {
    let start = 0;
    const dur = 1400;
    const t0 = performance.now();
    let raf;
    const tick = (t) => {
      const p = Math.min(1, (t - t0)/dur);
      const eased = 1 - Math.pow(1-p, 3);
      setN(Math.floor(value * eased));
      if (p < 1) raf = requestAnimationFrame(tick);
    };
    raf = requestAnimationFrame(tick);
    return () => cancelAnimationFrame(raf);
  }, [value]);
  return (
    <div className="card" style={{textAlign:'center', background: color, borderRadius: 32}}>
      <div className="display" style={{fontSize:'clamp(44px, 5vw, 64px)', fontWeight:700, lineHeight:1}}>
        {n.toLocaleString('uk')}
      </div>
      <p style={{marginTop:8, fontWeight:700, color:'var(--ink)', fontSize:14, textTransform:'uppercase', letterSpacing:'0.08em'}}>{label}</p>
    </div>
  );
};

// Cat-terminal widget — talks to you
const CatTerminal = () => {
  const scripted = [
    { q: 'привіт', a: 'Мяу-привіт! Я — Теффі, головна кодерка академії. Муркаю по-пайтонівськи 🐍' },
    { q: 'хто ти', a: 'Я — Теффі. 7 років досвіду, 12 000 буд багів упіймано (переважно лапою).' },
    { q: 'як справи', a: 'Муркочу над ПР-ом. Принесла миша — команда сміялась, але баг закрили.' },
    { q: 'що робити', a: 'Спробуй ls ~/мурчання або запитай про улюблену мову.' },
    { q: 'допомога', a: 'Команди: привіт, хто ти, як справи, улюблена мова, погладь, вихід' },
    { q: 'улюблена мова', a: 'Python — бо зміїна, хрускотить як іграшка. Rust теж гарний — оксиди́н!' },
    { q: 'погладь', a: '*муррр* *потягується* *влаштовується на твоєму ноутбуці прямо на клавіатурі*' },
  ];
  const [lines, setLines] = React.useState([
    { from: 'cat', text: '*прокидається, тягнеться* Мур… Я — Теффі. Напиши щось, і я відповім.' },
    { from: 'sys', text: 'підказка: привіт, хто ти, улюблена мова, погладь' },
  ]);
  const [input, setInput] = React.useState('');
  const endRef = React.useRef(null);

  React.useEffect(() => {
    endRef.current?.parentElement?.scrollTo({top:99999, behavior:'smooth'});
  }, [lines]);

  const send = (e) => {
    e.preventDefault();
    if (!input.trim()) return;
    const q = input.toLowerCase().trim();
    const match = scripted.find(s => q.includes(s.q));
    const ai = match ? match.a : (
      ['*нахиляє голову* Не зовсім зрозуміла, але звучить цікаво. Продовжуй чухати мене за вухом.',
       '*мигає* Муррр? Може, спробуй «допомога»?',
       'Хмм… я краще у колбеках, ніж у цій темі. Але твій голос — приємний. *мур*'][Math.floor(Math.random()*3)]
    );
    setLines(l => [...l, { from:'you', text: input }]);
    setTimeout(() => setLines(l => [...l, { from:'cat', text: ai }]), 420);
    setInput('');
  };

  return (
    <div className="card" style={{background:'oklch(0.24 0.03 280)', color:'oklch(0.95 0.02 80)', borderRadius: 28, padding:0, overflow:'hidden'}}>
      {/* terminal bar */}
      <div style={{display:'flex',alignItems:'center',gap:8,padding:'12px 16px',background:'oklch(0.3 0.035 280)',borderBottom:'2.5px solid var(--outline)'}}>
        <span style={{width:12,height:12,borderRadius:'50%',background:'oklch(0.75 0.1 20)',border:'1.5px solid rgba(0,0,0,.3)'}}/>
        <span style={{width:12,height:12,borderRadius:'50%',background:'oklch(0.85 0.09 95)',border:'1.5px solid rgba(0,0,0,.3)'}}/>
        <span style={{width:12,height:12,borderRadius:'50%',background:'oklch(0.8 0.1 150)',border:'1.5px solid rgba(0,0,0,.3)'}}/>
        <span style={{marginLeft:12,fontFamily:'monospace',fontSize:13,opacity:0.7}}>~/teffy — meow.sh</span>
      </div>
      <div style={{padding:'20px 22px', minHeight:240, maxHeight:280, overflowY:'auto', fontFamily:'ui-monospace, SF Mono, monospace', fontSize:14, lineHeight:1.7}}>
        {lines.map((l, i) => (
          <div key={i} style={{marginBottom:4, color: l.from==='you' ? 'oklch(0.88 0.08 95)' : l.from==='sys' ? 'oklch(0.7 0.02 80)' : 'oklch(0.88 0.06 300)'}}>
            {l.from === 'you' ? '❯ ' : l.from === 'sys' ? '  ' : '🐾 '}{l.text}
          </div>
        ))}
        <div ref={endRef}/>
      </div>
      <form onSubmit={send} style={{display:'flex',gap:10,padding:'12px 18px',borderTop:'2px solid oklch(0.35 0.04 280)'}}>
        <span style={{fontFamily:'monospace',color:'oklch(0.85 0.08 300)'}}>❯</span>
        <input value={input} onChange={e => setInput(e.target.value)}
          placeholder="напиши щось коту…"
          style={{flex:1,background:'transparent',border:'none',outline:'none',color:'inherit',fontFamily:'monospace',fontSize:14}}/>
        <button className="btn small" style={{background:'oklch(0.82 0.06 300)',color:'#2a2320',boxShadow:'none',borderColor:'oklch(0.6 0.08 300)'}}>send</button>
      </form>
    </div>
  );
};

// Feature pill
const Feature = ({ icon, title, desc, bg }) => (
  <div className="card pop" style={{background: bg}}>
    <div style={{width:56,height:56,borderRadius:18,background:'var(--paper)',border:'2.5px solid var(--outline)',display:'grid',placeItems:'center',marginBottom:16, fontSize:26}}>
      {icon}
    </div>
    <h3>{title}</h3>
    <p style={{marginTop:8}}>{desc}</p>
  </div>
);

// Spotlight teacher mini-card (link to gallery)
const TeacherMini = ({ name, lang, color, accent, tag, rotate }) => (
  <a href="gallery.html" className="card pop" style={{textDecoration:'none', textAlign:'center', background:'var(--paper)', transform:`rotate(${rotate}deg)`}}>
    <div style={{display:'grid',placeItems:'center'}}>
      <CatChibi color={color} accent={accent} size={140}/>
    </div>
    <h3 style={{marginTop:8}}>{name}</h3>
    <span className="chip" style={{marginTop:8}}>{lang}</span>
    <p style={{marginTop:10, fontSize:14}}>{tag}</p>
  </a>
);

const HomePage = () => (
  <>
    <Nav active="index.html"/>

    {/* HERO */}
    <section style={{position:'relative', overflow:'hidden', paddingTop:48}}>
      <div className="blob" style={{width:420,height:420,background:'var(--rose)',top:-80,left:-60}}/>
      <div className="blob" style={{width:380,height:380,background:'var(--lavender)',top:180,right:-80}}/>
      <div className="blob" style={{width:260,height:260,background:'var(--butter)',bottom:-20,left:'40%'}}/>
      <div className="page" style={{position:'relative', zIndex:2}}>
        <div style={{display:'grid',gridTemplateColumns:'1.2fr 1fr',gap:40,alignItems:'center'}} className="hero-grid">
          <div className="stack" style={{'--stack':'24px'}}>
            <span className="eyebrow">Академія CodePaws · муркотіння з 2019</span>
            <h1>
              Коти вчать тебе <span className="underlined">кодити</span>,<br/>
              а ти вчиш їх <span className="underlined lavender">не лягати</span> на клавіатуру.
            </h1>
            <p style={{fontSize:19, maxWidth:560}}>
              Ласкаво просимо до академії, де Теффі пояснює рекурсію через клубок,
              а Мурка проводить код-ревʼю під лоу-фай біт. Муркотіння гарантовано, баги — лапою.
            </p>
            <div className="row" style={{marginTop:8}}>
              <a href="gallery.html" className="btn">
                Познайомитись з котами <Paw size={16} color="currentColor"/>
              </a>
              <a href="faq.html" className="btn ghost">Чому саме коти?</a>
            </div>
            <div className="row" style={{marginTop:24, gap:24}}>
              <div style={{display:'flex',alignItems:'center',gap:10}}>
                <div style={{display:'flex'}}>
                  {['oklch(0.85 0.055 20)','oklch(0.82 0.06 300)','oklch(0.88 0.04 75)','oklch(0.88 0.055 170)'].map((c,i) => (
                    <span key={i} style={{width:32,height:32,borderRadius:'50%',background:c,border:'2.5px solid var(--outline)',marginLeft:i?-10:0,display:'grid',placeItems:'center'}}>
                      <CatMark size={22} color={c}/>
                    </span>
                  ))}
                </div>
                <div>
                  <div style={{fontWeight:800, fontFamily:'Fredoka', fontSize:16}}>12 котиків-викладачів</div>
                  <div style={{fontSize:13,color:'var(--ink-soft)'}}>усі муркочуть на різних мовах</div>
                </div>
              </div>
            </div>
          </div>

          <div style={{position:'relative', display:'grid', placeItems:'center', minHeight:420}}>
            <span className="sticker float" style={{top:20, left:-10, background:'var(--butter)', zIndex:3}}>
              🐾 головна муркотіль
            </span>
            <span className="sticker" style={{top:80, right:-20, background:'var(--mint)', transform:'rotate(5deg)', zIndex:3}}>
              7 років досвіду
            </span>
            <span className="sticker float" style={{bottom:20, left:30, background:'var(--lavender)', transform:'rotate(-4deg)', zIndex:3}}>
              any() {'//'} true ♥
            </span>
            <div style={{
              background:'radial-gradient(circle at center, var(--butter) 0%, transparent 65%)',
              borderRadius:'50%', width:500, height:500, display:'grid', placeItems:'center',
            }}>
              <CatTeffy size={360}/>
            </div>
          </div>
        </div>
      </div>
    </section>

    {/* COUNTERS */}
    <section style={{paddingTop:20}}>
      <div className="page">
        <div className="grid grid-4">
          <Counter value={12483} label="пійманих багів" color="var(--butter)"/>
          <Counter value={9120} label="чашок кави" color="var(--rose)"/>
          <Counter value={47390} label="муркотінь за день" color="var(--lavender)"/>
          <Counter value={132} label="поламаних клавіатур" color="var(--mint)"/>
        </div>
      </div>
    </section>

    {/* WHY CATS */}
    <section>
      <div className="page">
        <div style={{textAlign:'center', marginBottom:48}}>
          <span className="eyebrow">Наш метод</span>
          <h2 style={{marginTop:12}}>Чому вчитись саме <span className="underlined mint">у котиків</span>?</h2>
          <p style={{maxWidth:640,margin:'16px auto 0',fontSize:18}}>
            Коти — ідеальні наставники. Вони ніколи не поспішають, завжди кажуть правду (мʼяуканням)
            і не соромляться спати посеред standup-у.
          </p>
        </div>
        <div className="grid grid-3">
          <Feature icon="🧶" title="Навчання через клубок" desc="Пояснюємо рекурсію, ліст-компрехеншен і цикли while через справжні клубки ниток. Заплутався? Це і є сенс." bg="var(--paper)"/>
          <Feature icon="😴" title="Пауза == продуктивність" desc="Кожні 40 хвилин — обовʼязкова 16-годинна пауза на сон. За статистикою, 93% рефакторингів приходять уві сні." bg="var(--paper)"/>
          <Feature icon="🐟" title="Мотивація — риба" desc="Кожна закрита задача = один шматочок тунця. Ми підрахували: це ефективніше, ніж OKR і standup-и разом узяті." bg="var(--paper)"/>
        </div>
      </div>
    </section>

    {/* TEACHERS PREVIEW */}
    <section style={{background:'var(--cream-deep)', borderTop:'2.5px solid var(--outline)', borderBottom:'2.5px solid var(--outline)'}}>
      <div className="page">
        <div className="row" style={{justifyContent:'space-between', alignItems:'flex-end', marginBottom:36}}>
          <div>
            <span className="eyebrow">Команда</span>
            <h2 style={{marginTop:12}}>Наші <span className="underlined">зірки</span></h2>
          </div>
          <a href="gallery.html" className="btn ghost small">Усі котики →</a>
        </div>
        <div className="grid grid-4">
          <TeacherMini name="Теффі" lang="Python" color="oklch(0.82 0.06 300)" accent="oklch(0.7 0.09 298)" tag="Кофейний тех-лід" rotate={-1.5}/>
          <TeacherMini name="Мурка" lang="JavaScript" color="oklch(0.85 0.055 20)" accent="oklch(0.75 0.08 18)" tag="Королева async/await" rotate={1.5}/>
          <TeacherMini name="Барсик" lang="Rust 🦀" color="oklch(0.88 0.04 75)" accent="oklch(0.78 0.055 70)" tag="Borrow-checker-шептун" rotate={-1}/>
          <TeacherMini name="Сметанка" lang="TypeScript" color="oklch(0.97 0.015 80)" accent="oklch(0.85 0.04 75)" tag="Любить типізацію" rotate={1}/>
        </div>
      </div>
    </section>

    {/* TALK TO CAT */}
    <section>
      <div className="page">
        <div style={{display:'grid', gridTemplateColumns:'1fr 1.1fr', gap:48, alignItems:'center'}} className="hero-grid">
          <div className="stack">
            <span className="eyebrow">Запитай у кота</span>
            <h2>Поговори <span className="underlined butter">з Теффі</span> прямо зараз</h2>
            <p style={{fontSize:18}}>
              Теффі онлайн 23 години на добу (година на умивання). Напиши їй привіт,
              спитай про улюблену мову — вона розкаже все як є, з муркотінням замість punctuation.
            </p>
            <div className="row">
              <span className="chip rose">онлайн</span>
              <span className="chip lavender">не сердиться</span>
              <span className="chip mint">муркоче стабільно</span>
            </div>
          </div>
          <CatTerminal/>
        </div>
      </div>
    </section>

    {/* DIARY PEEK */}
    <section style={{background:'var(--paper)', borderTop:'2.5px solid var(--outline)', borderBottom:'2.5px solid var(--outline)'}}>
      <div className="page">
        <div className="row" style={{justifyContent:'space-between', alignItems:'flex-end', marginBottom:32}}>
          <div>
            <span className="eyebrow">Щоденник</span>
            <h2 style={{marginTop:12}}>Думки <span className="underlined lavender">наших мурчиків</span></h2>
          </div>
          <a href="diary.html" className="btn ghost small">Усі записи →</a>
        </div>
        <div className="grid grid-3">
          {[
            { author:'Теффі', color:'var(--lavender)', title:'Сьогодні я пушнула прод', body:'Лапа впала на Enter. CI зібрався. Ніхто не помітив. Кажуть, так працює більшість інженерів.', mood:'😼' },
            { author:'Мурка', color:'var(--rose)', title:'PR #427: додала муркотіння', body:'Reviewer написав LGTM. Я написала MRRR. Ми зійшлись — мерджимо.', mood:'💕' },
            { author:'Барсик', color:'var(--beige)', title:'borrow checker знову правий', body:'Я злився годину. Потім зрозумів: він не злий. Він просто дуже обережний, як і я перед стрибком.', mood:'🧠' },
          ].map((d,i) => (
            <div key={i} className="card pop" style={{background: d.color, minHeight:200}}>
              <div className="row" style={{justifyContent:'space-between'}}>
                <span className="chip" style={{background:'var(--paper)'}}>@{d.author.toLowerCase()}</span>
                <span style={{fontSize:24}}>{d.mood}</span>
              </div>
              <h3 style={{marginTop:16}}>{d.title}</h3>
              <p style={{marginTop:10, color:'var(--ink)'}}>{d.body}</p>
            </div>
          ))}
        </div>
      </div>
    </section>

    {/* CTA */}
    <section>
      <div className="page">
        <div className="card" style={{background:'var(--ink)', color:'var(--paper)', padding:'56px 48px', textAlign:'center', position:'relative', overflow:'hidden'}}>
          <div style={{position:'absolute', top:-30, left:-30, opacity:0.15}}><Paw size={200} color="white"/></div>
          <div style={{position:'absolute', bottom:-40, right:-40, opacity:0.15, transform:'rotate(40deg)'}}><Paw size={220} color="white"/></div>
          <span className="eyebrow" style={{color:'oklch(0.85 0.04 75)'}}>Чекаємо на тебе</span>
          <h2 style={{marginTop:12, color:'var(--paper)', maxWidth:700, margin:'12px auto 0'}}>
            Готовий(-а) стати кодером, якого котики схвалять?
          </h2>
          <p style={{marginTop:16, color:'oklch(0.88 0.03 75)', maxWidth:520, margin:'16px auto 0', fontSize:18}}>
            Записуйся на перше заняття з Теффі. Перші 30 хвилин — безкоштовне погладжування.
          </p>
          <div className="row" style={{justifyContent:'center', marginTop:28}}>
            <a href="hire.html" className="btn ghost">Приєднатись до академії</a>
            <a href="projects.html" className="btn" style={{background:'var(--rose-deep)', borderColor:'var(--paper)'}}>Подивитись проєкти</a>
          </div>
        </div>
      </div>
    </section>

    <Footer/>
    <FloatingWidgets/>
  </>
);

ReactDOM.createRoot(document.getElementById('root')).render(<HomePage/>);
