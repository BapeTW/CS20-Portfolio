class TopDownPlayer {
	//Properties
	constructor(x, y, col, uk, dk, lk, rk, telek) {
		this.x = x;
		this.y = y;
		this.r = 15;
		this.speed = 5;
		this.col = col;
		this.upKey = uk;
		this.downKey = dk;
		this.leftKey = lk;
		this.rightKey = rk;
		this.teleKey = telek;
	}
	//Methods

	move() {
		if (keyIsDown(this.leftKey) && this.x > 0 + this.r) {
			this.x += -this.speed;
		} else if (keyIsDown(this.rightKey) && this.x < width - this.r) {
			this.x += this.speed;
		} else if (keyIsDown(this.upKey) && this.y > 0 + this.r) {
			this.y += -this.speed;
		} else if (keyIsDown(this.downKey) && this.y < height - this.r) {
			this.y += this.speed;
		}
	}

	show() {
		fill(this.col);
		noStroke();
		ellipse(this.x, this.y, 2 * this.r);
	}

	teleport() {
		if (keyCode == this.teleKey) {
			this.x = Math.random() * 750 + this.r;
			this.y = Math.random() * 550 + this.r;
		}
	}
}

class BouncingCircle {
	//Properties
	constructor(y) {
		this.x = width / 2;
		this.y = y;
		this.r = random(7, 38);
		this.xSpeed = random(-6, 6);
		this.ySpeed = random(-6, 6);
		this.col = 140;
	}
	//Methods
	show() {
		fill(this.col);
		stroke(0);
		ellipse(this.x, this.y, 2 * this.r);
	}

	bounce() {
		this.x += this.xSpeed;
		this.y += this.ySpeed;
		if (this.x + this.r > width || this.x - this.r < 0) {
			this.xSpeed = -this.xSpeed;
		}

		if (this.y + this.r > height || this.y - this.r < 0) {
			this.ySpeed = -this.ySpeed;
		}
	}
}