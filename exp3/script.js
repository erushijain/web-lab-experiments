const taskInput=document.getElementById("taskInput");
const addBtn=document.getElementById("addBtn");
const taskList=document.getElementById("taskList");
const counter=document.getElementById("counter");

function updateCounter(){
const total=taskList.children.length;
const done=taskList.querySelectorAll("li.completed").length;
counter.textContent=`${done} of ${total} tasks completed`;
}

function addTask(){
const text=taskInput.value.trim();
if(text===""){alert("Please enter a task!");return;}
const li=document.createElement("li");
const checkbox=document.createElement("input");
checkbox.type="checkbox";
const span=document.createElement("span");
span.textContent=text;
const deleteBtn=document.createElement("button");
deleteBtn.textContent="Delete";
deleteBtn.className="delete-btn";
checkbox.addEventListener("change",function(){li.classList.toggle("completed",checkbox.checked);updateCounter();});
deleteBtn.addEventListener("click",function(){li.remove();updateCounter();});
li.append(checkbox,span,deleteBtn);
taskList.appendChild(li);
taskInput.value="";
taskInput.focus();
updateCounter();
}

addBtn.addEventListener("click",addTask);
taskInput.addEventListener("keypress",function(e){if(e.key==="Enter")addTask();});
updateCounter();