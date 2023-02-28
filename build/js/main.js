const password = document.querySelector('#password');
const confirmPassword = document.querySelector('#confirmPassword');
const invalidConfirmPassword = document.querySelector('#invalidConfirmedPassword');
const invalidPassword = document.querySelector('#invalidPassword');

const email = document.querySelector('#email');
const invalidEmail = document.querySelector('#invalidEmail');

const lastName = document.querySelector('#lastName')
const invalidLastName = document.querySelector('#invalidLastName');

const firstName = document.querySelector('firstName')
const invalidName = document.querySelector('#invalidName');

const formInput = document.querySelectorAll('input')

function checkPassword(){
            if(password.value != confirmPassword.value){
            console.log(false)
            confirmPassword.setCustomValidity("Passwords don't match!")
            invalidConfirmPassword.textContent = "Passwords don't match!";
        
        } else{
            console.log(true);
            confirmPassword.setCustomValidity('')
            invalidConfirmPassword.textContent = '';
        }
}

confirmPassword.addEventListener('input', () => {
    password.addEventListener('input', () => {
        checkPassword();
    })
        checkPassword();
})

formInput.forEach((form) => {form.addEventListener('input', () => {
    if(form.validity.valid == false){
        if(form.validity.valueMissing){
            form.nextElementSibling.textContent = "Required.";
        } else{
            form.nextElementSibling.textContent = "Incorrect form.";
        }
    } 
})})

