const quotes = [
  {
    quote: "You will face many defeats in life, but never let yourself be defeated.",
    author: "Maya Angelou",
  },
  {
    quote:"The greatest glory in living lies not in never falling, but in rising every time we fall.",
    author:"Nelson Mandela",
  },
  {
    quote:"In the end, it's not the years in your life that count. It's the life in your years.",
    author:"Abraham Lincoln",
  },
  {
    quote:"Never let the fear of striking out keep you from playing the game.",
    author:"Babe Ruth",
  },
  {
    quote:"Life is either a daring adventure or nothing at all.",
    author:"Helen Keller",
  },
  {
    quote:"Life is a succession of lessons which must be lived to be understood.",
    author:"Ralph Waldo Emerson",
  },
  {
    quote:"If life were predictable it would cease to be life and be without flavor.",
    author:"Eleanor Roosevelt",
  },
  {
    quote:"Life is never fair, and perhaps it is a good thing for most of us that it is not.",
    author:"Oscar Wilde",
  },
  {
    quote:"The only impossible journey is the one you never begin.",
    author:"Tony Robbins",
  },
  {
    quote:"The purpose of our lives is to be happy.",
    author:"Dalai Lama",
  }
];

const quote = document.querySelector("#quote span:first-child");
const author = document.querySelector("#quote span:last-child");

const todaysQuote = quotes[Math.floor(Math.random() * quotes.length)];
quote.innerText = todaysQuote.quote;
author.innerText = todaysQuote.author;