// TOP DOWN PLAYER

// Declare Global Variables
let player1, player2;
var gameState = "start"

// SETUP FUNCTION - Runs once at beginning of program
function setup() {
	createCanvas(800, 600);

	// Initialize Global Variables
	game = new Game;
}

// DRAW FUNCTION - Loops @ 60FPS by default
function draw() {
	if (gameState == "start") {
		drawStartScreen();
	} else if (gameState == "gameOn") {
		background(140, 197, 66);
		game.moveGameObjects();
		game.drawGameObjects();
		game.checkCollision();
	} else if (gameState == "gameOverP1") {
		drawGameOverP1();
	} else if (gameState == "gameOverP2") {
		drawGameOverP2();
	}
}

function keyPressed() {
	game.player1.teleport();
	game.player2.teleport();
}

function mousePressed() {
	if (gameState == "start") {
		gameState = "gameOn";
	} else if (gameState == "gameOverP1" || gameState == "gameOverP2") {
		setup();
		gameState = "start";
	}
}