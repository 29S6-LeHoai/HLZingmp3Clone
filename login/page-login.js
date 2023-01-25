const $ = document.querySelector.bind(document);
const $$ = document.querySelectorAll.bind(document);

const eyeOpen = $('.eye-open');
const eyeClose = $('.eye-close');
const password = $('.password');
const form = $('form')
const fromEmail = $('.from-email');
const fromPassword = $('.from-password');
const inputEmail = fromEmail.querySelector('input');
const inputPassword = fromPassword.querySelector('input');
const warningEmail = $('.warning-email-text');
const warningPassword = $('.warning-password-text');
const warningPassword1 = $('.warning-password-text1');
const pageLoginRight = $('.page__login-right');
const btnLogin = $('.btn-login');
const signup = $('.signup-register');

eyeOpen.addEventListener('click', function() {
    eyeOpen.classList.add('hidden');
    eyeClose.classList.remove('hidden');
    password.setAttribute('type','password')
})

eyeClose.addEventListener('click', function() {
    eyeClose.classList.add('hidden');
    eyeOpen.classList.remove('hidden');
    password.setAttribute('type','text')
})

btnLogin.onclick = function(e) {
    e.preventDefault();
    if(inputEmail.value == "") {
        inputEmail.classList.add('error1')
        fromEmail.classList.add("sake");
        warningEmail.classList.add('error');
    }else {
        checkEmail();
    }

    if(inputPassword.value == "") {
        inputPassword.classList.add('error1')
        fromPassword.classList.add("sake");
        warningPassword.classList.add('error');
    }

    setTimeout(() => {
        fromEmail.classList.remove("sake");
        fromPassword.classList.remove("sake");
    },500) 

    inputEmail.onkeyup = function() {
        checkEmail();
    }

    function checkEmail() {
        let patter = /^[^ ]+@[^ ]+\.[a-z]{2,3}$/;
        if(!inputEmail.value.match(patter)) {
            inputEmail.classList.add('error1')
            warningEmail.classList.add('error');
        }else {
            inputEmail.classList.remove('error1')
            warningEmail.classList.remove('error');
        } 
    }

    inputPassword.onkeyup = function() {
        if(inputPassword.value == "") {
            inputPassword.classList.add('error1')
            warningPassword.classList.add('error');
        }else {
            warningPassword.classList.remove('error');
        } 
        if(inputPassword.value.length < 6) {
            warningPassword1.classList.add('error');
        }else {
            inputPassword.classList.remove('error1')
            warningPassword1.classList.remove('error');
         }
     }

     if(!warningEmail.classList.contains("error") && !warningPassword.classList.contains("error")) {
        window.location.href = 'http://127.0.0.1:5501/'
    } 
}

signup.onclick = function() {
    window.location.href = '/signup/signup.html';
}

