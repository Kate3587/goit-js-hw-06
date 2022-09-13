function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215)
    .toString(16)
    .padStart(6, 0)}`;
}

const refs = {
  input: document.querySelector("[type = 'number']"),
  btnCreate: document.querySelector("[data-create]"),
  btnDestroy: document.querySelector("[data-destroy]"),
  div: document.querySelector("#controls"),
  divBox: document.querySelector("#boxes"),
};

refs.btnCreate.addEventListener('click', onBtnCreateClick);

function onBtnCreateClick(event) {
  let size = 30;

  const countInput = refs.input.value;
  
  for (let i = 0; i < countInput; i += 1) {
   const box = document.createElement("div");
   box.style.width = size + "px";
   box.style.height = size + "px";
   box.style.backgroundColor = getRandomHexColor();
    refs.div.append(box);
    size += 10;
  };
};

refs.btnDestroy.addEventListener('click', onBtnDestroyClick);

function onBtnDestroyClick(event) {
  const countInput = refs.input.value;

  if (!countInput) {
    refs.divBox.innerHTML = ' ';
    return;
  };
  
}