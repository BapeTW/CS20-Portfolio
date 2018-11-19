// PLATFORMER - OOP Design

// Declare Global Variables
let game;

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
	game = new Game();
}

// DRAW FUNCTION - Loops @ 60FPS by default
function draw() {
	// LOGIC
	game.moveGameObjects();
	game.checkCollision();
	
	// DRAW
    background(GREEN);
	game.drawGameObjects();
}

// EVENT FUNCTIONS
function keyPressed() {
	game.playerJump();
}
