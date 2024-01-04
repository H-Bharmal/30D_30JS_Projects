const questionArray = [
    {
        question :"This is question 1",
        options :[
            {value:"option1", isCorrect : false},
            {value:"option2", isCorrect : false},
            {value:"option3", isCorrect : true},
            {value:"option4", isCorrect : false}
        ]
    },
    {
        question :"Su aa question 2 chhe ?",
        options :[
            {value:"Hovv", isCorrect : true},
            {value:"Naa have", isCorrect : false},
            {value:"To biju su, Tamburo chhe ?", isCorrect : true},
            {value:"Kaik bhul thati hase", isCorrect : false}
        ]
    }
]
//TODO : we get this array from somewhere :)


let questionElement =  document.getElementById("question");
let optionsDiv = document.querySelector(".options");
let resultDiv = document.querySelector(".result");
let quizApp = document.querySelector('.quiz-app');
let nextButton = document.querySelector('#nextBtn');
let prevButton = document.querySelector('#prevBtn');
let homeButton = document.querySelector('#homeBtn');
let answersGiven = [];
let questionIndex=-1;


function displayQuestion(questionIndex){
    optionsDiv.innerHTML = "";
    //display the nextQuestion with options and question itself
    Question = questionArray[questionIndex];
    questionElement.innerText = Question.question;
    let i=1;
    let isAnsweredBefore = questionIndex < answersGiven.length;
    let answers;
    if(isAnsweredBefore){
        answers = answersGiven[questionIndex];
    }
    Question.options.forEach(option => {
        let input = document.createElement('input')
        let label = document.createElement('label')
        label.classList.add('option-label');
        label.setAttribute("for",`option${i}`)
        input.id=`option${i}`
        input.type = 'checkbox'
        
        let text = document.createTextNode(option.value)
        optionsDiv.appendChild(input);
        optionsDiv.appendChild(label);
        label.appendChild(text);

        if(isAnsweredBefore){
            console.log("Answered Before");
            input.checked = answers[i-1];
        }
        i++;
    });


}
function calculateScore(){
    //for every question check if all answer are true
    let score=0;

    for(let i=0;i<questionArray.length;i++){
        let trueAnswers = questionArray[i].options;
        if(i==answersGiven.length){
            break;
        }
        let answer = answersGiven[i];
        score++;
        for(let j=0;j<answer.length;j++){
            if(answer[j] != trueAnswers[j].isCorrect){
                score--;
                break;
            }
        }
    }
    return [score,questionArray.length];
}
// Function to get the answers stored in a array
function saveAnswers(questionIndex){
    let optionsChecked = document.querySelectorAll(".options input[type='checkbox']");
    optionsChecked = Array.from(optionsChecked).map(checkbox => checkbox.checked);
    console.log(optionsChecked);
    answersGiven[questionIndex] = optionsChecked;
}
function displayScore(){
    let score = calculateScore();
    quizApp.style.display = "none";
    nextButton.style.display='none';
    prevButton.style.display='none';
    homeButton.style.display='flex';
    resultDiv.style.display = "block";
    let heading = document.querySelector('.result h2');
    heading.innerHTML = `Your Score is : ${score[0]} / ${score[1]}`;
    // resultDiv.appendChild(heading);
}

function next(){
    // if(questionIndex==-1){
    //     questionIndex++;
    //     displayQuestion(questionIndex);
    //     return;
    // }
    if(questionIndex < 0){
        prevButton.style.display = 'none';
    }
    else{
        prevButton.style.display = 'flex';
    }
    questionIndex++;
    saveAnswers(questionIndex-1);
    if(questionIndex == questionArray.length-1){
        nextButton.innerHTML = 'Submit';
    }
    if(questionIndex == questionArray.length){
        //seek confirmation
        if(confirm("Do you want to Submit your Answers ?")){
            displayScore();
        }
        else{
            questionIndex--;
        }
    }
    else{
        displayQuestion(questionIndex);
    }
}
function previous(){

    if(questionIndex==1){
        prevButton.style.display = 'none';
    }
    else if(questionIndex < 1){
        return ;
    }
    else{
        prevButton.style.display = 'flex';
    }
    // quizApp.style.display = "none";
    if(questionIndex==questionArray.length-1){
        nextButton.innerHTML = "Next";
    }
    // save the current answers
    saveAnswers(questionIndex);
    questionIndex--;
    //Display the questions and 
    displayQuestion(questionIndex);

}
prevButton.addEventListener('click',(e)=>{
    previous();
})
nextButton.addEventListener('click',(e)=>{
    next();
})

function startQuiz(){
    prevButton.style.display='flex';
    nextButton.style.display='flex';
    document.getElementById('startBtn').style.display='none';
    quizApp.style.display = 'block';
    next();
}


// nextQuestion(1);
// nextButton.addEventListener('click',(e)=>{
//     console.log("Bonk !!");
//     if(questionIndex == questionArray.length){
//         getAnswers(questionIndex-1);
//         displayScore();
//     }
//     else{
//         next();
//     }
// })
