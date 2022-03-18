// Color selecting for the favorite colore range
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
// counter code
var counterVal = 0;

function btnPressed() {
  updateDisplay(++counterVal);
}
function updateDisplay(val) {
  document.getElementById("count").innerHTML = val;
}

// i want it to make sure that the favorite food is filled bfore showing message.
function validateForm() {
  let x = document.forms["food"]["favfood"].value;
  if (x == "") {
    alert("Favorite Food Must be filled out");
    return false;
  }
  if (x !== "") {
    alert("That's my favorite as well!");
  }
}

//code for the slider

var responsiveSlider = function () {
  var slider = document.getElementById("slider");
  var sliderWidth = slider.offsetWidth;
  var slideList = document.getElementById("slideWrap");
  var count = 1;
  var items = slideList.querySelectorAll("li").length;
  var prev = document.getElementById("prev");
  var next = document.getElementById("next");

  window.addEventListener("resize", function () {
    sliderWidth = slider.offsetWidth;
  });
  var nextSlide = function () {
    if (count < items) {
      slideList.style.left = "-" + count * sliderWidth + "px";
      count++;
    } else if ((count = items)) {
      slideList.style.left = "0px";
      count = 1;
    }
  };
  var prevSlide = function () {
    if (count > 1) {
      count = count - 2;
      slideList.style.left = "-" + count * sliderWidth + "px";
      count++;
    } else if ((count = 1)) {
      count = items - 1;
      slideList.style.left = "-" + count * sliderWidth + "px";
      count++;
    }
  };

  next.addEventListener("click", function () {
    nextSlide();
  });
  prev.addEventListener("click", function () {
    prevSlide();
  });
  setInterval(function () {
    nextSlide();
  }, 4000);
};

window.onload = function () {
  responsiveSlider();
};
