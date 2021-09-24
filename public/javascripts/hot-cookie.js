const cookieWrapper = document.getElementById('fortuneCookie');
const cookie = document.getElementById('cookie');
const getNew = document.getElementById('new');
const flip = document.getElementById('flip');
const fortune = document.body.querySelector('.fortune');
const numbers = document.body.querySelector('.numbers');
const paper = document.body.querySelector('.paper-wrapper');
const speed = 500;

const cookieSound = document.getElementById('cookie-sound');
const swipeSound = document.getElementById('swipe-sound');

const fetchFortune = () => {
    fetch('./ovenapi/read-one-random/2')
        .then(response => response.json())
        .then((data) => {
            fortune.innerHTML = data.contents;
            const number = Math.ceil(Math.random() * 44) + 1;
            numbers.innerHTML = `Lucky numbers : ${number}`;
        })
}

const showFortune = () => {
  cookieWrapper.classList.add('open');
  cookie.disabled = true;
};

fetchFortune();

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

getNew.addEventListener('click', e => {
  cookieWrapper.classList.add('clear');
  swipeSound.play();
  window.setTimeout(() => {
    paper.classList.remove('flip');
    flip.className = 'small front';
    cookieWrapper.classList.remove('clear');
    cookieWrapper.classList.remove('open');
    cookieWrapper.classList.add('drop');
    window.setTimeout(() => {
      cookieWrapper.classList.remove('drop');
      fortune.innerHTML = '';
      numbers.innerHTML = '';
      fetchFortune();
    }, speed);
  }, speed);
  cookie.disabled = false;
}, false);
