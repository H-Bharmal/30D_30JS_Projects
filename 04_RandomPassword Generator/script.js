
const uppercase = "ABCDEFGHJIKLMNOPQRSTUVWXYZ"
const lowercase = "abcdefghijklmnopqrstuvwxyz"
const numbers = [1,2,3,4,5,6,7,8,9,0]
const specialSymbols = `~!@#$%^&*()-_=+[{]}\|;:'",<.>/?`
const allChars = uppercase+lowercase+numbers+specialSymbols;

const displayBox = document.querySelector(".display");
const GenerateButton = document.querySelector('.generateBtn');
const copyBtn = document.querySelector('.copy');
const copyText = document.querySelector('.copy p');

copyBtn.addEventListener('click',(e)=>{
    copy();
})
GenerateButton.addEventListener('click',(e)=>{
    displayPassword();
})
function copy(){
    let pass = displayBox.value;
    if(pass==""){
        // alert("No password");
    }
    else{
        navigator.clipboard.writeText(pass);
        // alert("Password Copied");
        copyBtn.setAttribute('src',"Images/copied-blue.png");
        copyText.innerText = "Copied";

    }
}
function displayPassword(){
    copyBtn.setAttribute('src',"Images/copy-blue.png");
    copyText.innerText = "Copy";
    displayBox.value = generateRandomPassword(16);

}
function generateRandomPassword(length){
    password = uppercase[Math.floor(Math.random()*uppercase.length)]
    password += lowercase[Math.floor(Math.random()*lowercase.length)]
    password += numbers[Math.floor(Math.random()*numbers.length)]
    password += specialSymbols[Math.floor(Math.random()*specialSymbols.length)];

    let i=4;
    while(i<length){
        password += allChars[Math.floor(Math.random()*allChars.length)]
        i++;
    }
    return password;
}