const password = document.querySelector('#password');
const confirmPassword = document.querySelector('#confirmPassword');
const invalidConfirmPassword = document.querySelector('#invalidConfirmedPassword');
const invalidPassword = document.querySelector('#invalidPassword');
const invalidEmail = document.querySelector('#invalidEmail');
const invalidLastName = document.querySelector('#invalidLastName');
const invalidName = document.querySelector('#invalidName');

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