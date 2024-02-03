const quote = document.getElementById('quote');
const author = document.getElementById('author');
const newQuoteBtn = document.getElementById('newQuote');
const tweetBtn = document.getElementById('tweetBtn');
// const apiUrl = "https://zenquotes.io/api/random";
// const apiUrl = "https://api.quotable.io/random";
const apiUrl = "https://api.quotable.io/random?maxLength=53";
async function generateQuote(){
    // fetch(apiUrl)
    // .then(function(response){
    //     quote.innerText = response.q;
    //     author.innerText = response.a;
    // })
    
    const response =await fetch(apiUrl);
    const data = await response.json(); 
    quote.innerText = data.content;
    author.innerText = data.author;
    
}
generateQuote();

newQuoteBtn.addEventListener('click',(e)=>{
    generateQuote();
})

function tweet(){
    window.open(`https://twitter.com/intent/tweet?text=${quote.innerText} ---By ${author.innerText}`,'Tweet Your Quote','width=500 ,height=600');
}
tweetBtn.addEventListener('click',(e)=>{
    tweet();
})