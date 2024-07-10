const formElement = document.querySelector("#form");
const nameLabelElement = document.querySelector("#nameLabel");
const usernameLabel = document.querySelector("#usernameLabel");
const emailLabel = document.querySelector("#emailLabel");
const passwordLabel1 = document.querySelector("#passwordLabel1");
const passwordLabel2 = document.querySelector("#passwordLabel2");
const submitButton = document.querySelector("#submitButton");

const passwordInputElement1 = document.querySelector("#password1");
const passwordDivElement1 = document.querySelector("#passwordDiv1");
const passwordInputElement2 = document.querySelector("#password2");
const passwordDivElement2 = document.querySelector("#passwordDiv2");

formElement.onsubmit = formHandling;

// Click on label to focus on input events.

nameLabelElement.addEventListener('click', function () {
    document.querySelector("#name").focus();
}, false);

usernameLabel.addEventListener('click', function () {
    document.querySelector("#username").focus();
}, false);

emailLabel.addEventListener('click', function () {
    document.querySelector("#email").focus();
}, false);

passwordLabel1.addEventListener('click', function () {
    document.querySelector("#password1").focus();
}, false);

passwordLabel2.addEventListener('click', function () {
    document.querySelector("#password2").focus();
}, false);

//Event logic for both password inputs to show and hide message.

passwordInputElement1.addEventListener('focus', function () {
    if(passwordInputElement1.value.length < 8){
        passwordDivElement1.style.visibility = "visible";
    }
}, false);

passwordInputElement1.addEventListener('blur', function () {
    passwordDivElement1.style.visibility = "hidden";
}, false);

passwordInputElement1.addEventListener('input', function () {
    passwordInputBehaviour(true);
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
    passwordInputBehaviour(false);
}, false);

//Button logic.

submitButton.addEventListener('submit', function () {
    formElement.submit();
}, false);

// Conjoined function for handling logic when inputting or deleting characters.

function passwordInputBehaviour(firstElement){
    if(firstElement){
        if(passwordInputElement1.value.length >= 8){
            passwordDivElement1.style.visibility = "hidden";

            if(passwordFieldsMatch()){
                submitButton.disabled = false;
            }

        } else if(passwordInputElement1.value.length < 8){
            passwordDivElement1.style.visibility = "visible";
            submitButton.disabled = true;
        }
    }else{
        if(passwordFieldsMatch() && passwordInputElement2.value.length >= 8){
            passwordDivElement2.style.visibility = "hidden";
            submitButton.disabled = false;

        } else if(passwordInputElement2.value.length < 8){
            passwordDivElement2.style.visibility = "visible";
            submitButton.disabled = true;
        }
    }
}

// Checks for a match of the password fields.

function passwordFieldsMatch(){
    if(passwordInputElement2.value === passwordInputElement1.value){
        return true;
    } else{
        return false;
    }
}

//Collects the data from the form in an object and displays it as an alert after submission.

function formHandling(event){

    event.preventDefault();

    const registrationData = {
        name: event.target.name.value,
        username: event.target.username.value,
        email: event.target.email.value,
        password: event.target.password.value,
      };

    alert(registrationData.name + '\n' + registrationData.username + '\n' + registrationData.email + '\n' + registrationData.password);
}