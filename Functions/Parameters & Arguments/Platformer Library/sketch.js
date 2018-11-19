// PLATFORMER LIBRARY

// Declare Global Variables
let player1;

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
}

// DRAW FUNCTION - Loops @ 60FPS by default
function draw() {
	// LOGIC
	movePlayer1();
	
	// DRAW
    background(GREEN);
	drawPlayer1();

	platform(200, 300, 150, 20, GREY, RED);
	platform(400, 500, 220, 20, GREY, ORANGE);
	platform(550, 300, 150, 20, GREY, BLUE);
	platform(200, 500, 100, 20, GREY, BROWN);

	powerUp(560, 480, "?");
	spike(260, 300, GREY);
	itemBox(220, 480, GREY, ORANGE);
	door(480, 460, BLUE);
	door(560, 260, RED);
	bridge(360, 310, 10, GREY);
	spikeStrip(300, 520, 5, GREY);
}

// EVENT FUNCTIONS
function keyPressed() {
	jumpPlayer1();
}
