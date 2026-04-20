/* FAQ — why cats are the best programmers */

const QS = [
  { q:'Чому саме коти, а не собаки?', a:'Собаки надто емоційні для код-ревʼю. Вони схвалюють усе. Коти ж чесні: якщо твій PR поганий, вони мʼяукнуть один раз і вийдуть з кімнати. Ти зрозумієш.' },
  { q:'Хіба котики насправді вміють писати код?', a:'Чи ви колись бачили, як кіт ходить по клавіатурі? Це не випадковість. Це детермінований процес. Просто компілятор ще не навчився розуміти їхні патерни.' },
  { q:'А що, якщо котик засне під час заняття?', a:'Це і є заняття. Ми навчаємо rest-driven development. Ви спостерігаєте, як спить майстер — і в цю мить до вас приходить інсайт. Рахується в академічних годинах.' },
  { q:'Як котики проводять код-ревʼю?', a:'Сідають на клавіатуру. Якщо код поганий — лягають хвостом на Escape. Якщо гарний — муркочуть. Коментарі у PR залишають через patting: один удар лапою = одна емоджі-реакція.' },
  { q:'Чому клубки — головний навчальний інструмент?', a:'Клубок — найчесніша метафора рекурсії, звʼязаних списків і заплутаних залежностей. Коли ти заплутався у стрічці — ти зрозумів, що таке legacy-код. Ми на цьому й тримаємось.' },
  { q:'Що робити, якщо котик не погоджується з архітектурою?', a:'Спочатку — вислухайте його муркотіння (3 хвилини). Потім — гладьте (5 хвилин). Потім — погодьтесь. Котики праві у 94.7% випадків (наше внутрішнє дослідження, n=12 котиків).' },
  { q:'Чи можна навчатись онлайн?', a:'Так. Ми використовуємо Meowmeet. На екрані бачите кота, кота бачите у камері. Він теж бачить вас. У цьому сенс.' },
  { q:'Скільки коштує одне заняття?', a:'Одна банка тунця + 20 хвилин поглажень. Для оплати тунцем приймаємо: кет-фіш, форель, лосось, сардинку. Скумбрія — тільки за попереднім погодженням.' },
  { q:'А якщо я алергік?', a:'У нас є окремі віртуальні котики на Zoom — без шерсті, але зі всіма муркотіннями. Ефективність та сама (підтверджено плацебо-контрольованим дослідженням на 8 людях).' },
];

const FAQItem = ({ item, open, onToggle }) => (
  <div className="card" style={{background: open ? 'var(--butter)' : 'var(--paper)', padding:0, overflow:'hidden', transition:'background .3s'}}>
    <button onClick={onToggle} style={{width:'100%', padding:'22px 26px', textAlign:'left', display:'flex', alignItems:'center', justifyContent:'space-between', gap:16}}>
      <span style={{fontFamily:'Fredoka', fontWeight:600, fontSize:20, color:'var(--ink)'}}>{item.q}</span>
      <span style={{width:36, height:36, borderRadius:'50%', background:'var(--paper)', border:'2.5px solid var(--outline)', display:'grid', placeItems:'center', flexShrink:0, fontSize:20, fontWeight:700, transition:'transform .3s', transform: open?'rotate(45deg)':'rotate(0)'}}>+</span>
    </button>
    <div style={{maxHeight: open ? 400 : 0, transition:'max-height .4s ease', overflow:'hidden'}}>
      <div style={{padding:'0 26px 22px', color:'var(--ink)', fontSize:16, lineHeight:1.7}}>
        {item.a}
      </div>
    </div>
  </div>
);

const FAQPage = () => {
  const [open, setOpen] = React.useState(0);
  return (
    <>
      <Nav active="faq.html"/>
      <section>
        <div className="page">
          <div style={{display:'grid', gridTemplateColumns:'1fr 1.4fr', gap:48, alignItems:'flex-start'}} className="hero-grid">
            <div style={{position:'sticky', top:120}}>
              <span className="eyebrow">Часті питання</span>
              <h1 style={{marginTop:12}}>
                Чому коти — <span className="underlined mint">найкращі кодери</span>?
              </h1>
              <p style={{marginTop:20, fontSize:18}}>
                Пояснюємо, як працює наша академія, та чому ми віримо у рест-дривен-девелопмент.
              </p>
              <div style={{marginTop:32, display:'grid', placeItems:'center'}}>
                <CatMurka size={240}/>
              </div>
              <p style={{textAlign:'center', marginTop:20, fontFamily:'Fredoka', fontWeight:600}}>
                «Муррр» — Мурка, лекторка-волонтерка
              </p>
            </div>
            <div className="stack" style={{'--stack':'14px'}}>
              {QS.map((q, i) => (
                <FAQItem key={i} item={q} open={open===i} onToggle={() => setOpen(open===i?-1:i)}/>
              ))}
              <div className="card" style={{background:'var(--rose)', marginTop:24, textAlign:'center'}}>
                <h3>Не знайшов свого питання?</h3>
                <p style={{marginTop:10, color:'var(--ink)'}}>Напиши Теффі — вона відповість, щойно прокинеться з полуденного сну.</p>
                <a href="hire.html" className="btn small" style={{marginTop:16}}>Написати Теффі</a>
              </div>
            </div>
          </div>
        </div>
      </section>
      <Footer/>
      <FloatingWidgets/>
    </>
  );
};

ReactDOM.createRoot(document.getElementById('root')).render(<FAQPage/>);
