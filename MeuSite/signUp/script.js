// SignUp Screen

const myPassword = document.getElementById("passwordField1");
const myConfirmPassword = document.getElementById("passwordField2");
const letter = document.getElementById("letter");
const capital = document.getElementById("capital");
const number = document.getElementById("number");
const length = document.getElementById("length");


// When the user clicks on the password field, show the message box
myPassword.onfocus = function() {
    document.getElementById("message").style.display = "block";
}

// When the user starts to type something inside the password field
myPassword.onkeyup = function() {
    // Validate lowercase letters
    var lowerCaseLetters = /[a-z]/g;
    if (myPassword.value.match(lowerCaseLetters)) {
        letter.classList.remove("invalid");
        letter.classList.add("valid");
    } else {
        letter.classList.remove("valid");
        letter.classList.add("invalid");
    }

    // Validate capital letters
    var upperCaseLetters = /[A-Z]/g;
    if (myPassword.value.match(upperCaseLetters)) {
        capital.classList.remove("invalid");
        capital.classList.add("valid");
    } else {
        capital.classList.remove("valid");
        capital.classList.add("invalid");
    }

    // Validate numbers
    var numbers = /[0-9]/g;
    if (myPassword.value.match(numbers)) {
        number.classList.remove("invalid");
        number.classList.add("valid");
    } else {
        number.classList.remove("valid");
        number.classList.add("invalid");
    }

    // Validate length
    if (myPassword.value.length >= 8) {
        length.classList.remove("invalid");
        length.classList.add("valid");
    } else {
        length.classList.remove("valid");
        length.classList.add("invalid");
    }
}

myConfirmPassword.onkeyup = function() {
    let registeredPassword = document.getElementById("passwordField1").value;
    let confirmedPassword = document.getElementById("passwordField2").value;

    if (confirmedPassword != registeredPassword) {
        return;
    }
    myConfirmPassword.classList = "valid";
}

function setRegistration() {
    let registeredUsername = document.getElementById("usernameSignUp").value;
    let registeredPassword = document.getElementById("passwordField1").value;
    let confirmedPassword = document.getElementById("passwordField2").value;

    if (registeredUsername == "") {
        alert("O usuário não pode estar vazio!");
        return;
    }

    if (confirmedPassword != registeredPassword) {
        alert("A confirmação precisa ser igual a senha!");
        return;
    }

    if (letter.classList == "valid" &&
        capital.classList == "valid" &&
        number.classList == "valid" &&
        length.classList == "valid") {

        sessionStorage.setItem('userName', registeredUsername);
        sessionStorage.setItem('password', registeredPassword);

        alert("Usuário e senha gravados com sucesso!");

        window.location.href = "../login/login.html";

    } else {
        alert("Preencha a senha corretamente!");
    }

}