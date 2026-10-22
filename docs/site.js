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
  const els=['c1','c2','c3','c4'].map(i=>document.getElementById(i)); if(!els[0])return;
  const rings=['r1','r2','r3','r4'].map(i=>document.getElementById(i));
  const subs=els.map(e=>{const d=document.createElement('div');d.className='next';e.after(d);return d});
  const Y=365.25*86400, rates=[50000/Y,12e6/Y,1.5e12/Y,1/68];
  const labels=['next femicide in','next child marriage in','since midnight, local time','next assault in'];
  const f=n=>Math.floor(n).toLocaleString('en-US');
  const mmss=s=>{s=Math.max(0,Math.ceil(s));const m=Math.floor(s/60);return (m?m+' min ':'')+String(s%60).padStart(2,'0')+' s'};
  const opened=Date.now();
  function tick(){const now=new Date();const since=(now-new Date(now.getFullYear(),now.getMonth(),now.getDate()))/1000;
    els.forEach((e,i)=>{const v=since*rates[i];e.textContent=(i===2?'$':'')+f(v);
      const frac=v%1; if(rings[i])rings[i].style.strokeDashoffset=125.6*(1-frac);
      subs[i].textContent=i===2?labels[i]+' · '+f((Date.now()-opened)/1000*rates[i])+' since you opened this page':labels[i]+' '+mmss((1-frac)/rates[i])+' · today so far, local time';});
    requestAnimationFrame(tick)}
  tick();
})();
