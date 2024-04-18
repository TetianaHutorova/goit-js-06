
const refs = {
   span: document.querySelector(".color"),
  button: document.querySelector(".change-color"),
};
 
refs.button.addEventListener("click", handlerChangeColor);

function handlerChangeColor() {
  const newColor = getRandomHexColor();
  refs.span.textContent = document.body.style.backgroundColor=newColor;
}

function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215)
    .toString(16)
    .padStart(6, 0)}`;
}
