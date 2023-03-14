const btnEl = document.querySelector('.btn');

btnEl.addEventListener('mouseover', (e)=>{
  const x = (e.pageX - btnEl.offsetLeft);
  const y = (e.pagetY - btnEl.offsetTop);
  

  btnEl.style.setProperty('--xPos', x + 'px');
  btnEl.style.setProperty('--yPos', y + 'px');
})