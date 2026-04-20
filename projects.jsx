/* Projects — things cats "made" */

const PROJECTS = [
  { name:'PurrScript', by:'Теффі', tag:'мова', color:'var(--lavender)',
    desc:'Функціональна мова, де всі вирази повертають Promise<Purr>. Замість коментарів — *муркоче тут*.',
    stats:{'★':2847, PR:412, '♥':9201}, status:'в розробці' },
  { name:'Lapkа UI', by:'Мурка', tag:'UI kit', color:'var(--rose)',
    desc:'Компонент-бібліотека з 88 кнопками, 12 типами карток і одним справжнім клубком. Усе дуже кругле.',
    stats:{'★':5120, PR:233, '♥':14093}, status:'v2.4' },
  { name:'Borrowed Fish', by:'Барсик', tag:'CLI', color:'var(--beige)',
    desc:'Rust-CLI, який позичає риби з холодильника і повертає їх строго в межах lifetime. Memory-safe.',
    stats:{'★':1294, PR:87, '♥':3012}, status:'stable' },
  { name:'TuneType', by:'Сметанка', tag:'tooling', color:'var(--cream-deep)',
    desc:'TypeScript-лінтер, який перетворює кожне any на unknown і пише про це у твоїй совісті.',
    stats:{'★':3402, PR:156, '♥':7720}, status:'v1.0' },
  { name:'goSleep', by:'Пушок', tag:'бібліотека', color:'var(--mint)',
    desc:'Бібліотека для Go, яка дозволяє горутині поспати у 5 місцях одночасно. Всі місця — типобезпечні.',
    stats:{'★':901, PR:41, '♥':2183}, status:'beta' },
  { name:'SELECT ♡', by:'Лапка', tag:'SQL', color:'var(--mint)',
    desc:'Діалект SQL, де замість зірочки WHERE спочатку. Оптимізатор муркоче індексами автоматично.',
    stats:{'★':702, PR:29, '♥':1801}, status:'experiment' },
];

const ProjectsPage = () => (
  <>
    <Nav active="projects.html"/>
    <section>
      <div className="page">
        <div style={{textAlign:'center', marginBottom:40}}>
          <span className="eyebrow">Портфоліо академії</span>
          <h1 style={{marginTop:12}}>
            Проєкти, <span className="underlined butter">зроблені лапою</span>
          </h1>
          <p style={{maxWidth:620, margin:'20px auto 0', fontSize:18}}>
            Усе, що наші котики встигли написати, поки ми спали. Відкритий код, закрита миска з тунцем.
          </p>
        </div>

        <div className="grid" style={{gridTemplateColumns:'repeat(auto-fill, minmax(360px, 1fr))'}}>
          {PROJECTS.map((p, i) => (
            <article key={p.name} className="card pop" style={{background: p.color, padding:28}}>
              <div className="row" style={{justifyContent:'space-between', alignItems:'flex-start'}}>
                <span className="chip" style={{background:'var(--paper)'}}>{p.tag}</span>
                <span className="chip" style={{background:'var(--ink)', color:'var(--paper)', borderColor:'var(--ink)'}}>{p.status}</span>
              </div>

              {/* browser-like preview card */}
              <div style={{marginTop:20, background:'var(--paper)', border:'2.5px solid var(--outline)', borderRadius:16, overflow:'hidden'}}>
                <div style={{display:'flex',alignItems:'center',gap:6,padding:'8px 12px',borderBottom:'2px solid var(--outline)',background:'var(--cream-deep)'}}>
                  <span style={{width:10,height:10,borderRadius:'50%',background:'oklch(0.75 0.1 20)'}}/>
                  <span style={{width:10,height:10,borderRadius:'50%',background:'oklch(0.85 0.09 95)'}}/>
                  <span style={{width:10,height:10,borderRadius:'50%',background:'oklch(0.8 0.1 150)'}}/>
                  <span style={{marginLeft:8, fontFamily:'monospace', fontSize:11, color:'var(--ink-soft)'}}>{p.name.toLowerCase().replace(/[^a-z]/g,'')}.dev</span>
                </div>
                <div style={{padding:'20px 18px', display:'grid', gridTemplateColumns:'auto 1fr', gap:16, alignItems:'center'}}>
                  <div style={{width:64, height:64, borderRadius:16, background: p.color, border:'2.5px solid var(--outline)', display:'grid', placeItems:'center', fontFamily:'Fredoka', fontWeight:700, fontSize:28}}>
                    {p.name[0]}
                  </div>
                  <div>
                    <div style={{fontFamily:'Fredoka', fontWeight:700, fontSize:20}}>{p.name}</div>
                    <div style={{fontSize:13, color:'var(--ink-soft)', marginTop:2}}>автор: {p.by}</div>
                  </div>
                </div>
              </div>

              <p style={{marginTop:18, color:'var(--ink)'}}>{p.desc}</p>

              <div className="row" style={{marginTop:18, justifyContent:'space-between', padding:'14px 0 0', borderTop:'2px dashed var(--outline)'}}>
                {Object.entries(p.stats).map(([k,v]) => (
                  <div key={k} style={{textAlign:'center'}}>
                    <div style={{fontFamily:'Fredoka', fontWeight:700, fontSize:18}}>{v.toLocaleString('uk')}</div>
                    <div style={{fontSize:11, color:'var(--ink-soft)', fontWeight:700}}>{k}</div>
                  </div>
                ))}
              </div>

              <div className="row" style={{marginTop:18}}>
                <a href="#" className="btn small">Дивитись репо</a>
                <a href="#" className="btn ghost small">Документація</a>
              </div>
            </article>
          ))}
        </div>

        <div className="card" style={{marginTop:48, textAlign:'center', background:'var(--paper)', padding:'40px 32px'}}>
          <h2>Маєш ідею для проєкту?</h2>
          <p style={{marginTop:12, maxWidth:520, margin:'12px auto 0'}}>
            Ми муркочемо по код-ревʼю, пайр-програмуванню і MVP за вихідні. Принеси ідею — винесемо прототип.
          </p>
          <a href="hire.html" className="btn" style={{marginTop:20}}>Запропонувати проєкт <Paw size={14} color="currentColor"/></a>
        </div>
      </div>
    </section>
    <Footer/>
    <FloatingWidgets/>
  </>
);

ReactDOM.createRoot(document.getElementById('root')).render(<ProjectsPage/>);
