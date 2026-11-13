// Shared behaviour: theme toggle and logo swap. Loaded by every page.
(function(){
  const root=document.documentElement, mq=matchMedia('(prefers-color-scheme: dark)');
  function isDark(){return root.dataset.theme!=='light'}
  function apply(){root.classList.toggle('dark',isDark())}
  try{const t=localStorage.getItem('gbv-theme'); if(t) root.dataset.theme=t;}catch(e){}
  apply(); mq.addEventListener('change',apply);
  const btn=document.getElementById('themeBtn');
  if(btn) btn.addEventListener('click',()=>{root.dataset.theme=isDark()?'light':'dark';try{localStorage.setItem('gbv-theme',root.dataset.theme)}catch(e){}apply();});
})();

// Clocks: count from local midnight so each card shows today's toll at once, plus a countdown to the next event.
(function(){
  const ids=['c1','c2','c3','c4'].filter(i=>document.getElementById(i)); if(!ids.length)return;
  const idx=ids.map(i=>+i.slice(1)-1);
  const els=ids.map(i=>document.getElementById(i));
  const rings=ids.map(i=>document.getElementById('r'+i.slice(1)));
  const subs=els.map(e=>{const d=document.createElement('div');d.className='next';e.after(d);return d});
  const Y=365.25*86400, rates=[50000/Y,12e6/Y,1.5e12/Y,1/68];
  const labels=['next femicide in','next child marriage in','since midnight, local time','next assault in'];
  const f=n=>Math.floor(n).toLocaleString('en-US');
  const mmss=s=>{s=Math.max(0,Math.ceil(s));const m=Math.floor(s/60);return (m?m+' min ':'')+String(s%60).padStart(2,'0')+' s'};
  const opened=Date.now();
  function tick(){const now=new Date();const since=(now-new Date(now.getFullYear(),now.getMonth(),now.getDate()))/1000;
    els.forEach((e,k)=>{const i=idx[k];const v=since*rates[i];e.textContent=(i===2?'$':'')+f(v);
      const frac=v%1; if(rings[k])rings[k].style.strokeDashoffset=125.6*(1-frac);
      subs[k].textContent=i===2?labels[i]+' · '+f((Date.now()-opened)/1000*rates[i])+' since you opened this page':labels[i]+' '+mmss((1-frac)/rates[i])+' · today so far, local time';});
    requestAnimationFrame(tick)}
  tick();
})();

// Presenter mode for the Summit: press P (or open with ?present) to step section by section with the arrow keys, large type, no header or footer. Esc exits.
(function(){
  const secs=[...document.querySelectorAll('section')]; if(secs.length<2)return;
  const body=document.body; let on=false, i=0;
  const hud=document.createElement('div'); hud.id='presentHud'; hud.setAttribute('aria-live','polite');
  const btn=document.createElement('button'); btn.id='presentBtn'; btn.type='button'; btn.textContent='Present'; btn.title='Presenter mode (P). Arrow keys step through the sections, Esc exits.';
  document.body.append(hud,btn);
  function nearest(){const y=scrollY+innerHeight/3;let k=0;secs.forEach((s,j)=>{if(s.offsetTop<=y)k=j});return k}
  function go(k){i=Math.max(0,Math.min(secs.length-1,k));secs[i].scrollIntoView({behavior:'smooth',block:'start'});hud.textContent=(i+1)+' / '+secs.length+' · Esc to exit';}
  function set(v){on=v;body.classList.toggle('present',on);btn.textContent=on?'Exit':'Present';if(on){go(nearest())}else{hud.textContent=''}
    try{const u=new URL(location);if(on)u.searchParams.set('present','1');else u.searchParams.delete('present');history.replaceState(null,'',u)}catch(e){}}
  btn.addEventListener('click',()=>set(!on));
  addEventListener('keydown',e=>{const t=e.target; if(t&&/^(INPUT|TEXTAREA|SELECT)$/.test(t.tagName))return;
    if((e.key==='p'||e.key==='P')&&!e.metaKey&&!e.ctrlKey){set(!on);return}
    if(!on)return;
    if(e.key==='Escape'){set(false)}
    else if(['ArrowRight','ArrowDown','PageDown',' '].includes(e.key)){e.preventDefault();go(i+1)}
    else if(['ArrowLeft','ArrowUp','PageUp'].includes(e.key)){e.preventDefault();go(i-1)}
    else if(e.key==='Home'){e.preventDefault();go(0)}
    else if(e.key==='End'){e.preventDefault();go(secs.length-1)}});
  if(new URLSearchParams(location.search).has('present'))set(true);
})();
