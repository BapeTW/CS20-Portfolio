// PLATFORMER LIBRARY

// Declare Global Variables
let player1, platform;

let GREY = 80;
let RED = "#bb2a27";
let GREEN = "#8cc542";
let BLUE = "#28a9e0";
let ORANGE = "#faaf3b";
let BROWN = "#aa6c39";

// SETUP FUNCTION - Runs once at beginning of program
function setup() {
    createCanvas(800, 600);
	
	// Initialize Global Variables
	initPlayer1();
	initPlatform();
}

// DRAW FUNCTION - Loops @ 60FPS by default
function draw() {
	// LOGIC
	player1.move();
	platform.move();
	
	// DRAW
    background(GREEN);
	player1.show();
	
	// Test Platform Library
	platform.show();
}

// EVENT FUNCTIONS
function keyPressed() {
	player1.jump();
}
