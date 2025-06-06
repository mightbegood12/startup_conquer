const togglePassword = document.querySelector("#togglePassword");
const password = document.querySelector("#password");
const toggleEye = document.querySelector("#toggle-eye");

togglePassword.addEventListener("click", function () {
  const type =
    password.getAttribute("type") === "password" ? "text" : "password";
  password.setAttribute("type", type);
  toggleEye.classList.toggle("shown");
});

// prevent form submit
const form = document.querySelector("form");
form.addEventListener("submit", function (e) {
  e.preventDefault();
});
