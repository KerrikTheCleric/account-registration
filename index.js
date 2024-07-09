//Confirmation event for button

//8 Character Check For Passwords

//Non-matching passwords need to disable submit button

//Submit Event for form

const nameLabelElement = document.getElementById("nameLabel");
const usernameLabel = document.getElementById("usernameLabel");
const emailLabel = document.getElementById("emailLabel");
const passwordLabel1 = document.getElementById("passwordLabel1");
const passwordLabel2 = document.getElementById("passwordLabel2");

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
