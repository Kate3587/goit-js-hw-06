function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215).toString(16)}`;
}


const styleBodyEl = document.querySelector('body');
const textEl = document.querySelector('.color');
const btnEl = document.querySelector('.change-color');

btnEl.addEventListener('click', (event) => {
  const colorEl = getRandomHexColor();
  styleBodyEl.style.backgroundColor = colorEl;
  textEl.textContent = colorEl;
})