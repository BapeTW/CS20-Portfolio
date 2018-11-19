// Player 1 Functions
function initPlayer1() {
	player1 = {
		x: 200,
		y: 580,
		w: 20,
		h: 20,
		xSpeed: 5,
		ySpeed: 0,
		a: 1,
		col: BLUE
	};
}

function movePlayer1() {
	// Move Horizontally on Key is Down
	if (keyIsDown(LEFT_ARROW)) {
		player1.x += -player1.xSpeed;
	} else if (keyIsDown(RIGHT_ARROW)) {
		player1.x += player1.xSpeed;
	}
	
	// Move Vertically - Gravity
	player1.y += player1.ySpeed; // Move Vertically
	player1.ySpeed += player1.a; // Apply Gravity
	if (player1.y + player1.h > height) {
		// Land on Ground
		player1.y = height - player1.h;
	}
}

function drawPlayer1() {
	// Draw Player
	noStroke();
	fill(player1.col);
	rect(player1.x, player1.y, player1.w, player1.h);
}

function jumpPlayer1() {
	// Jump on UP_ARROW
	if (keyCode == UP_ARROW) {
		player1.ySpeed = -20;
	}
}