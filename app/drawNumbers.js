const lowerValueElement = document.getElementById("lower-value");
const higherValueElement = document.getElementById("higher-value");
const lowerValue = 1;
const higherValue = 1000;
const secretNumber = drawNumber();

lowerValueElement.textContent = lowerValue;
higherValueElement.textContent = higherValue;

function drawNumber() {
  return parseInt(Math.random() * higherValue + 1);
}

console.log(secretNumber);
