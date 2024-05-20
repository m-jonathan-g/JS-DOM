// variables

let btn = document.querySelector('#new-quote');
let quote = document.querySelector('.quote');
let person = document.querySelector('.person')

const quotes = [{
    quote: `" Life is like riding a bicycle. To keep your balance, you must keep moving."`,
    person: `Albert Einstein`
}, {
    quote: `"All the worlds a stage, and all the men and women merely players."`,
    person: `William Shakespeare`
}, {
    quote: `"Genius is one percent inspiration and ninety-nine percent perspiration."`,
    person: `Thomas Edison`
}, {
    quote: `"Power corrupts; absolute power corrupts absolutely."`,
    person: `John Dalberg-Acton`
}];

btn.addEventListener("click", function(){

    let random = Math.floor(Math.random() * quotes.length);

    quote.innerText = quotes[random].quote;
    person.innerText = quotes[random].person
})
