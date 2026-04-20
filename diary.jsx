/* Diary — kitty thoughts */

const ENTRIES = [
  { author:'Теффі', color:'var(--lavender)', date:'сьогодні, 04:17', mood:'😼', title:'Сьогодні я пушнула прод',
    body:'Лапа впала на Enter під час push -f. CI зібрався, тести пройшли, релізнули. Ніхто не помітив. Я сиділа на клавіатурі ще годину — про всяк випадок. Кажуть, так працює більшість інженерів.',
    tags:['прод','лапа','git'] },
  { author:'Мурка', color:'var(--rose)', date:'сьогодні, 02:04', mood:'💕', title:'PR #427: додала муркотіння в error message',
    body:'Reviewer написав LGTM. Я написала MRRR. Ми зійшлись на mrrr LGTM. Мерджимо. В проді тепер кожен 500-й відповідає з «*ображено хруснула хвостом*». Метрика «coziness» виросла на 340%.',
    tags:['PR','pair programming','muрр'] },
  { author:'Барсик', color:'var(--beige)', date:'вчора, 23:41', mood:'🧠', title:'borrow checker знову правий',
    body:'Я сердився годину. Ходив колами. Потім зрозумів: він не зло. Він просто дуже обережний. Я теж так роблю перед стрибком з холодильника. Позичай і повертай. Це філософія, не обмеження.',
    tags:['rust','lifetime','дзен'] },
  { author:'Сметанка', color:'var(--cream-deep)', date:'вчора, 16:22', mood:'😾', title:'any — це не тип. any — це зрада',
    body:'Знайшла 12 any у проєкті нашого коленки з JS-команди. Провела виховну розмову (сиділа у нього на клавіатурі 40 хвилин). Тепер все unknown. Совість чиста, тунець смачний.',
    tags:['typescript','strict','виховання'] },
  { author:'Пушок', color:'var(--mint)', date:'2 дні тому', mood:'⚡', title:'Горутини — це найближче до того, як я сплю',
    body:'Я можу спати в 5 місцях одночасно: на принтері, у шухляді, на сервері, на клавіатурі і на кроватці. Це go routine. Просто ми, коти, винайшли це раніше за Google.',
    tags:['go','concurrency','philosophy'] },
  { author:'Теффі', color:'var(--lavender)', date:'3 дні тому', mood:'😌', title:'Рефакторинг у лотку',
    body:'Найкращі ідеї приходять, коли мене ніхто не бачить. Сьогодні переробила модуль автентифікації. У голові. У лотку. Завтра напишу — спочатку треба, щоб пилку засипало ідею.',
    tags:['refactor','мозок','приватність'] },
  { author:'Мурка', color:'var(--rose)', date:'4 дні тому', mood:'😂', title:'Standup був. Я була. Але спала.',
    body:'Команда каже, це я ще крутилась і нявкала в потрібних місцях. «Так», «ні», «в прогресі», «заблокована». Мʼяу. Продуктивність 100%. Engagement — mrrr/10.',
    tags:['standup','async','мастерство'] },
  { author:'Васька', color:'var(--beige)', date:'тиждень тому', mood:'👴', title:'В мій час не було гарбеджколектора',
    body:'Памʼять ми керували лапою. malloc, free, лапою по мисі. Сучасні коти не знають, що таке segfault на Перше вересня 1998-го. Але я не жаліюсь. Просто памʼятаю.',
    tags:['c++','легенди','ретро'] },
  { author:'Лапка', color:'var(--mint)', date:'тиждень тому', mood:'🎯', title:'Знову побачила SELECT *',
    body:'Стажерка написала SELECT * FROM users. 3 мільйони рядків. Я залізла на монітор і не злізала, поки не виправила. Потім муркотіла півгодини. Її тепер кличуть Оленка-з-WHERE.',
    tags:['sql','ментор','дисципліна'] },
];

const ALL_TAGS = [...new Set(ENTRIES.flatMap(e => e.tags))];

const DiaryPage = () => {
  const [tag, setTag] = React.useState(null);
  const [hearts, setHearts] = React.useState({});
  const filtered = tag ? ENTRIES.filter(e => e.tags.includes(tag)) : ENTRIES;

  const heart = (i) => setHearts(h => ({...h, [i]: !h[i]}));

  return (
    <>
      <Nav active="diary.html"/>
      <section>
        <div className="page">
          <div style={{textAlign:'center', marginBottom:40}}>
            <span className="eyebrow">Щоденник академії</span>
            <h1 style={{marginTop:12}}>Що <span className="underlined">мурчать</span> наші котики</h1>
            <p style={{maxWidth:580, margin:'20px auto 0', fontSize:18}}>
              Щоденні нотатки, думки з підвіконня, післяобідні інсайти. Усе від першої лапи.
            </p>
          </div>

          <div className="row" style={{justifyContent:'center', marginBottom:32, gap:8}}>
            <button onClick={() => setTag(null)} className="chip"
              style={{background: !tag?'var(--ink)':'var(--paper)', color: !tag?'var(--paper)':'var(--ink)', cursor:'pointer'}}>усі</button>
            {ALL_TAGS.map(t => (
              <button key={t} onClick={() => setTag(t)} className="chip"
                style={{background: tag===t?'var(--ink)':'var(--paper)', color: tag===t?'var(--paper)':'var(--ink)', cursor:'pointer'}}>#{t}</button>
            ))}
          </div>

          <div style={{display:'grid', gridTemplateColumns:'repeat(auto-fill, minmax(320px, 1fr))', gap:24}}>
            {filtered.map((e, i) => (
              <article key={i} className="card pop" style={{background: e.color, position:'relative', transform:`rotate(${(i%3-1)*0.4}deg)`}}>
                <div className="row" style={{justifyContent:'space-between', alignItems:'center'}}>
                  <div className="row" style={{gap:10}}>
                    <span style={{width:36,height:36,borderRadius:'50%',background:'var(--paper)',border:'2.5px solid var(--outline)',display:'grid',placeItems:'center',fontSize:18}}>{e.mood}</span>
                    <div>
                      <div style={{fontFamily:'Fredoka',fontWeight:700}}>@{e.author.toLowerCase()}</div>
                      <div style={{fontSize:12, color:'var(--ink-soft)'}}>{e.date}</div>
                    </div>
                  </div>
                </div>
                <h3 style={{marginTop:16}}>{e.title}</h3>
                <p style={{marginTop:10, color:'var(--ink)'}}>{e.body}</p>
                <div className="row" style={{marginTop:16, justifyContent:'space-between'}}>
                  <div className="row" style={{gap:6}}>
                    {e.tags.map(t => <span key={t} style={{fontSize:12,fontWeight:700,color:'var(--ink-soft)'}}>#{t}</span>)}
                  </div>
                  <button onClick={() => heart(i)} style={{fontSize:20, transition:'transform .2s', transform: hearts[i]?'scale(1.3)':'scale(1)'}}>
                    {hearts[i] ? '♥' : '♡'}
                  </button>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>
      <Footer/>
      <FloatingWidgets/>
    </>
  );
};

ReactDOM.createRoot(document.getElementById('root')).render(<DiaryPage/>);
