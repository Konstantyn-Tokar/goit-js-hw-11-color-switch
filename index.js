import colors from './colors.js';

const randomIntegerFromInterval = (min, max) => {
  return Math.floor(Math.random() * (max - min + 1) + min);
};

const refs = {
  btnStart: document.querySelector('[data-action="start"]'),
  btnStop: document.querySelector('[data-action="stop"]'),
  body: document.querySelector('body'),
};

refs.btnStart.addEventListener('click', startChangeColorBody);
refs.btnStop.addEventListener('click', stopChangeColorBody);

let isActive = false;
let colorId = null;

function startChangeColorBody() {
  console.log('начали');
  if (isActive) {
    return;
  }
  isActive = true;
  colorId = setInterval(() => {
    let ColorNumber = randomIntegerFromInterval(0, colors.length - 1);
    refs.body.style.backgroundColor = colors[ColorNumber];
  }, 1000);
}

function stopChangeColorBody() {
  console.log('закончили');
  clearInterval(colorId);
  isActive = false;
}
