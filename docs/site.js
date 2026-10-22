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
