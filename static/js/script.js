const password1 = document.getElementById("password1");
const password2 = document.getElementById("password2");
const phone = document.getElementById("phone");
const passwordValidationResult = document.querySelector("#password1 + pre");
const telValidationResult = document.querySelector("#phone + pre")
const button = document.querySelector('button');

button.addEventListener('click', () => {
    addEventListener
    if (password1.value != password2.value) {
        passwordValidationResult.textContent = "* Passwords do not match";
    } else if (password1.value.length < 8) {
        passwordValidationResult.textContent = "* Password too short";
    } else {
        passwordValidationResult.textContent = "";
    }
    if (!phone.checkValidity()) {
        telValidationResult.textContent = "* didn't match the pattern"
    } else {
        telValidationResult.textContent = ""
    }
});
