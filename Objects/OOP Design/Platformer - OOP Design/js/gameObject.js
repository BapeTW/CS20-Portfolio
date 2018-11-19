// Main Game Program Object
class Game {
	//Properties (State)
	constructor() {
		this.player1 = new JumpingPlayer(200, 580, BLUE, 65, 68, 87);
		this.player2 = new JumpingPlayer(600, 580, RED, 37, 39, 38);

		this.platform1 = new Platform(400, 450, 200);
		this.platform2 = new Platform(200, 300, 150);
		this.platform3 = new Platform(500, 200, 250);
	}

	//Methods (Behviour)
	moveGameObjects() {
		this.player1.move();
		this.player2.move();

		this.platform1.move();
		this.platform2.move();
		this.platform3.move();
	}

	drawGameObjects() {
		this.player1.show();
		this.player2.show();

		this.platform1.show();
		this.platform2.show();
		this.platform3.show();
	}

	playerJump() {
		this.player1.jump();
		this.player2.jump();
	}

	checkCollision() {
		this.platformCollision(this.player1);
		this.platformCollision(this.player2);
	}
}

function checkPlatformCollision(aPlayer) {
	// Check Player
	if (rectIntersect(aPlayer, platform1) && aPlayer.ySpeed > 0) {
		platform1.topCol = aPlayer.col;
		aPlayer.y = platform1.y - aPlayer.h;
		aPlayer.ySpeed = 0;
	} else if (rectIntersect(aPlayer, platform2) && aPlayer.ySpeed > 0) {
		platform2.topCol = aPlayer.col;
		aPlayer.y = platform2.y - aPlayer.h;
		aPlayer.ySpeed = 0;
	} else if (rectIntersect(aPlayer, platform3) && aPlayer.ySpeed > 0) {
		platform3.topCol = aPlayer.col;
		aPlayer.y = platform3.y - aPlayer.h;
		aPlayer.ySpeed = 0;
	}
}