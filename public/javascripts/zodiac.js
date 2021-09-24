const cookieWrapper = document.getElementById('fortuneCookie');
const cookie = document.getElementById('cookie');
const getNew = document.getElementById('new');
const flip = document.getElementById('flip');
const fortune = document.body.querySelector('.fortune');
const numbers = document.body.querySelector('.numbers');
const paper = document.body.querySelector('.paper-wrapper');
const speed = 500;

const cookieSound = document.getElementById('cookie-sound');

const showFortune = () => {
  cookieWrapper.classList.add('open');
  cookie.disabled = true;
};

cookie.addEventListener('click', showFortune, false);
cookie.addEventListener('click', function() {
  if(cookieSound.paused) {
    cookieSound.play();
  }
});

flip.addEventListener('click', e => {
  paper.classList.toggle('flip');
  flip.classList.toggle('front');
  flip.classList.toggle('back');
});
