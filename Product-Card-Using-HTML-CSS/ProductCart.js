const sizes = document.querySelectorAll('.size');
const colors = document.querySelectorAll('.color');
const shoes = document.querySelectorAll('.shoe');
const gradients = document.querySelectorAll('.gradient');
const shoeBg = document.querySelector('.shoeBackground');
// preGradient
let prevColor = 'blue';
let animationEnd = true;
// size button change
function changeSize() {
  sizes.forEach((size) => size.classList.remove('active'));
  this.classList.add('active');
}
// color button change
function changeColor() {
  if (!animationEnd) return;
  let primary = this.getAttribute('primary');
  let color = this.getAttribute('color');
  let shoe = document.querySelector(`.shoe[color="${color}"]`);
  let gradient = document.querySelector(`.gradient[color = "${color}"]`);

  let prevGradient = document.querySelector(`.gradient[color="${prevColor}"]`);
  //   change color every time you click
  colors.forEach((c) => c.classList.remove('active'));
  this.classList.add('active');

  document.documentElement.style.setProperty('--primary', primary);

  //   change shoe color and type every time you click into a color type
  shoes.forEach((s) => s.classList.remove('show'));
  shoe.classList.add('show');
  //gradient change color section
  gradients.forEach((g) => g.classList.remove('first', 'second'));
  gradient.classList.add('first');
  prevGradient.classList.add('second');

  prevColor = color;
  animationEnd = false;
  gradient.addEventListener('animationend', () => {
    animationEnd = true;
  });
}
sizes.forEach((size) => size.addEventListener('click', changeSize));
colors.forEach((c) => c.addEventListener('click', changeColor));
let x = window.matchMedia('(max-width:1000px');
function changeHeight() {
  if (x.matches) {
    let shoeHeight = shoe[0].offsetHeight;
    shoeBg.style.height = `${shoeHeight * 0.9}px`;
  } else {
    shoeBg.style.height = '475px';
  }
}
changeHeight();
window.addEventListener('resize', changeHeight);
