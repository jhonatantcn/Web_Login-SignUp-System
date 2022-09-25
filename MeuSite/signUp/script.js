// SignUp Screen

const myInput = document.getElementById("passwordField1");
const letter = document.getElementById("letter");
const capital = document.getElementById("capital");
const number = document.getElementById("number");
const length = document.getElementById("length");


// When the user clicks on the password field, show the message box
myInput.onfocus = function () {
  document.getElementById("message").style.display = "block";
}

// When the user clicks outside of the password field, hide the message box
myInput.onblur = function () {
  document.getElementById("message").style.display = "none";
}

// When the user starts to type something inside the password field
myInput.onkeyup = function () {
  // Validate lowercase letters
  var lowerCaseLetters = /[a-z]/g;
  if (myInput.value.match(lowerCaseLetters)) {
    letter.classList.remove("invalid");
    letter.classList.add("valid");
  } else {
    letter.classList.remove("valid");
    letter.classList.add("invalid");
  }

  // Validate capital letters
  var upperCaseLetters = /[A-Z]/g;
  if (myInput.value.match(upperCaseLetters)) {
    capital.classList.remove("invalid");
    capital.classList.add("valid");
  } else {
    capital.classList.remove("valid");
    capital.classList.add("invalid");
  }

  // Validate numbers
  var numbers = /[0-9]/g;
  if (myInput.value.match(numbers)) {
    number.classList.remove("invalid");
    number.classList.add("valid");
  } else {
    number.classList.remove("valid");
    number.classList.add("invalid");
  }

  // Validate length
  if (myInput.value.length >= 8) {
    length.classList.remove("invalid");
    length.classList.add("valid");
  } else {
    length.classList.remove("valid");
    length.classList.add("invalid");
  }
}

function setRegistration() {
  let registeredUsername = document.getElementById("usernameSignUp").value;
  let registeredPassword = document.getElementById("passwordField1").value;
  let confirmedPassword = document.getElementById("passwordField2").value;

  if (letter.classList == "valid"
    && capital.classList == "valid"
    && number.classList == "valid"
    && length.classList == "valid") {

    if (confirmedPassword != registeredPassword) {
      alert("A confirmação precisa ser igual a senha!");
      return;
    }

    if (registeredUsername == "") {
      alert("O usuário não pode estar vazio!");
      return;
    }

    sessionStorage.setItem('userName', registeredUsername);
    sessionStorage.setItem('password', registeredPassword);

    alert("Usuário e senha gravados com sucesso!");

    window.location.href = "../login/login.html";

  } else {
    alert("Preencha os campos corretamente!");
  }
}
