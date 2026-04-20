/* Gallery — specialist cats with languages */

const CATS = [
  { name:'Теффі', lang:'Python', emoji:'🐍', color:'oklch(0.82 0.06 300)', accent:'oklch(0.7 0.09 298)', bg:'var(--lavender)',
    bio:'Головна тех-лідка академії. Обожнює зміїв (як і свою мову). Пише чистий код, який читається як хайку.',
    traits:['рекурсія під снодійне','list comprehension замість муркотіння','pickle-файли їсть як справжні'],
    years:7, projects:142, since:'2019'},
  { name:'Мурка', lang:'JavaScript', emoji:'⚡', color:'oklch(0.85 0.055 20)', accent:'oklch(0.75 0.08 18)', bg:'var(--rose)',
    bio:'Королева async/await. Може пообіцяти (Promise), а потім тихо resolve-нути о 4 ранку — і ніхто не помітить.',
    traits:['callback-hell тільки в добрий день','event loop — це її хвіст','JSON читає за нюхом'],
    years:5, projects:218, since:'2020' },
  { name:'Барсик', lang:'Rust', emoji:'🦀', color:'oklch(0.88 0.04 75)', accent:'oklch(0.78 0.055 70)', bg:'var(--beige)',
    bio:'Borrow-checker-шептун. Ніколи не дає памʼяті, яку не позичив назад. Смутний, коли бачить unwrap().',
    traits:['lifetime-и відчуває вусами','panic! ніколи','ownership — це його стиль життя'],
    years:4, projects:67, since:'2021' },
  { name:'Сметанка', lang:'TypeScript', emoji:'🧀', color:'oklch(0.97 0.015 80)', accent:'oklch(0.85 0.04 75)', bg:'var(--cream-deep)',
    bio:'Біла як сметана, строга як strict mode. Замість «мур» каже «як типізацію». Усі any() заміняє на unknown.',
    traits:['інферує типи з повітря','generic-и як клубок','interface над type — завжди'],
    years:3, projects:98, since:'2022' },
  { name:'Пушок', lang:'Go', emoji:'🐹', color:'oklch(0.88 0.055 170)', accent:'oklch(0.72 0.08 165)', bg:'var(--mint)',
    bio:'Швидкий, простий, пухнастий. Любить горутини більше, ніж іграшки. Channel-и — його основний спосіб комунікації.',
    traits:['goroutine — це коли сплю в 5 місцях','defer завжди й одразу','err != nil — філософія життя'],
    years:3, projects:54, since:'2022' },
  { name:'Васька', lang:'C++', emoji:'⚙️', color:'oklch(0.75 0.04 60)', accent:'oklch(0.55 0.05 60)', bg:'var(--beige)',
    bio:'Старший кіт академії. Памʼятає часи, коли смайлики малювали з символів. Керує памʼяттю лапою, без збирача сміття.',
    traits:['template-и у сні','pointer-и — його улюблені іграшки','segfault як спосіб медитації'],
    years:12, projects:301, since:'2014' },
  { name:'Сніжинка', lang:'Swift', emoji:'🐦', color:'oklch(0.95 0.02 240)', accent:'oklch(0.75 0.08 240)', bg:'var(--lavender)',
    bio:'Айфонозалежна. Носить білий шерстяний свитерок. Optional? Зрозуміла інтуїтивно ще до книжки Apple.',
    traits:['guard let замість ковдри','SwiftUI — це муркотіння','Xcode індексує у її сні'],
    years:4, projects:73, since:'2021' },
  { name:'Лапка', lang:'SQL', emoji:'🗄️', color:'oklch(0.85 0.05 200)', accent:'oklch(0.68 0.08 200)', bg:'var(--mint)',
    bio:'DBA з поглядом, який пронизує таблиці. Ніколи не робить SELECT *. Нормалізує все — включно з іграшками.',
    traits:['JOIN-и як родинне дерево','індекси завжди','window-функції — улюблене місце сну'],
    years:8, projects:189, since:'2018' },
  { name:'Муркоша', lang:'Haskell', emoji:'λ', color:'oklch(0.82 0.07 260)', accent:'oklch(0.65 0.09 260)', bg:'var(--lavender)',
    bio:'Чистий функціональний кіт. Без побічних ефектів (тільки муркотіння, але це pure). Монаду бачила зблизька.',
    traits:['лінивість — це feature','currying вусами','IO тільки коли зовсім треба'],
    years:5, projects:41, since:'2020' },
];

