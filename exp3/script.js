const input=document.getElementById("task");
const addBtn=document.getElementById("add");
const list=document.getElementById("list");
const count=document.getElementById("count");

function showCount(){
const all=list.children.length;
const done=list.getElementsByClassName("done").length;
count.textContent="Completed: "+done+" / "+all;
}

function addTask(){
const value=input.value.trim();
if(value===""){alert("Task cannot be empty");return;}
const li=document.createElement("li");
const span=document.createElement("span");
span.textContent=value;
const del=document.createElement("button");
del.textContent="Delete";
li.onclick=function(){li.classList.toggle("done");showCount();};
del.onclick=function(e){e.stopPropagation();li.remove();showCount();};
li.appendChild(span);
li.appendChild(del);
list.appendChild(li);
input.value="";
input.focus();
showCount();
}
addBtn.onclick=addTask;
input.addEventListener("keydown",function(e){if(e.key==="Enter"){addTask();}});
showCount();