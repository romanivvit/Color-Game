var numSquares = 6;
var colors = generateRandomColors(numSquares);
var h1 = document.querySelector("h1");
var squares = document.querySelectorAll(".square");
var pickedColor = pickingColor();
var colorDisplay = document.getElementById("colorDisplay");
var messageDisplay = document.getElementById("message");
colorDisplay.textContent = pickedColor;
var resetButton = document.getElementById("reset");
var easyBtn = document.querySelector("#easyBtn");
var hardBtn = document.querySelector("#hardBtn");
for(var i = 0; i < squares.length; i++){
	// add initial colors to squares
	squares[i].style.background  = colors[i];

	//add click listeners to squares
	squares[i].addEventListener("click", function() {
		//grab color of clicked squares
		var clickedColor = this.style.background;
		//compare color to pickedColor
		if(clickedColor === pickedColor) {
			messageDisplay.textContent = "Correct";
			changeColor(clickedColor);
			resetButton.textContent = "Play Again?"; 
			h1.style.background = clickedColor;
		} else {
			this.style.background = "#232323";
			messageDisplay.textContent = "Try again";
		}
	});
}
function changeColor(color){
	for(var i = 0; i < squares.length; i++){
		squares[i].style.background = color;
	}
};
function pickingColor(){
	var random = Math.floor(Math.random() * colors.length);
	return colors[random];
};
function generateRandomColors(num){
var arr = [];
for(var i = 0; i < num; i++){
 arr.push(randomColor()); 
}
return arr;
};
function randomColor(){
	var r = Math.floor(Math.random() * 256);
	var g = Math.floor(Math.random() * 256);
	var b = Math.floor(Math.random() * 256);
	return "rgb(" + r + ", " + g + ", " + b + ")";
}

resetButton.addEventListener("click", function(){
	//generate all new colors
	colors = generateRandomColors(numSquares);
	//pick a new random color from array
	pickedColor = pickingColor();
	//change colorDisplay to mach picked color
	colorDisplay.textContent = pickedColor;
	//change colors of squares
	this.textContent = "New Colors";
	messageDisplay.textContent = "";
	for(var i = 0; i < squares.length; i++){
		if(colors[i]){
			squares[i].style.background = colors[i];
		}else {
			squares[i].style.background = "none";
		}
	}
	h1.style.background = "steelblue";
});

easyBtn.addEventListener("click",function(){
	easyBtn.classList.add("selected");
	hardBtn.classList.remove("selected");
	numSquares = 3;
	colors = generateRandomColors(numSquares);
	pickedColor = pickingColor();
	colorDisplay.textContent = pickedColor;
	for(var i = 0; i <squares.length; i++){
		if(colors[i]){
			squares[i].style.background = colors[i];
		}else {
			squares[i].style.background = "none";
		}
	}
});
hardBtn.addEventListener("click",function(){
	easyBtn.classList.remove("selected");
	hardBtn.classList.add("selected");
	numSquares = 6;	
	colors = generateRandomColors(numSquares);
	pickedColor = pickingColor();
	colorDisplay.textContent = pickedColor;
	for(var i = 0; i <squares.length; i++){
		squares[i].style.background = colors[i];
		squares[i].style.background = "block";
	}
});