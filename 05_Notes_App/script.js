const createBtn = document.querySelector(".createBtn");
const notesContainer = document.querySelector('.notes');
// const deleteBtn = document.querySelector('.notes p img');

function addNote(){
    let p = document.createElement('p');
    p.classList.add('input-box');
    p.setAttribute('contenteditable','true');
    let img = document.createElement('img');
    img.setAttribute('src',"Images/recycle-bin.png");
    p.addEventListener('click',(e)=>{
        if(e.target.tagName == 'IMG'){
            // console.log(e.target.parentElement);
            p.remove();
        }
        save();
    })
    p.append(img);
    notesContainer.append(p);
}
function deleteNote(e){
    e.target.remove();
}

createBtn.addEventListener('click',(e)=>{
    addNote();
})

function save(){
    // console.log(notesContainer);
    console.log("saved");
    // console.log(notesContainer.innerHTML);
    localStorage.setItem('data',notesContainer.innerHTML);
}
// setInterval(save,5000);
function retrive(){
    let notes = localStorage.getItem('data');
    if(notes != "")
        notesContainer.innerHTML = notes;
}
// TODO : localStorage Not Working Properly
// retrive();
