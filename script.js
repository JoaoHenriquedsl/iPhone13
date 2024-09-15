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
  transition('verde');
});

prateado.addEventListener('click', () => {
  img.src = 'imgs/iphone_silver.jpg';
  transition('prateado');
});

dourado.addEventListener('click', () => {
  img.src = 'imgs/iphone_golden.jpg';
  transition('dourado');
});

grafite.addEventListener('click', () => {
  img.src = 'imgs/iphone_grafite.jpg';
  transition('grafite');
});

azul.addEventListener('click', () => {
  img.src = 'imgs/iphone_blue.jpg';
  transition('azul');
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
