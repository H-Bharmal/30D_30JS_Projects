let inputText = document.getElementById("input-box");
let addBtn = document.getElementById("addButton")

let taskList = document.getElementById("list-container");


addBtn.addEventListener('click',(e)=>{
    let input = inputText.value;
    // console.log(input);
    if(input !==""){
        let li = document.createElement('li')
        li.innerText = input;
        taskList.append(li);
        let span = document.createElement('span');
        span.innerHTML = '\u00d7';
        li.append(span);
        inputText.value ="";
        saveData();
        // console.log("task added");
    }
})

taskList.addEventListener('click',(e)=>{
    if(e.target.tagName === "LI"){
        e.target.classList.toggle("checked");
        saveData();
    }
    else if(e.target.tagName === 'SPAN'){
        e.target.parentElement.remove();
        saveData();
    }
}, false);

function saveData(){
    localStorage.setItem('task-Data', taskList.innerHTML);
}

function getData(){
    taskList.innerHTML = localStorage.getItem('task-Data');
    console.log("Content Retrived !");
}

getData();