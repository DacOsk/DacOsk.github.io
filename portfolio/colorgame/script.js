var numSquares;
var colors = [];
var pickedColor;
var h1 = document.querySelector("h1");
var display = document.querySelector("#message");
var squares = document.querySelectorAll(".square");
var colorDisplay = document.querySelector("#colorDisplay");
var resetButton = document.querySelector("#reset");
var mode = document.querySelectorAll(".gameMode");

init();

function init() {
  numSquares = 6;
  modeSelector()
  resetButton.addEventListener("click", () => { reset(); });
  reset();
}

function modeSelector() {
  for (var i = 0; i < mode.length; i++) {
    mode[i].addEventListener("click", function () {
      modeReset();
      this.classList.add("selected");
      switch (this.textContent) {
        case "Easy":
          numSquares = 3;
          break;
        case "Medium":
          numSquares = 6;
          break;
        case "Hard":
          numSquares = 9;
          break;
      }
      reset();
    });
  }
}

function modeReset() {
  for (var i = 0; i < mode.length; i++) {
    mode[i].classList.remove("selected");
  }
}

function fillSquares() {
  for (var i = 0; i < squares.length; i++) {
    if (colors[i]) {
      squares[i].style.display = "block";
      squares[i].style.backgroundColor = colors[i];
    } else {
      squares[i].style.display = "none";
    }
    squares[i].addEventListener("click", function() {
      var clickedColor = this.style.backgroundColor;
      if (clickedColor === pickedColor) {
        display.textContent = "CORRECT!";
        changeColors(clickedColor);
        resetButton.textContent = "Play Again?";
      } else {
        this.style.backgroundColor = "#232323";
        display.textContent = "Try Again!";
      }
    });
  }
}

function changeColors(color) {
  for (var i = 0; i < squares.length; i++) {
    squares[i].style.backgroundColor = color;
    h1.style.backgroundColor = color;
  }
}

function pickColor() {
  var random = Math.floor(Math.random() * colors.length);
  return colors[random];
}

function generateRandomColors() {
  var arr = [];
  for (var i = 0; i < numSquares; i++) {
    arr.push(randomColor());
  }
  return arr;
}

function randomColor() {
  var r = Math.floor(Math.random() * 256);
  var g = Math.floor(Math.random() * 256);
  var b = Math.floor(Math.random() * 256);
  return "rgb(" + r + ", " + g + ", " + b + ")";
}

function reset() {
  resetButton.textContent = "New Colors";
  display.textContent = "";
  h1.style.backgroundColor = "rgb(100, 100, 255)";
  colors = generateRandomColors();
  pickedColor = pickColor();
  colorDisplay.textContent = pickedColor;
  fillSquares();
}