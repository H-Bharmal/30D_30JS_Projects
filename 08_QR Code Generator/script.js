const qrImage = document.querySelector('#qrImage');
const inputText = document.getElementById('input-text');
const generateButton = document.getElementById('generateBtn');
const qrDisplay = document.querySelector('.display');
const leftClass = document.querySelector('.left');
const copyButton = document.getElementById('copyBtn');
const downloadButton = document.getElementById('downloadBtn');

function generateQR(){
    input = inputText.value ;
    console.log(input);
    if(input == ''){
        return ;
    }
    else{
        // const fs= require('fs');
        // const imageData = fs.readFileSync(`https://api.qrserver.com/v1/create-qr-code/?size=150x150&data=${input}`);
        // Convert to base64
        // const base64Image = imageData.toString('base64');
        // qrImage.src = "data:image/png;base64," + base64ImageString;

        qrImage.setAttribute('src',`https://api.qrserver.com/v1/create-qr-code/?size=150x150&data=${input}`);
        if(qrDisplay.style.display !== 'flex'){
            qrDisplay.style.display = 'flex' ;
        }
    }

}

generateButton.addEventListener('click',()=>{
    generateQR();
});

// function copy(e){
//     const canvas = document.createElement('canvas');
//     canvas.width = qrImage.width;
//     canvas.height = qrImage.height;

//     canvas.getContext('2d').drawImage(qrImage, 0,0,qrImage.width, qrImage.height);

//     canvas.toBlob((blob)=>{
//         navigator.clipboard.write([new ClipboardItem({"image/png":blob})]);
//     }, 'image/png');

//     copyButton.setAttribute('src','/images/copied.png');
// }

// copyButton.addEventListener('click',(e)=>{copy(e);});