const passwordField = document.getElementById("password");
const passwordConfirmField = document.getElementById("password-confirm");
const pwdNotMatch = document.getElementById("pwd-not-match");

passwordField.addEventListener('input', e => {
    if (passwordField.textLength !== 0) {
        passwordField.classList.remove("wrong-password");
    } else {
        passwordField.classList.add("wrong-password");
    }
});

passwordConfirmField.addEventListener('input', e => {
    if (passwordConfirmField.value === passwordField.value) {
        passwordConfirmField.classList.remove("wrong-password");
        pwdNotMatch.style.display = "none";
    } else {
        passwordConfirmField.classList.add("wrong-password");
        pwdNotMatch.style.display = "initial";
    }
});