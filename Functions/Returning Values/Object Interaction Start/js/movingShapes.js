// MOVING SHAPES FUNCTIONS

function initMovingShapes() {
	greyCircle = {
		x: width / 4,
		y: height / 2,
		r: 20,
		col: "grey",
		speed: 2
	};

	greySquare = {
		x: width * 3 / 4,
		y: height / 2,
		w: 40,
		h: 40,
		col: "grey",
		speed: 2
	}
}

function moveShapes() {
	// Circle Movement (WASD)
	if (keyIsDown(65)) { // A (left)
		greyCircle.x += -greyCircle.speed;
	} else if (keyIsDown(68)) { // D (right)
		greyCircle.x += greyCircle.speed;
	} 
	if (keyIsDown(87)) { // W (up)
		greyCircle.y += -greyCircle.speed;
	} else if (keyIsDown(83)) { // S (down)
		greyCircle.y += greyCircle.speed;
	}
	
	// Square Movement (ARROWS)
	if (keyIsDown(LEFT_ARROW)) {
		greySquare.x += -greySquare.speed;
	} else if (keyIsDown(RIGHT_ARROW)) {
		greySquare.x += greySquare.speed;
	} 
	if (keyIsDown(UP_ARROW)) {
		greySquare.y += -greySquare.speed;
	} else if (keyIsDown(DOWN_ARROW)) {
		greySquare.y += greySquare.speed;
	}

}

function drawMovingShapes() {
	// Draw Circle
	fill(greyCircle.col);
	ellipse(greyCircle.x, greyCircle.y, 2 * greyCircle.r);
	
	// Draw Square
	fill(greySquare.col);
	rect(greySquare.x, greySquare.y, greySquare.w, greySquare.h);
}
