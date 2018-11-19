// Player 1 Functions
function initPlayer1() {
	player1 = {
		// Properties (State)
		x: 200,
		y: 580,
		w: 20,
		h: 20,
		xSpeed: 5,
		ySpeed: 0,
		a: 1,
		col: BLUE,
		// Methods (Behaviour)
		move: function () {
			// Move Horizontally on Key is Down
			if (keyIsDown(LEFT_ARROW)) {
				this.x += -this.xSpeed;
			} else if (keyIsDown(RIGHT_ARROW)) {
				this.x += this.xSpeed;
			}

			// Move Vertically - Gravity
			this.y += this.ySpeed; // Move Vertically
			this.ySpeed += this.a; // Apply Gravity
			if (this.y + this.h > height) {
				// Land on Ground
				this.y = height - this.h;
			}
		},
		show: function () {
			// Draw Player
			noStroke();
			fill(this.col);
			rect(this.x, this.y, this.w, this.h);
		},
		jump: function () {
			// Jump on UP_ARROW
			if (this.y == 580 || this.y == platform.y) {
				if (keyCode == UP_ARROW) {
					this.ySpeed = -20;
				}
			}
		}
	};
}