const CatCard = ({ cat, onClick }) => (
  <button onClick={onClick} className="card pop" style={{background: cat.bg, textAlign:'left', width:'100%', borderColor:'var(--outline)'}}>
    <div className="row" style={{justifyContent:'space-between', alignItems:'flex-start'}}>
      <span className="chip" style={{background:'var(--paper)'}}>{cat.emoji} {cat.lang}</span>
      <span style={{fontFamily:'Fredoka', fontSize:13, color:'var(--ink-soft)', fontWeight:600}}>з {cat.since}</span>
    </div>
    <div style={{display:'grid', placeItems:'center', margin:'12px 0'}}>
      <CatChibi color={cat.color} accent={cat.accent} size={160}/>
    </div>
    <h3 style={{textAlign:'center'}}>{cat.name}</h3>
    <p style={{textAlign:'center', marginTop:8, fontSize:14, color:'var(--ink)'}}>{cat.bio.split('.')[0]}.</p>
    <div className="row" style={{marginTop:14, justifyContent:'space-around', borderTop:'2px dashed var(--outline)', paddingTop:12}}>
      <div style={{textAlign:'center'}}>
        <div style={{fontFamily:'Fredoka', fontSize:20, fontWeight:700}}>{cat.years}</div>
        <div style={{fontSize:11, textTransform:'uppercase', letterSpacing:'0.08em', color:'var(--ink-soft)'}}>років</div>
      </div>
      <div style={{textAlign:'center'}}>
        <div style={{fontFamily:'Fredoka', fontSize:20, fontWeight:700}}>{cat.projects}</div>
        <div style={{fontSize:11, textTransform:'uppercase', letterSpacing:'0.08em', color:'var(--ink-soft)'}}>проєктів</div>
      </div>
    </div>
  </button>
);

const CatModal = ({ cat, onClose }) => {
  if (!cat) return null;
  return (
    <div onClick={onClose} style={{position:'fixed',inset:0,background:'oklch(0.27 0.025 55 / 0.5)',zIndex:500,display:'grid',placeItems:'center',padding:24,backdropFilter:'blur(6px)'}}>
      <div onClick={e => e.stopPropagation()} className="card" style={{background:cat.bg, maxWidth:640, width:'100%', padding:40, position:'relative'}}>
        <button onClick={onClose} style={{position:'absolute',top:16,right:16,width:36,height:36,borderRadius:'50%',background:'var(--paper)',border:'2.5px solid var(--outline)',fontSize:18,fontWeight:700}}>×</button>
        <div style={{display:'grid', gridTemplateColumns:'auto 1fr', gap:24, alignItems:'center'}}>
          <CatChibi color={cat.color} accent={cat.accent} size={180}/>
          <div>
            <span className="chip" style={{background:'var(--paper)'}}>{cat.emoji} {cat.lang}</span>
            <h2 style={{marginTop:10}}>{cat.name}</h2>
            <p style={{marginTop:10, color:'var(--ink)'}}>{cat.bio}</p>
          </div>
        </div>
        <div style={{marginTop:24, padding:20, background:'var(--paper)', borderRadius:20, border:'2.5px solid var(--outline)'}}>
          <div className="eyebrow">Спеціалізація</div>
          <ul style={{marginTop:12, paddingLeft:20}}>
            {cat.traits.map((t,i) => <li key={i} style={{marginBottom:6, fontWeight:600}}>{t}</li>)}
          </ul>
        </div>
        <div className="row" style={{marginTop:20}}>
          <a href="hire.html" className="btn">Записатись до {cat.name}</a>
          <a href="diary.html" className="btn ghost">Читати щоденник</a>
        </div>
      </div>
    </div>
  );
};

const GalleryPage = () => {
  const [filter, setFilter] = React.useState('Усі');
  const [selected, setSelected] = React.useState(null);
  const langs = ['Усі', ...new Set(CATS.map(c => c.lang))];
  const visible = filter === 'Усі' ? CATS : CATS.filter(c => c.lang === filter);

  return (
    <>
      <Nav active="gallery.html"/>
      <section>
        <div className="page">
          <div style={{textAlign:'center', marginBottom:40}}>
            <span className="eyebrow">Наші викладачі</span>
            <h1 style={{marginTop:12}}>
              Познайомся з <span className="underlined lavender">нашими котиками</span>
            </h1>
            <p style={{maxWidth:600, margin:'20px auto 0', fontSize:18}}>
              Кожен котик — носій своєї мови. Обирай того, хто муркоче на твоєму улюбленому синтаксисі.
            </p>
          </div>
          <div className="row" style={{justifyContent:'center', marginBottom:36, gap:8}}>
            {langs.map(l => (
              <button key={l} onClick={() => setFilter(l)}
                className={'chip'}
                style={{background: filter===l?'var(--ink)':'var(--paper)', color: filter===l?'var(--paper)':'var(--ink)', cursor:'pointer'}}>
                {l}
              </button>
            ))}
          </div>
          <div className="grid grid-3">
            {visible.map(c => <CatCard key={c.name} cat={c} onClick={() => setSelected(c)}/>)}
          </div>
        </div>
      </section>
      <CatModal cat={selected} onClose={() => setSelected(null)}/>
      <Footer/>
      <FloatingWidgets/>
    </>
  );
};

ReactDOM.createRoot(document.getElementById('root')).render(<GalleryPage/>);
