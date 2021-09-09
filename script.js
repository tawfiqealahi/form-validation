const userName = document.getElementById('username');
const email = document.getElementById('email');
const password = document.getElementById('password');
const password2 = document.getElementById('password2');

// show input error message
function showError(input, message) {
    const formControl = input.parentElement;
    formControl.className = 'form-control error';
    const small = formControl.querySelector('small');
    small.innerText = message;
}
// show input success message

function showSuccess(input) {
    const formControl = input.parentElement;
    formControl.className = 'form-control success';

}

// check email validation
function checkEmail(input) {
    const re = /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
    if(re.test(input.value.trim())){
        showSuccess(input);
    }   else{
        showError(input, `Invalid. Enter Valid Email..`)
        
    } 
}
// check required 
function checkRequired(inputArr){
    inputArr.forEach(function(input){
        if (input.value.trim()==='') {
            showError(input, `* ${getFieldName(input)} is required`);
        }else{
            showSuccess(input);
        }
    });
};
// check length
function checkLength(input, min, max){
if(input.value.length<min){
    showError(input, `*Required. ${getFieldName(input)} must be at least ${min} charecters`);
}else if(input.value.length> max){
    showError(input, `*Required. ${getFieldName(input)} must be within ${max} charecters`);
}else{
    showSuccess(input);
}

}

// check password confirmation

const checkPasswordMatch= (input1, input2)=>{
    if(input1.value!==input2.value){
        showError(input2, 'password did not match');
    };
} ;

// get field name
function getFieldName(input){
    return input.id.charAt(0).toUpperCase() + input.id.slice(1) ; 
}

const form=document.getElementById('form').addEventListener('submit',function(e){
    e.preventDefault();

    checkRequired([userName, email,password,password2]);
    checkLength(userName, 3,30);
    checkLength(password, 6,15);
    checkEmail(email);
    checkPasswordMatch(password, password2);
});









// const form = document.getElementById('form').addEventListener('submit', function (e) {
//     e.preventDefault();
//     // username validation
//     if (userName.value === '') {
//         showError(userName, '*username is required');
//     } else {
//         showSuccess(userName);
//     }

//     // email validation
//     if (email.value === '') {
//         showError(email, '*email is required');
//     }else if(!isValidEmail(email.value) ){
//         showError(email, '*inter a valid email');
//     }
//      else {
//         showSuccess(email);
//     }
//     // password validation
//     if (password.value === '') {
//         showError(password, '*password is required');
//     } else {
//         showSuccess(password);
//     }
//     // confirm password validation
//     if (password2.value === '') {
//         showError(password2, '*confirm password is required');
//     } else {
//         showSuccess(password2);
//     }
// });