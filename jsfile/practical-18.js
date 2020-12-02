//selecto
const form=document.getElementById('form');
const name=document.getElementById('name');
const email=document.getElementById('email');
const pass=document.getElementById('pass');
const repass=document.getElementById('repass');



//Event handler

form.addEventListener('submit',function(e){
e.preventDefault();
checkInputs();
});


function checkInputs(){
const uservalue=name.value.trim();
const emailvalue=email.value.trim();
const passvalue=pass.value.trim();
const repassvalue=repass.value.trim();

if(uservalue ===''){
  
    showError(name,"Name cannot be blank");
}
else if(testname(uservalue)){

    showError(name,"lowercase with no special symbol");
}
else{
    showSuccess(name,"success");
}


if(emailvalue ===''){
  
    showError(email,"Email cannot be blank");
}
else if(!testemail(emailvalue)){
    showError(email,"Invalid Email");
}
else{
   
    showSuccess(email,"success");
}



if(passvalue ===''){
  
    showError(pass," Password cannot be blank");
}

else{
  
    showSuccess(pass,"success");
}


if(repassvalue ===''){
  
    showError(repass,"Re Password cannot be blank");
}
else if(!(repassvalue === passvalue)){
    showError(repass,"Password Mismatch");
}
else{
  
    showSuccess(repass,"success");
}


}

function showError(input,msg){
    const formControl= input.parentNode;
    //  formControl.className='error';
    const small=formControl.querySelector('.msg');
    small.innerText= msg;
    small.style.display="block";

    const icon=formControl.querySelector('.icon');
    icon.style.display="none";

    const ricon=formControl.querySelector('.ricon');
    ricon.style.display="initial";
  
    formControl.querySelector("input").style.border="2px solid red";

}
function showSuccess(input,msg){
    const formControl= input.parentNode;

    const small=formControl.querySelector('.msg');
    small.style.display="none";

    const icon=formControl.querySelector('.icon');
    icon.style.display="initial";

    const ricon=formControl.querySelector('.ricon');
    ricon.style.display="none";
    formControl.querySelector("input").style.border="2px solid green";

  
   

}
function testemail(input){
   
    return  input.match(/(^[a-zA-Z0-9-_\.]+)@([a-zA-Z]+)(\.[a-zA-Z]{2,})/) ;
}
function testname(input){
   
  
    return  /[\s\dA-Z @$\.&!*#$?%^]+/.test(input) ;
}

