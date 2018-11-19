// RANDOM SHAPES FUNCTIONS

function initRandomShapes() {
	greenCircle = {
		x: random(100, width - 100),
		y: random(100, height - 100),
		r: random(10, 30),
		col: "green"
	}
	
	orangeCircle = {
		x: random(100, width - 100),
		y: random(100, height - 100),
		r: random(10, 30),
		col: "orange"
	}
	
	redRect = {
		x: random(100, width - 100),
		y: random(100, height - 100),
		w: random(20, 60),
		h: random(20, 60),
		col: "red"
	}
	
	blueRect = {
		x: random(100, width - 100),
		y: random(100, height - 100),
		w: random(20, 60),
		h: random(20, 60),
		col: "blue"
	}
}

function drawRandomShapes() {
	// Draw Random Green Circle
	fill(greenCircle.col);
	ellipse(greenCircle.x, greenCircle.y, 2 * greenCircle.r);
	
	// Draw Random Orange Circle
	fill(orangeCircle.col);
	ellipse(orangeCircle.x, orangeCircle.y, 2 * orangeCircle.r);
	
	// Draw Random Red Rectange
	fill(redRect.col);
	rect(redRect.x, redRect.y, redRect.w, redRect.h);
	
	// Draw Random Blue Rectange
	fill(blueRect.col);
	rect(blueRect.x, blueRect.y, blueRect.w, blueRect.h);
}

function teleportRandomShapes() {
	// Teleport Random Green Circle
	greenCircle.x = random(100, width - 100);
	greenCircle.y = random(100, height - 100);
	
	// Teleport Random Orange Circle
	orangeCircle.x = random(100, width - 100);
	orangeCircle.y = random(100, height - 100);
	
	// Teleport Random Red Rectangle
	redRect.x = random(100, width - 100);
	redRect.y = random(100, height - 100);
	
	// Teleport Random Blue Rectangle
	blueRect.x = random(100, width - 100);
	blueRect.y = random(100, height - 100);
}