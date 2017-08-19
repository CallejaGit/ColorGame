var r;
var g;
var b;
var correctRGB;
// 0 for easy, 1 for hard
var setting = 1;

// node list
var rgb = document.querySelectorAll(".rgb");
var box = document.querySelectorAll(".box");
var easyOption = document.querySelectorAll(".easy")[0];
var hardOption = document.querySelectorAll(".hard")[0];
var hardSection = document.querySelectorAll(".hardSection")[0];
var newColours = document.querySelectorAll(".newColours")[0];
var title = document.querySelector(".title");

setUp();
setUpListeners();

function setUp() {
	r = getRandomColor();
	g = getRandomColor();
	b = getRandomColor();
	correctRGB =  "rgb(" + r +", " + g + ", " + b + ")";
	rgb[0].innerText = r +"," + g + "," + b;


	title.style.backgroundColor = "#3862a5";
	// title.style.border ="10px solid #3862a5";

	// fills the all boxes with random color
	for (i=0; i < box.length; i++) {
		var r = getRandomColor();
		var g = getRandomColor();
		var b = getRandomColor();
		box[i].style.background = "rgb(" + r +", " + g + ", " + b + ")";
		box[i].style.opacity = 1;
	}
	// Selects a correct box to be correct
	var select =  Math.floor(Math.random() * (2 - 0 + 1)) + 0;
	box[select].style.background = correctRGB;
}


function setUpListeners() {
	// Adds an EventListener
	for (i=0; i < box.length; i++) {
		box[i].addEventListener("click", function(){
			correct(this);
		});
	}

	// Adds an EventListener to options 
	easyOption.addEventListener("click", function() {
		if (setting != 0) {
			setUp();
			hardSection.style.display = "none";
			setting=0;
		}
	});
	hardOption.addEventListener("click", function() {
		console.log("adsfa");
		if (setting != 1) {
			setUp();
			hardSection.style.display = "";
			setting=1;
		}
	});
	newColours.addEventListener("click", function() {
		setUp();
	})
}


//---------------HELPER FUNCTIONS------------------

/*
 * Determine if this box is correct
 */
 function correct(curr_box) {
 	console.log(curr_box.style.background);
 	if (curr_box.style.background === correctRGB) {
 		console.log("yipee");
 		// change the background colour to correctRGB
 		title.style.backgroundColor = correctRGB;
 		title.style.border = "10px solid " + correctRGB;

 		// Make the boxes opaque and with correctRGB
 		for (i=0; i < box.length; i++) {
			box[i].style.background = correctRGB;
			box[i].style.opacity = 1;
		}
 	} else {
 		//Fade out
 		fadeOut(curr_box);
 	}
 }

// Generates Random Color
function getRandomColor() {
    return Math.floor(Math.random() * (255 - 0 + 1)) + 0;
}

/*
 * Fades a box out
 */
 function fadeOut(element) {
    var timer = setInterval(function () {
        if (element.style.opacity <= 0.0001){
            clearInterval(timer);
            element.style.opacity = 0;
        }
        element.style.opacity -= 0.01;
    }, 1);
}