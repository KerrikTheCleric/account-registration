//Confirmation event for button

//8 Character Check For Passwords

//Non-matching passwords need to disable submit button

const formElement = document.getElementById("form");
const nameLabelElement = document.getElementById("nameLabel");
const usernameLabel = document.getElementById("usernameLabel");
const emailLabel = document.getElementById("emailLabel");
const passwordLabel1 = document.getElementById("passwordLabel1");
const passwordLabel2 = document.getElementById("passwordLabel2");
const submitButton = document.getElementById("submitButton");

const passwordInputElement1 = document.getElementById("password1");
const passwordDivElement1 = document.getElementById("passwordDiv1");
const passwordInputElement2 = document.getElementById("password2");
const passwordDivElement2 = document.getElementById("passwordDiv2");

nameLabelElement.addEventListener('click', function () {
    document.getElementById("name").focus();
}, false);

usernameLabel.addEventListener('click', function () {
    document.getElementById("username").focus();
}, false);

emailLabel.addEventListener('click', function () {
    document.getElementById("email").focus();
}, false);

passwordLabel1.addEventListener('click', function () {
    document.getElementById("password1").focus();
}, false);

passwordLabel2.addEventListener('click', function () {
    document.getElementById("password2").focus();
}, false);

submitButton.addEventListener('submit', function () {
    formElement.submit();
}, false);

passwordInputElement1.addEventListener('focus', function () {
    if(passwordInputElement1.value.length < 8){
        passwordDivElement1.style.visibility = "visible";
    }
}, false);

passwordInputElement1.addEventListener('blur', function () {
    passwordDivElement1.style.visibility = "hidden";
}, false);

passwordInputElement1.addEventListener('input', function () {
    if(passwordInputElement1.value.length >= 8){
        passwordDivElement1.style.visibility = "hidden";
    } else if(passwordInputElement1.value.length < 8){
        passwordDivElement1.style.visibility = "visible";
    }
}, false);

passwordInputElement2.addEventListener('focus', function () {
    if(passwordInputElement2.value.length < 8){
        passwordDivElement2.style.visibility = "visible";
    }
}, false);

passwordInputElement2.addEventListener('blur', function () {
    passwordDivElement2.style.visibility = "hidden";
}, false);

passwordInputElement2.addEventListener('input', function () {
    if(passwordInputElement2.value.length >= 8){
        passwordDivElement2.style.visibility = "hidden";
    } else if(passwordInputElement2.value.length < 8){
        passwordDivElement2.style.visibility = "visible";
    }
}, false);