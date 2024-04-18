function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215)
    .toString(16)
    .padStart(6, 0)}`;
}

const refs = {
  input: document.querySelector("input"),
  createBtn: document.querySelector("[data-create]"),
  destroyBtn: document.querySelector("[data-destroy]"),
  boxes: document.querySelector("#boxes"),
};

refs.createBtn.addEventListener("click", handlerCreate);
refs.destroyBtn.addEventListener("click", destroyBoxes);

function handlerCreate() {
  const value = refs.input.value;
  return createBoxes(value);
}

function createBoxes(amount) {
  let size = 30;
  let markup = "";
  for (let i = 1; i <= amount; i += 1) {
    markup += `<div style="height:${size}px;width:${size}px; background-Color:${getRandomHexColor()}"></div>`;
    size += 10;
  }
  refs.boxes.insertAdjacentHTML("beforeend", markup);
}

function destroyBoxes() {
  refs.boxes.innerHTML = "";
  refs.input.value = null;
}
