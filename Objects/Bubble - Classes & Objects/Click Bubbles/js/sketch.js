// CLICK BUBBLES - Object Interaction

// Declare Global Variables
let bubble, bubble2, bubble3, bubble4;

// SETUP FUNCTION - Runs once at beginning of program
function setup() {
	createCanvas(800, 600);

	// Initialize Global Variables
	bubble1 = new Bubble(160);
	bubble2 = new Bubble(320);
	bubble3 = new Bubble(480);
	bubble4 = new Bubble(640);
}

// DRAW FUNCTION - Loops @ 60FPS by default
function draw() {
	// LOGIC
	bubble1.move();
	bubble2.move();
	bubble3.move();
	bubble4.move();

	// DRAW
	background(0);
	bubble1.show();
	bubble2.show();
	bubble3.show();
	bubble4.show();
}

// EVENT FUNCTIONS
function mousePressed() {
	bubble1.clicked();
	bubble2.clicked();
	bubble3.clicked();
	bubble4.clicked();
}