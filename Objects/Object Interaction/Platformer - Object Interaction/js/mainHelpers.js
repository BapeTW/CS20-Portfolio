function initGlobals() {
    player1 = new JumpingPlayer(200, 580, BLUE, 65, 68, 87);
	player2 = new JumpingPlayer(600, 580, RED, 37, 39, 38);
	
	platform = new Platform(400, 450, 200);
	platform2 = new Platform(200, 300, 150);
	platform3 = new Platform(500, 200, 250);
}

function moveGameObjects() {
    player1.move();
	player2.move();
	
	platform.move();
	platform2.move();
	platform3.move();
}

function drawGameObjects() {
    player1.show();
	player2.show();
	
	platform.show();
	platform2.show();
	platform3.show();
}

function checkPlatformCollision() {
    // Check Player 1
    if (rectIntersect(player1, platform1)) {
        platform1.col = player1.col;
    }
}