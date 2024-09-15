// Seletores dos elementos
const btn = document.querySelector('.btn');
const img = document.querySelector('#img');
const verde = document.querySelector('.verde');
const prateado = document.querySelector('.prateado');
const dourado = document.querySelector('.dourado');
const grafite = document.querySelector('.grafite');
const azul = document.querySelector('.azul');
const close = document.querySelector('#close');
const open = document.querySelector('#open');
const nav = document.querySelector('#nav');

// Estado atual da cor
let color = 'verde';

// transição na imagem
function transition(colorChange) {
  if (color === colorChange) {
    return;
  }

  img.classList.add('transition');
  setTimeout(() => {
    img.classList.remove('transition');
  }, 180);

  color = colorChange;
}

// trocar de imagem
verde.addEventListener('click', () => {
  img.src = 'imgs/iphone_green.jpg';
  img.addEventListener('load', () => transition('verde'))

});

prateado.addEventListener('click', () => {
  img.src = 'imgs/iphone_silver.jpg';
  img.addEventListener('load', () => transition('verde'))
});

dourado.addEventListener('click', () => {
  img.src = 'imgs/iphone_golden.jpg';
  img.addEventListener('load', () => transition('verde'))
});

grafite.addEventListener('click', () => {
  img.src = 'imgs/iphone_grafite.jpg';
  img.addEventListener('load', () => transition('verde'))
});

azul.addEventListener('click', () => {
  img.src = 'imgs/iphone_blue.jpg';
  img.addEventListener('load', () => transition('verde'))
});

// abrir e fechar o menu
open.addEventListener('click', () => {
  nav.style.top = '0';
  nav.style.opacity = '1';
  close.style.display = 'block';
  open.style.display = 'none';
});

close.addEventListener('click', () => {
  nav.style.top = '-100vh';
  nav.style.opacity = '0';
  close.style.display = 'none';
  open.style.display = 'block';
});
