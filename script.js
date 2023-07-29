const form = document.querySelector("form");
const passwordInput = document.getElementById("password");
const passToggleBtn = document.getElementById("pass-toggle-btn");

//Functin for error messages
const showError = (field,errorText) =>{
    field.classList.add("error");
    const errorElement = document.createElement("small");
    errorElement.innText = errorText;
    field.closest(".form-group").appendChild(errorElement);

}
//
//Form submission function
const handleFormData = (e) =>{
    e.preventDefault();

//Obtain input element
const fullnameInput = document.getElementById("fullname");
const emailInput = document.getElementById("email");
const dateInput = document.getElementById("date");
const genderInput = document.getElementById("gender");
//

//Trimmied values for input fields

const fullname = fullnameInput.value.trim();
const email = emailInput.value.trim();
const password = passwordInput.value.trim();
const date = dateInput.value;
const gender = genderInput.value;
//
//Regular Expression patterns for email validation
const emailPattern =/^[^]+@[^]+\.[a-z]{2,3}$/;
//
//Clearing previous error messages
document.querySelectorAll(".form-group .error").forEach(field=>field.classList.remove("error"));
document.querySelectorAll("error-text").forEach(errorText => errorText.classList.remove());

//Performing validation checks
if(fullname ===""){
    showError(fullnameInput, "Enter your full name");
}
if(!emailPattern.test(email)){
    showError(emailInput, "Enter a valid email address");
}
if(password ===""){
    showError(passwordInput, "Enter your password");
}
if(date ===""){
    showError(dateInput, "Select your date of birth");
}
if(gender ===""){
    showError(genderInput, "Select your gender");
}
//

//Secondary validation for remaining errors
const errorInputs = document.querySelectorAll(".form-group .error");
if(errorInputs.length > 0)return;
//
form.submit();
//Submit form
}
//Toggling password visibility
passToggleBtn.addEventListener('click',()=>{
    passToggleBtn.className = passwordInput.type === "password" ? "fa-solid fa-eye-slash" : "fa-solid fa-eye";
    passwordInput.type = passwordInput.type === "password" ? "text" : "password";
});
//Handling form submission event
form.addEventListener("submit",handleFormData);