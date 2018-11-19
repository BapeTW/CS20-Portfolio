// CODE FOR A BUBBLE OBJECT

// Bubble Class - Factory or Blueprint to build Bubble Objects
class Bubble {
	// Properties (State)
	constructor(x) {
		// Runs once when a Bubble object is created
		this.x = x;
		this.y = 300;
		this.r = random(10, 50);
	}

	// Methods (Behaviour)
	move() {
		// Move Bubble Randomly
		this.x += random(-1, 1);
		this.y += random(-1, 1);
	}

	show() {
		// Draw Bubble
		noFill();
		stroke(255, 180);
		strokeWeight(3);
		ellipse(this.x, this.y, 2 * this.r);
	}

	clicked() {
		let d = dist(mouseX, mouseY, this.x, this.y);
		if (d < this.r) {
			this.r = random(10, 50);
		}
	}
}