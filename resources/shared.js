var backdrop = document.querySelector('.backdrop');
var selectThemeButtons = document.querySelectorAll('.theme button');
var modal = document.querySelector('.modal');
var noButton = document.querySelector('.modal_action button');
var toggleButton = document.querySelector('.toggle-button');
var mobileOptions = document.querySelector('.mobile-options');
var main = document.querySelector('main');
var ctaButton = document.querySelector(".header-list-cta a");
// backdrop.style.display = 'block'

for (var i = 0; i < selectThemeButtons.length; i++) {
  selectThemeButtons[i].addEventListener('click', function() {
    // modal.style.display = 'block';
    // backdrop.style.display = 'block';
    modal.classList.add('open');
    backdrop.classList.add('open');
  });
}
modal.addEventListener('click', clickModal);
backdrop.addEventListener('click', clickModal);

function clickModal() {
  // modal.style.display = 'none';
  // backdrop.style.display = 'none'; 
  modal.classList.remove('open');
  backdrop.classList.remove('open');
}

toggleButton.addEventListener('click', function() {
  // mobileOptions.style.display = 'block';
  mobileOptions.classList.add('open');
});
main.addEventListener('click', clickModal1);

function clickModal1() {
  mobileOptions.classList.remove('open');
}


ctaButton.addEventListener('animationstart', function(event) {
  console.log('Animation started.', event);
});

ctaButton.addEventListener('animationend', function(event) {
  console.log('Animation ended.', event);
});

ctaButton.addEventListener('animationiteration', function(event) {
  console.log('Animation iterated.', event);
});