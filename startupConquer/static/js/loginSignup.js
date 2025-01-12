const username = document.getElementById("signUpUsername").value;
const emailId = document.getElementById("signUpEmail").value;
const password = document.getElementById("signUpPassword").value;

document
  .getElementById("signUpForm")
  .addEventListener("submit", function (event) {
    event.preventDefault();

    if (localStorage.getItem(emailId)) {
      alert("Email already exists");
    } else {
      localStorage.setItem(
        emailId,
        JSON.stringify({
          username: username,
          emailId: emailId,
          password: password,
        })
      );
      alert("Sign up successful");
      window.location.href = "/";
    }
  });

document
  .getElementById("loginInForm")
  .addEventListener("submit", function (event) {
    event.preventDefault();

    const loginemailId = document.getElementById("loginEmail").value;
    const loginpassword = document.getElementById("loginPassword").value;
    console.log("Login Form Submitted");

    const userData = JSON.parse(localStorage.getItem(loginemailId));
    console.log(loginemailId);

    console.log(userData);

    if (userData && userData.password === loginpassword) {
      alert("Login Successful");
      window.location.href = "/";
    } else {
      alert("Invalid Email or Password");
      console.log("Login failed.");
    }
  });
