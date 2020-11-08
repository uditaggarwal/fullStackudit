//selector

const time=document.getElementById("time");
const greeting=document.getElementById("greeting");
const name1=document.getElementById("name");
const date=document.getElementById("date");



//event handler

name1.addEventListener('keypress',setName);
name1.addEventListener('blur',setName);

//start function
function showtime(){


  // 2020,12,10,20,12,10
let today=new Date();

let hour=today.getHours();
let min=today.getMinutes();
let sec=today.getSeconds();


let todaydate=today.toDateString();


//am-pm
const ampm = hour > 12 ? 'PM' :'AM' ;
//format
hour = hour % 12 || 12 ;
//output
time.innerHTML= `${addZero(hour)}<span>:</span>${addZero(min)}<span>:</span>${addZero(sec)} ${ampm}`;
date.innerHTML=`${todaydate}`;

//call showtime funtion after 1s
setTimeout(showtime,1000);


function addZero(n){

    return((parseInt(n,10)<10 ? '0':'')+n);
}

}

function setGreeting(){

  let today=new Date();
  let hour=today.getHours();

  if(hour<12){
    document.body.style.backgroundImage="url(../images/morning.jpg)";
    greeting.innerHTML="Good Morning";
  }
  
  else if(hour<18){
    document.body.style.backgroundImage="url(../images/afternoon.jpg)";
    greeting.innerHTML="Good Afternoon";
  }
  else{
    document.body.style.backgroundImage="url(../images/night.jpg)";
    greeting.innerHTML="Good Evening";
  }

}


function getName(){

if(localStorage.getItem("mydata")===null){
name1.innerHTML="[Enter Name]";

}
else{

  name1.innerHTML=localStorage.getItem("mydata");

}

}

function setName(e1){

if(e1.type === "keypress"){
if(e1.code === 'Enter'){
localStorage.setItem('mydata',e1.target.innerHTML);
name1.blur();

}

}
else{
  localStorage.setItem('mydata',e1.target.innerHTML);
}

}

var s=0;
function rotate(){
  if(s == 0){
  time.style.transform="rotateY(360deg)";
  greeting.style.transform="scale(0.8)";
  date.style.color="red";
  s=1;
  console.log(s);
  }
  else if(s == 1){
    time.style.transform="rotateY(-360deg)";
    greeting.style.transform="scale(1)";
    date.style.color="orange";
    s=2;
    console.log(s);
  }
  else if(s == 2){
    time.style.transform="rotateZ(360deg)";
    greeting.style.transform="scale(1.4)";
    date.style.color="gold";
    s=3;
    console.log(s);
    }
    else if(s==3){
      time.style.transform="rotateZ(-360deg)";
      greeting.style.transform="scale(1.6)";
      date.style.color="pink";
      s=0;
      console.log(s);
    }

  setTimeout(rotate,3000);
}



//funtion complete

//function call
showtime();
setGreeting();
getName();
// rotate();