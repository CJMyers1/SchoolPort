// Button Click Funtions
var counterVal = 0;

function btnPressed() {
  updateDisplay(++counterVal);
}

function updateDisplay(val) {
  document.getElementById("clicks").innerHTML = val;
}

// Background color change funtions
function changeColor() {
  let red = document.getElementById("rangeRed").value;
  let green = document.getElementById("rangeGreen").value;
  let blue = document.getElementById("rangeBlue").value;
  let color = "rgb(" + red + "," + green + "," + blue + ")";
  document.body.style.backgroundColor = color;
  document.getElementById("colorOutput").innerHTML = ": " + color;
}

document.getElementById("rangeRed").addEventListener("input", changeColor);
document.getElementById("rangeGreen").addEventListener("input", changeColor);
document.getElementById("rangeBlue").addEventListener("input", changeColor);
