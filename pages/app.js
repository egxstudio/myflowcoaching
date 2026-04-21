const photoEl = document.getElementById("photo");
const quoteEl = document.getElementById("quote");
const btn = document.getElementById("btn");

// 🔹 Fetch random dog photo
async function fetchPhoto() {
  const res = await fetch("https://dog.ceo/api/breeds/image/random");
  const data = await res.json();
  return data.message;
}
async function showPhoto() {
  try {
    const photo = await fetchPhoto();
    photoEl.src = photo;
  } catch (err) {
    console.error(err);
    photoEl.src = "./assets/images/dog.jpg";
  }
}
showPhoto();

// 🔹 Fetch random quote
async function fetchQuote() {
  const res = await fetch("quotes.json");
  const quotes = await res.json();
  const random = quotes[Math.floor(Math.random() * quotes.length)];
  return `${random.text} - ${random.author}`;
}
async function showQuote() {
  try {
    const quote = await fetchQuote();
    quoteEl.textContent = quote;
    // console.log(quote);
  } catch (err) {
    console.error(err);
    quoteEl.textContent = "Something went wrong. Try again 💔";
  }
}
showQuote();
async function loadBoth() {
  try {
    const [quote, photo] = await Promise.all([fetchQuote(), fetchPhoto()]);
    photoEl.src = photo;
    quoteEl.textContent = quote;
  } catch (err) {
    console.error(err);
    quoteEl.textContent = "Something went wrong. Try again 💔";
  }
}
btn.addEventListener("click", loadBoth);
