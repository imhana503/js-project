const textareaEl = document.querySelector('.textarea');
const totalCounterEl = document.querySelector('.total-counter');
const remainingCounterEl = document.querySelector('.remaining-counter');

textareaEl.addEventListener('keyup',()=>{
  undateCounter();
});

undateCounter();

function undateCounter(){
  totalCounterEl.innerText = textareaEl.value.length;
  remainingCounterEl.innerText = textareaEl.getAttribute('maxLength');
}