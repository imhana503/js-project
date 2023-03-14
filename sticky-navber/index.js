const navbarEl = document.querySelector('.navbar');
const bottomContainerEl = document.querySelector('.bottom-container');
console.log(bottomContainerEl.offsetTop);
console.log(navbarEl.offsetHeight)
window.addEventListener('scroll', ()=>{
  console.log('scroll');
})