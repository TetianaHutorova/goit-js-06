 
const refs = {
  decrement: document.querySelector("[data-action = 'decrement']"),
  increment: document.querySelector("[data-action = 'increment']"),
  value: document.querySelector("#value"),
};

let counterValue = 0;

refs.decrement.addEventListener("click", handlerDecrement);
refs.increment.addEventListener("click", handlerIncrement);

function handlerDecrement() {
  counterValue -= 1;
  refs.value.textContent = counterValue;
}

function handlerIncrement() {
  counterValue += 1;
  refs.value.textContent = counterValue;
}
