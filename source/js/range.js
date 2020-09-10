let before = document.querySelector('.example__img');
let after = document.querySelector('.example__img--after');
let range = document.querySelector('.example__form');

range.addEventListener('oninput', function(){
  after.style.opacity = range.value;
});
