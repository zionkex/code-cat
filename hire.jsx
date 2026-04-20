/* Hire — join the academy */

const HirePage = () => {
  const [form, setForm] = React.useState({name:'', email:'', role:'student', cat:'Теффі', msg:'', tuna:'тунець'});
  const [submitted, setSubmitted] = React.useState(false);
  const [step, setStep] = React.useState(1);

  const update = (k, v) => setForm(f => ({...f, [k]: v}));

  const submit = (e) => {
    e.preventDefault();
    setSubmitted(true);
  };

  if (submitted) return (
    <>
      <Nav active="hire.html"/>
      <section style={{paddingTop:80}}>
        <div className="page" style={{textAlign:'center'}}>
          <div style={{display:'grid', placeItems:'center', marginBottom:24}}>
            <CatTeffy size={280}/>
          </div>
          <h1>Муррр! <span className="underlined">Ти у списку</span>.</h1>
          <p style={{maxWidth:500, margin:'24px auto 0', fontSize:18}}>
            {form.name}, ми отримали твою заявку. {form.cat} сьогодні спить, але завтра (після обіду, після сну, після умивання) — подивиться.
          </p>
          <p style={{marginTop:16, fontSize:15, color:'var(--ink-soft)'}}>
            Відповідь прийде на {form.email} протягом 1–7 котячих днів.
          </p>
          <a href="index.html" className="btn" style={{marginTop:32}}>На головну</a>
        </div>
      </section>
      <Footer/>
      <FloatingWidgets/>
    </>
  );

  return (
    <>
      <Nav active="hire.html"/>
      <section>
        <div className="page">
          <div style={{display:'grid', gridTemplateColumns:'1fr 1.1fr', gap:56, alignItems:'center'}} className="hero-grid">
            <div>
              <span className="eyebrow">Приєднуйся</span>
              <h1 style={{marginTop:12}}>
                Запишись на <span className="underlined lavender">перше заняття</span>
              </h1>
              <p style={{marginTop:20, fontSize:18}}>
                Перше погладжування — безкоштовне. Потім — за тунець. Обирай котика, пиши кілька слів — ми підберемо тебе у розклад.
              </p>

              <div className="stack" style={{'--stack':'14px', marginTop:32}}>
                {[
                  { emoji:'🐾', title:'Персональний котик', desc:'1:1 заняття з обраним викладачем' },
                  { emoji:'🧶', title:'Клубки за домовленістю', desc:'У вартість входять усі навчальні матеріали' },
                  { emoji:'😴', title:'Без зайвого стресу', desc:'Ми не сваримось. Ми просто ігноруємо поганий код.' },
                ].map((b,i) => (
                  <div key={i} className="row" style={{padding:16, background:'var(--paper)', border:'2.5px solid var(--outline)', borderRadius:20, boxShadow:'var(--shadow)'}}>
                    <span style={{width:48,height:48,borderRadius:14,background:'var(--butter)',border:'2.5px solid var(--outline)',display:'grid',placeItems:'center',fontSize:22}}>{b.emoji}</span>
                    <div>
                      <div style={{fontFamily:'Fredoka', fontWeight:700, fontSize:17}}>{b.title}</div>
                      <div style={{fontSize:14, color:'var(--ink-soft)'}}>{b.desc}</div>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            <form onSubmit={submit} className="card" style={{padding:36, background:'var(--paper)', position:'relative', overflow:'hidden'}}>
              <span className="sticker" style={{top:12, right:-30, background:'var(--mint)', transform:'rotate(8deg)'}}>🐟 безкоштовно</span>
              <h2 style={{marginBottom:8}}>Заявка</h2>
              <p style={{marginBottom:24, fontSize:14}}>Крок {step} з 2</p>

              {step === 1 ? (
                <div className="stack" style={{'--stack':'18px'}}>
                  <Field label="Як тебе звати?" value={form.name} onChange={v => update('name', v)} placeholder="Наприклад, Олена"/>
                  <Field label="Email" value={form.email} onChange={v => update('email', v)} placeholder="мур@example.com" type="email"/>

                  <div>
                    <label style={{fontFamily:'Fredoka', fontWeight:600, fontSize:14, display:'block', marginBottom:8}}>Твоя роль</label>
                    <div className="row" style={{gap:8}}>
                      {[
                        {v:'student', l:'Учень'},
                        {v:'intern', l:'Стажер'},
                        {v:'team', l:'Команда'},
                      ].map(r => (
                        <button key={r.v} type="button" onClick={() => update('role', r.v)} className="chip"
                          style={{background: form.role===r.v?'var(--ink)':'var(--paper)', color: form.role===r.v?'var(--paper)':'var(--ink)', cursor:'pointer', padding:'10px 16px'}}>
                          {r.l}
                        </button>
                      ))}
                    </div>
                  </div>

                  <button type="button" onClick={() => setStep(2)} className="btn" disabled={!form.name || !form.email}
                    style={{opacity: (!form.name||!form.email)?0.5:1, marginTop:12, justifyContent:'center', width:'100%'}}>
                    Далі <Paw size={14} color="currentColor"/>
                  </button>
                </div>
              ) : (
                <div className="stack" style={{'--stack':'18px'}}>
                  <div>
                    <label style={{fontFamily:'Fredoka', fontWeight:600, fontSize:14, display:'block', marginBottom:10}}>До якого котика запишемо?</label>
                    <div style={{display:'grid', gridTemplateColumns:'repeat(3, 1fr)', gap:8}}>
                      {['Теффі','Мурка','Барсик','Сметанка','Пушок','Лапка'].map(c => (
                        <button key={c} type="button" onClick={() => update('cat', c)}
                          style={{
                            padding:14, borderRadius:14,
                            background: form.cat===c?'var(--lavender)':'var(--paper)',
                            border:'2.5px solid var(--outline)',
                            fontFamily:'Fredoka', fontWeight:600, fontSize:14, cursor:'pointer',
                            boxShadow: form.cat===c ? '0 3px 0 -1px var(--outline)' : 'none',
                          }}>{c}</button>
                      ))}
                    </div>
                  </div>

                  <div>
                    <label style={{fontFamily:'Fredoka', fontWeight:600, fontSize:14, display:'block', marginBottom:8}}>Чим заплатиш за заняття?</label>
                    <div className="row" style={{gap:8}}>
                      {['тунець','форель','сардинки','лосось','крім-брюле 😸'].map(t => (
                        <button key={t} type="button" onClick={() => update('tuna', t)} className="chip"
                          style={{background: form.tuna===t?'var(--rose-deep)':'var(--paper)', color: form.tuna===t?'var(--paper)':'var(--ink)', cursor:'pointer', padding:'8px 14px'}}>
                          {t}
                        </button>
                      ))}
                    </div>
                  </div>

                  <div>
                    <label style={{fontFamily:'Fredoka', fontWeight:600, fontSize:14, display:'block', marginBottom:8}}>Що хочеш вивчити?</label>
                    <textarea value={form.msg} onChange={e => update('msg', e.target.value)}
                      placeholder="Наприклад: навчитись рекурсії через клубок, зрозуміти async/await, просто погладити кота…"
                      style={{width:'100%', minHeight:120, padding:14, background:'var(--cream)', border:'2.5px solid var(--outline)', borderRadius:16, fontFamily:'inherit', fontSize:15, resize:'vertical', outline:'none'}}/>
                  </div>

                  <div className="row">
                    <button type="button" onClick={() => setStep(1)} className="btn ghost" style={{flex:1, justifyContent:'center'}}>Назад</button>
                    <button type="submit" className="btn rose" style={{flex:2, justifyContent:'center'}}>
                      Надіслати заявку <Paw size={14} color="currentColor"/>
                    </button>
                  </div>
                </div>
              )}
            </form>
          </div>
        </div>
      </section>
      <Footer/>
      <FloatingWidgets/>
    </>
  );
};

const Field = ({ label, value, onChange, placeholder, type='text' }) => (
  <div>
    <label style={{fontFamily:'Fredoka', fontWeight:600, fontSize:14, display:'block', marginBottom:8}}>{label}</label>
    <input type={type} value={value} onChange={e => onChange(e.target.value)} placeholder={placeholder}
      style={{width:'100%', padding:'14px 18px', background:'var(--cream)', border:'2.5px solid var(--outline)', borderRadius:16, fontFamily:'inherit', fontSize:15, outline:'none', transition:'border-color .2s'}}
      onFocus={e => e.target.style.borderColor = 'var(--rose-deep)'}
      onBlur={e => e.target.style.borderColor = 'var(--outline)'}/>
  </div>
);

ReactDOM.createRoot(document.getElementById('root')).render(<HirePage/>);
