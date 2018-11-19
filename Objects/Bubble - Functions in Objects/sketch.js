// BUBBLE - Functions in Objects

// Declare Global Variables
let bubble;

// SETUP FUNCTION - Runs once at beginning of program
function setup() {
	createCanvas(800, 600);

	// Initialize Global Variables
	initBubble();
}

// DRAW FUNCTION - Loops @ 60FPS by default
function draw() {
	// LOGIC
	bubble.move();
	// DRAW
	background(0);
	bubble.show();
	
}
