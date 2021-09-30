const form = document.getElementById('form');
const email = document.getElementById('floatingEmail');
const userName = document.getElementById('floatingUsername');
const password = document.getElementById('floatingPassword');
const rePassword = document.getElementById('floatingRe-Password');
const phone = document.getElementById('floatingPhone');


function error(input, emailError=''){
    input.className='form-control is-invalid';
    const div = input.nextElementSibling.nextElementSibling;
    if(emailError != ''){
        div.innerText=emailError;
    }else{
        div.innerText="Bu alan boş geçilemez";
    }
    div.className = 'invalid-feedback'
};

function success(input){
    input.className='form-control is-valid';
};

function validateEmail(email) {
    const re = /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
    return re.test(String(email).toLowerCase());
}

function checkRequired(inputs){
    inputs.forEach(function(input){
        if(input.value === ''){
            error(input);
        }else if(input.getAttribute('type') == 'email'){
            if(!validateEmail(email.value)){
                error(input,'E-mail formatına uygun mail adresi giriniz...');
            }else{
                success(input);
            }
        }else{
            success(input);
        }
    });
};

function checkLength(input, min, max){
    if(input.value.length < min){
        error(input, `En az ${min} karakter olmalıdır.`);
    }else if(input.value.length > max){
        error(input, `En fazla ${max} karakter olmalıdır.`);
    }else{
        success(input);
    }
};

function checkPasswords(input1, input2){
    if(input1 !== input2){
        error(input1, 'Parolalar eşleşmiyor.');
        error(input2, 'Parolalar eşleşmiyor.');
    }
};

function checkPhone(input){
    var exp = /^\d{10}$/;
    if(!exp.test(input.value)){
        error(input, 'Telefon no 10 karakterli olmalıdır.');
    }else{
        success(input);
    }
};

form.addEventListener('submit',function(){
    // if(email.value === ''){
    //     error(email);
    // }else if(!validateEmail(email.value)){
    //     error(email,'E-mail formatına uygun mail adresi giriniz...');
    // }else{
    //     success(email);
    // }
    // if(userName.value === ''){
    //     error(userName);
    // }else{
    //     success(userName);
    // }
    // if(password.value === ''){
    //     error(password);
    // }else{
    //     success(password);
    // }
    // if(rePassword.value === ''){
    //     error(rePassword);
    // }else{
    //     success(rePassword);
    // }

    checkRequired([email,userName,password,rePassword,phone]);
    checkLength(userName, 5, 10);
    checkPasswords(password,rePassword);
    checkPhone(phone);
});