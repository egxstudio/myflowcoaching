const product = {
  name: "Combat shirt",
  colors: ["Multicam", "Green", "Black", "Tan"],
  price: 120,
  discount: true,
  discountValue: 20,
  description: "variable",
  inStock: true,
};
const array = [
  ["viensA", "diviA", "trisA"],
  ["viensB", "diviB", "trisB", "cetriB"],
  ["viensC", "diviC", "trisC"],
];

let number = parseInt(prompt("enter max number"));
while (!number) {
  number = parseInt(prompt("enter a valid number"));
}
let random = Math.round(Math.random() * number);
let attempts = 0;
console.log(random);
let guess = parseInt(prompt("guess the number"));
while (guess != random) {
  attempts++;
  if (guess < random) {
    guess = parseInt(prompt(`Too LOW! attempts:${attempts}`));
  } else {
    guess = prompt(`Too HIGH! attempts:${attempts}`);
  }
}
alert(`YOU WON, ${guess}`);
