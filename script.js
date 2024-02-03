const projects = document.querySelector(".projects");
const projectNameList = ["Weather App", "TO-DO List", "Quiz App", "Password Generator", "Notes App", "Age Calculator", "Quote Generator", "QR Code Generator"];
function createProjectsDiv(ProjectName, number){

    const div = document.createElement('div');
    const heading = document.createElement('h3');
    const link = document.createElement('a');
    const img = document.createElement('img');    
    
    div.className = `project${number}`;
    
    heading.innerHTML = `<b>${number}.</b> ${ProjectName}`;

    img.className ='Project-Images';
    img.src = `Images/${number}_${ProjectName}.png`;
    img.alt = `${ProjectName}`

    link.href = `${number}_${ProjectName}/index.html`;
    link.appendChild(img);

    div.appendChild(heading);
    div.appendChild(link);
    
    projects.appendChild(div);
}
function generateNumber(number){
    if(number < 10){
        return `0${number}`;
    }
    else{
        return `${number}`;
    }
}
function generateAll(){
    const n = projectNameList.length;
    for(let i=1; i<=n; i++){
        number = generateNumber(i);
        projectName = projectNameList[i-1];
        createProjectsDiv(projectName, number);
    }
}

generateAll();