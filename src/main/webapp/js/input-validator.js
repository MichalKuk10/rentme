let email_input = document.querySelector(".email-input");
const passw_input = document.querySelector(".passw-input");
const warning_paragraph = document.querySelector(".warning");
let second_passw_input = document.querySelector(".sec-passw");
let resetPasswBtn = document.querySelector(".button");
let name_input = document.querySelector(".name-surname");
const submitBtn = document.querySelector(".submit-button");
let loginBtn = document.querySelector(".loginBtn");
let correctName = true;
let correctEmail = true;

function switchButton(id) {
    var button = document.getElementById(id);
    if (correctName && correctEmail) {
        console.log("enabled")
        button.disabled = false;
    } else {
        console.log("disabled")
        button.disabled = true;
    }
}

function emailValidator() {
    const mailformat = /([a-zA-z_\-.\]+)@([a-zA-z0-9-]+)\.([a-z\.])/
    let email_value = email_input.value;
    let validEmail = mailformat.test(email_value);
    const email_paragraph = document.querySelector(".warning-email");
    if (!validEmail) {
        email_paragraph.classList.remove("hidden");
        correctEmail = false;
    } else {
        email_paragraph.classList.add("hidden");
        correctEmail = true;
    }
    // switchButton("btn-update");
}

function passwordValidator() {
    var passwFormat = /^(?=.*[A-Za-z])(?=.*\d)(?=.*[@$!%*#?&])[A-Za-z\d@$!%*#?&]{8,}$/;
    let passw_value = passw_input.value;
    let validPassw = passwFormat.test(passw_value);
    if (!validPassw) {
        document.querySelector(".warning-password").classList.remove("hidden");
    } else {
        document.querySelector(".warning-password").classList.add("hidden");
    }
}

function checkMatchPasswords() {
    let passw_value = passw_input.value;
    let sec_passw = document.querySelector(".sec-passw").value;
    const warnig_passw_message = document.querySelector(".warning-equals");
    if (passw_value !== sec_passw) {
        warnig_passw_message.classList.remove("hidden");
    } else {
        warnig_passw_message.classList.add("hidden")
    }
}

function nameValidator() {
    const regExForName = /^([a-zA-Z]{2,}\s[a-zA-z]{1,}'?-?[a-zA-Z]{2,}\s?([a-zA-Z]{1,})?)/;
    let name_value = name_input.value;
    let validName = regExForName.test(name_value);
    alert("Test");
    if (validName) {
        correctName = true;
    } else {
        correctName = false;
    }
    displayWarning(validName);
    switchButton("btn-update");
}


function displayWarning(validatorResult) {
    if (validatorResult == false) {
        warning_paragraph.classList.remove("hidden");
    } else {
        warning_paragraph.classList.add("hidden");
    }
}

function checkEmail() {
    loginBtn.addEventListener("mouseover", emailValidator);
}


function checkPasswordForRegEx() {
    passw_input.addEventListener("focusout",passwordValidator);
}


function checkName() {
    name_input.addEventListener("mouseover", nameValidator);
}


function checkIfPasswordsAreEquals() {
    resetPasswBtn.addEventListener("click", checkMatchPasswords);
}


function passwordClick() {
    if (email_input) {
        email_input.addEventListener("click", emailValidator);
    }
}


function clickBtnResetPassw() {
    submitBtn.addEventListener("mouseover", emailValidator);
}