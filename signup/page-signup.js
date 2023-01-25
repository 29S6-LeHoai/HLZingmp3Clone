const $ = document.querySelector.bind(document);
const $$ = document.querySelectorAll.bind(document);

const eyeOpen = document.querySelectorAll('.eye-open');
const eyeClose = document.querySelectorAll('.eye-close');
const eyeClose1 = document.querySelector('.eye-close');
const password = $$('.password');
const form = $('form')
const fromEmail = $('.from-email');
const fromPassword = $$('.from-password');
const fromNameUser = $('.from-username');
const inputEmail = fromEmail.querySelector('input');
const inputPassword = document.querySelectorAll('.from-password input');
const inputNameUser = document.querySelector('.from-username input');
const warningEmail = $('.warning-email-text');
const warningPassword = $$('.warning-password-text');
const warningPassword1 = $$('.warning-password-text1');
const warningPassword2 = $$('.warning-password-text2');
const warningUserName = $('.warning-username-text');
const btnLogin = $('.btn-signup');
const login = $('.login-register');

login.onclick = function() {
    window.location.href = '/login/login.html';
}

eyeClose[0].onclick = function() {
    eyeClose[0].classList.add('hidden');
    eyeOpen[0].classList.remove('hidden');
    password[0].setAttribute('type','text');
}

eyeOpen[0].onclick = function() {
    eyeOpen[0].classList.add('hidden');
    eyeClose[0].classList.remove('hidden');
    password[0].setAttribute('type','password');
}


eyeClose[1].onclick = function() {
    eyeClose[1].classList.add('hidden');
    eyeOpen[1].classList.remove('hidden');
    password[1].setAttribute('type','text');
}

eyeOpen[1].onclick = function() {
    eyeOpen[1].classList.add('hidden');
    eyeClose[1].classList.remove('hidden');
    password[1].setAttribute('type','password');
}


inputPassword[0].onkeydown = function() {
    if(inputPassword[0].value.length < 5) {
        warningPassword1[0].classList.add('error');
        warningPassword[0].classList.remove('error');
    }else {
        warningPassword1[0].classList.remove('error');
        fromPassword[0].classList.remove('error1');
    }
}

function checkPassWord() {
    inputPassword[0].onkeyup = function() {
        if(inputPassword[0].value!=inputPassword[1].value) {
            warningPassword2[0].classList.add('error');
        }else {
            warningPassword2[0].classList.remove('error');
            warningPassword2[1].classList.remove('error');
            warningPassword[0].classList.remove('error');
            fromPassword[0].classList.remove('error1');
        }
    }
    
    inputPassword[1].onkeyup = function() {
        if(inputPassword[0].value!=inputPassword[1].value) {
            warningPassword2[1].classList.add('error');
        }else {
            warningPassword2[1].classList.remove('error');
            warningPassword[1].classList.remove('error');
            warningPassword2[0].classList.remove('error');
            fromPassword[1].classList.remove('error1');
        }
    }
}

checkPassWord();

btnLogin.onclick = function() {
    if(inputEmail.value == "") {
        inputEmail.classList.add('error1');
        warningEmail.classList.add('error');
        fromEmail.classList.add("sake");
    }else {
        checkEmail();
        fromEmail.classList.remove('error1');
    }

    if(inputPassword[0].value == "") {
        fromPassword[0].classList.add('error1');
        fromPassword[0].classList.add("sake");
        warningPassword[0].classList.add('error');
    }

    if(inputPassword[1].value == "") {
        fromPassword[1].classList.add('error1');
        fromPassword[1].classList.add("sake");
        warningPassword[1].classList.add('error');
    }

    if(inputNameUser.value == "") {
        fromNameUser.classList.add('error1');
        fromNameUser.classList.add("sake");
        warningUserName.classList.add('error');
    }

    setTimeout(()=>{
        fromEmail.classList.remove("sake");
        fromPassword[0].classList.remove("sake");
        fromPassword[1].classList.remove("sake");
        fromNameUser.classList.remove("sake");
    },500);

    inputEmail.onkeyup = function() {
        checkEmail();
    }

    inputPassword[0].onkeyup = function() {
        if(inputPassword[0].value == '') {
            fromPassword[0].classList.add('error1');
            warningPassword[0].classList.add('error');
            warningPassword1[0].classList.remove('error');
        }else {
            warningPassword[0].classList.remove('error');
        } 
        checkPassWord();
    }
    inputPassword[1].onkeyup = function() {
        if(inputPassword[1].value == '') {
            fromPassword[1].classList.add('error1');
            warningPassword[1].classList.add('error');
        }else {
            fromPassword[1].classList.remove('error1');
            warningPassword[1].classList.remove('error');
        } 
        
        checkPassWord();
    }

    inputNameUser.onkeyup = function() {
        if(inputNameUser.value == '') {
            fromNameUser.classList.add('error1');
            warningUserName.classList.add('error');
        }else {
            fromNameUser.classList.remove('error1');
            warningUserName.classList.remove('error');
        }
    }
    
    if(!warningEmail.classList.contains("error") && !fromPassword[0].classList.contains("error1")) {
        window.location.href = 'http://127.0.0.1:5501/';
    }
}
function checkEmail() {
    let patter = /^[^ ]+@[^ ]+\.[a-z]{2,3}$/;
    if(!inputEmail.value.match(patter)) {
        inputEmail.classList.add('error1');
        warningEmail.classList.add('error');
    }else {
        inputEmail.classList.remove('error1');
        warningEmail.classList.remove('error');
    } 
}