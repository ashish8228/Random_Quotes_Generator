const quotes = [
    "The only limit to our realization of tomorrow is our doubts of today. – Franklin D. Roosevelt",
    "Believe you can and you're halfway there. – Theodore Roosevelt",
    "Success is not the key to happiness. Happiness is the key to success. – Albert Schweitzer",
    "The future belongs to those who believe in the beauty of their dreams. – Eleanor Roosevelt",
    "Don't watch the clock; do what it does. Keep going. – Sam Levenson",
    "Hardships often prepare ordinary people for an extraordinary destiny. – C.S. Lewis",
    "You are never too old to set another goal or to dream a new dream. – C.S. Lewis",
    "The harder you work for something, the greater you'll feel when you achieve it. – Anonymous",
    "Success doesn't come from what you do occasionally. It comes from what you do consistently. – Marie Forleo",
    "Your limitation—it's only your imagination. – Anonymous",
    "Push yourself, because no one else is going to do it for you. – Anonymous",
    "Great things never come from comfort zones. – Anonymous",
    "Dream it. Wish it. Do it. – Anonymous",
    "Success is not the key to happiness. Happiness is the key to success. – Albert Schweitzer",
    "Believe in yourself and all that you are. Know that there is something inside you that is greater than any obstacle. – Christian D. Larson",
    "Don't stop when you're tired. Stop when you're done. – Marilyn Monroe",
    "Wake up with determination. Go to bed with satisfaction. – Anonymous",
    "Do something today that your future self will thank you for. – Sean Patrick Flanery",
    "Little things make big days. – Anonymous",
    "It’s going to be hard, but hard does not mean impossible. – Anonymous"
];

const quoteElement = document.getElementById('quote');

function displayQuote() {
    index = Math.floor(Math.random()*quotes.length);
    quoteElement.textContent = quotes[index];    
}

setInterval(displayQuote, 3000);

// Initial display
// displayQuote();

const body = document.body;
const colors = [ "#FFADAD", "#FFD6A5", "#FDFFB6", "#CAFFBF", "#9BF6FF", "#A0C4FF", "#BDB2FF", "#FFC6FF", "#FFAFCC", "#D0F4DE", "#FFE5D9", "#F0EFEB", "#BCCEF8", "#A6C9E2", "#C9F4FF", "#FFABAB", "#F7C1C4", "#D7BEA8", "#F2D388", "#C1E7E3" ];

function displaycolors(){
    clr = Math.floor(Math.random()*colors.length);
    body.style.backgroundColor = colors[clr]
}

setInterval(displaycolors, 3000);