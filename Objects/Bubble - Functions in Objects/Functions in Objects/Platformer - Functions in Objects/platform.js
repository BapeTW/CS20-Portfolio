function initPlatform() {
	// Initialize a Platform Object
	platform = {
		// Properties (STATE)
		x: 400,
		y: 450,
		w: 200,
		h: 20,
		col: GREY,
		topCol: ORANGE,
		xSpeed: 5,
		// Methods (Behaviour)
		show: function () {
			noStroke();
			// Main Platform
			fill(this.col);
			rect(this.x, this.y, this.w, this.h);
			// Platform Top
			fill(this.topCol);
			rect(this.x, this.y, this.w, 2);
		},
		move: function() {
			// Move & Bounce Horiz.
			this.x += this.xSpeed;
			if (this.x + this.w > width || this.x < 0) {
				this.xSpeed = -this.xSpeed;
			}
		}
	};
}