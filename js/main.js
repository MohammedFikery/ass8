var generateBtn = document.querySelector(".generate");
var autoBtn = document.querySelector(".auto");
var stopBtn = document.querySelector(".stop");
var quoteDiv = document.querySelector(".quote-display");
var quoteId = document.querySelector(".quote-id");
var autoStatus = document.querySelector(".auto-status");
var intervalId;

generateBtn.onclick = generateQuote;
autoBtn.onclick = startAutoPlay;
stopBtn.onclick = stopAutoPlay;

async function getQuotes() {
  const response = await fetch("quotes.json");
  const data = await response.json();
  return data;
}

async function generateQuote() {
  const quotes = await getQuotes();
  const quote = quotes[Math.floor(Math.random() * quotes.length)];
  quoteDiv.innerHTML = quote.text;
  quoteId.innerHTML = quote.id;
}

function startAutoPlay() {
  intervalId = setInterval(generateQuote, 2000);
  autoStatus.innerHTML = "Auto: ON";
}

function stopAutoPlay() {
  clearInterval(intervalId);
  autoStatus.innerHTML = "";
}
