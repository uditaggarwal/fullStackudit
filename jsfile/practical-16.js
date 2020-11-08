//Selector 
var todoInput=document.querySelector(".todo-input");
var todoButton=document.querySelector(".todo-button");
var todoList=document.querySelector(".todo-list");
var count=0;
//event
todoButton.onclick=create;
todoList.onclick=checkdelete;

//function
function create(e){
 e.preventDefault();

   if(todoInput.value==""){
       alert("Text field cannot be Emptied");
   }
   else{
    
    var newdiv=document.createElement("div");
    newdiv.classList.add("todo");

    var newli=document.createElement("li");
newli.classList.add("todo-item");
newli.innerHTML=todoInput.value;
newdiv.appendChild(newli);
todoInput.value="";

var checkbtn=document.createElement("button");
checkbtn.classList.add("check-btn");
checkbtn.innerHTML='<i class="fa fa-check"></i>';
newdiv.appendChild(checkbtn);

var delbtn=document.createElement("button");
delbtn.classList.add("delete-btn");
delbtn.innerHTML='<i class="fa fa-trash"></i>';
newdiv.appendChild(delbtn);

todoList.appendChild(newdiv);

var body=document.body;

count++;
if(count==1){
  body.style=" background-image: linear-gradient(rgb(255, 0, 140),rgb(83, 179, 142));";
  newli.style="background-image: linear-gradient(rgb(255, 102, 0),rgb(226, 196, 26))";
}
else if(count==2){
body.style="background-image: linear-gradient(rgb(0, 255, 115),rgb(179, 83, 83));";
newli.style="background-image: linear-gradient(rgb(17, 211, 33),rgb(1, 192, 240))";
}
else if(count==3){
body.style="background-image: linear-gradient(rgb(255, 238, 0),rgb(83, 176, 179));";
newli.style="background-image: linear-gradient(rgb(159, 159, 214),rgb(228, 66, 66))";
}
else if(count==4){
  body.style=" background-image: linear-gradient(rgb(159, 159, 214),rgb(228, 66, 66))";
  newli.style="background-image: linear-gradient(rgb(233, 12, 104),rgb(31, 165, 206))";
}
else if(count==5){
  body.style="background-image: linear-gradient(rgb(240, 205, 6),rgb(233, 24, 188),rgb(74, 241, 74));";
  newli.style="background-image: linear-gradient(rgb(75, 75, 235),rgb(221, 167, 167))";
  count=0;
}

   }

}

function checkdelete(e){
var item=e.target;
if(item.classList[0]==="delete-btn"){
    var parent=item.parentNode;
    var mes=confirm("Do you want to delete?");
  if(mes){
    parent.remove();
  }   
}
if(item.classList[0]==="check-btn"){
    var parent=item.parentNode;
   parent.classList.toggle("completed");
}

}
