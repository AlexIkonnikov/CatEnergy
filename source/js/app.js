let button = document.querySelector('.navigation__toggle');
let navigation = document.querySelector('.navigation');
let before = document.querySelector('.example__img');
let after = document.querySelector('.example__img--after');
let range = document.querySelector('.exaple__form');

button.addEventListener('click' , function() {
  if (navigation.classList.contains('navigation--open')) {
    navigation.classList.remove('navigation--open');
    navigation.classList.add('navigation--close');
  }
  else {
    navigation.classList.remove('navigation--close');
    navigation.classList.add('navigation--open');
  }
});

range.addEventListener('oninput',function() {
  before.style.opacity = (range.value)/100;
});


