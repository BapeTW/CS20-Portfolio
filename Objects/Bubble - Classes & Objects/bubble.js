// CODE FOR A BUBBLE OBJECT

//Bubble Class - Factory or Blueprint to build Bubble Object
class Bubble {
	// Properties (State)
	constructor(x, y, r) {
		// Runs once when a Bubble object is created
		this.x = x;
		this.y = y;
		this.r = r;
	}

	// Methods (Behviour)
	move () {
		// Move Bubble Randomly
		this.x += random(-1, 1);
		this.y += random(-1, 1);
	}

	show () {
		// Draw Bubble
		noFill();
		stroke(255, 180);
		strokeWeight(3);
		ellipse(this.x, this.y, 2 * this.r);
	}

}