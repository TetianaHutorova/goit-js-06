
const refs = {
  input: document.querySelector("#name-input"),
  output: document.querySelector("#name-output"),
};

refs.input.addEventListener("input", handlerInputName);

function handlerInputName(evt) {
  if (evt.currentTarget.value.trim() === "") {
    refs.output.textContent = "Anonymous";
  } else {
    refs.output.textContent = evt.currentTarget.value.trim();
  }
}
