// OBJECT INTERACTION TESTER

// Declare Global Variables
let greyCircle, movingSquare;
let greenCircle, orangeCircle, redRect, blueRect;
let bgColor;

// SETUP FUNCTION - Runs once at beginning of program
function setup() {
	let cnv = createCanvas(600, 400);
	cnv.parent("cnvContainer");
	noStroke();
	
	// Initialize Global Variables
	bgColor = "white";
	initMovingShapes();
	initRandomShapes();
}

// DRAW FUNCTION - Loops @ 60FPS by default
function draw() {
  	// LOGIC
	moveShapes();
	checkCollision();

	// DRAW
	background(bgColor);
	
	// Draw Player 1
	drawMovingShapes();
	drawRandomShapes();
}

// EVENT FUNCTIONS
function keyPressed() {
	if (keyCode == 32) {
		teleportRandomShapes();
	}
}

function mousePressed() {
	checkClicked();
}
