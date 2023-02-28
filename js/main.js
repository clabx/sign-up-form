const password = document.querySelector('#password');
const confirmPassword = document.querySelector('#confirmPassword');
const invalidConfirmPassword = document.querySelector('#invalidConfirmedPassword');
const invalidPassword = document.querySelector('#invalidPassword');

const email = document.querySelector('#email');
const formInput = document.querySelectorAll('input')

function checkPassword(){
        if(password.value != confirmPassword.value){
            console.log(password.validity)
            confirmPassword.setCustomValidity("Passwords don't match!")
            invalidConfirmPassword.textContent = "Passwords don't match!";
        
        } else{
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
        } else if(form == email){
            form.nextElementSibling.textContent = "Incorrect form.";
        }
    } 
})})

