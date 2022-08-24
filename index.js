const input = document.querySelector(".input");
const submit = document.querySelector(".form-btn");
const error = document.querySelector(".error");

submit.addEventListener("click", e => {
e.preventDefault;

/*======= Email Validation =========*/

if (input.value === "" || input.value === null || !input.value.match(
    /^(([^<>()[\]\\.,;:\s@\"]+(\.[^<>()[\]\\.,;:\s@\"]+)*)|(\".+\"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/
  )) {

error.innerHTML = "Please enter a valid email address";

} else {

input.value = "";
error.innerHTML = "";
}


})