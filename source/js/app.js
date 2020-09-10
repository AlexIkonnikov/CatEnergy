let button = document.querySelector('.navigation__toggle');
let navigation = document.querySelector('.navigation');
let before = document.querySelector('.example__img');
let after = document.querySelector('.example__img--after');
let range = document.querySelector('.example__form');


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

range.addEventListener('change', function() {
  after.style.opacity = (range.value)/100;
  before.style.opacity = 1 - (range.value)/100;
});


range.addEventListener('input', function() {
  before.style.opacity = 1 - (range.value)/100;
  after.style.opacity = (range.value)/100;
});


