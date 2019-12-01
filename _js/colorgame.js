var colors = [];
var squares = document.getElementsByClassName("square");
var pickedColor;
var colorDisplay = document.getElementById("upColor");
var verify = document.querySelector("#verify");
var h1 = document.querySelector("h1");
var button = document.querySelector("#newColors");
var eButton = document.querySelector("#easy");
var hButton = document.querySelector("#hard");

gameStart(6);

button.addEventListener("click", function(){
	if(eButton.classList.contains("selected")){
		gameStart(3);
	} else {
		gameStart(6);
	}
});

eButton.addEventListener("click", function(){
	gameStart(3);
	eButton.classList.add("selected");
	hButton.classList.remove("selected");
});
hButton.addEventListener("click", function(){
	gameStart(6);
	eButton.classList.remove("selected");
	hButton.classList.add("selected");
});

function gameStart(num){
	colors = randomColors(num);
	pickedColor = colors[Math.floor(Math.random() * num)];
	colorDisplay.textContent = pickedColor;
	h1.style.backgroundColor = "steelblue";
	verify.textContent = "";
	button.textContent = "New Colors";
	for(var i = 0; i < squares.length; i++){
		if(colors[i]){
			squares[i].style.backgroundColor = colors[i];
			squares[i].addEventListener("click", function(){
				if(pickedColor === this.style.backgroundColor){
					verify.textContent = "correct!";
					win(this.style.backgroundColor);
					h1.style.backgroundColor = pickedColor;
					button.textContent = "Play Again?";
				} else {
					verify.textContent = "Try again.";
					this.style.backgroundColor = "#232323";
				}
			});
		} else {
			squares[i].style.display = "none";
		}
	}
	if(colors.length > 3){
		for(var i = 3; i < squares.length; i++){
			squares[i].style.display = "block";
		}
	}
}

function win(color){
	for(var i = 0; i < squares.length; i++){
		squares[i].style.backgroundColor = color;
	}
}

function randomColors(num){
	var arr = []
	for(var i = 0; i < num; i++){
		var r = Math.floor(Math.random() * 256);
		var g = Math.floor(Math.random() * 256);
		var b = Math.floor(Math.random() * 256);
		arr.push("rgb(" + r + ", " + g + ", " + b + ")"); 
	}
	return arr;
}

