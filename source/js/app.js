let button = document.querySelector('.navigation__toggle');
let navigation = document.querySelector('.navigation');
let siteList = document.querySelector('.header-list');

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



