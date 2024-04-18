 
const refs = {
  form: document.querySelector(".login-form"),
};

refs.form.addEventListener("submit", handlerFormLogin);

function handlerFormLogin(evt) {
  evt.preventDefault();
  const { email, password } = evt.currentTarget.elements;

  if (password.value === "") {
    return alert("You must enter a password ");
  }
  if (email.value === "") {
    return alert("You must enter a email ");
  } else {
    const date = {
      email: email.value,
      password: password.value,
    };
    console.log(date);
  }
  evt.currentTarget.reset()
}

 