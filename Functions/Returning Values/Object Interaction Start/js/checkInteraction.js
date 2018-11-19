// Control Click & Collision Detection

function checkClicked() {
	// Check if any colored shapes have been clicked.  
	// Set the bgColor to the color of the shape that is clicked or white if no shape clicked.
	if (circleClicked(greenCircle)) {
		bgColor = "green";
	} else if (circleClicked(orangeCircle)) {
		bgColor = "orange";
	} else if (rectClicked(redRect)) {
		bgColor = "red";
	} else if (rectClicked(blueRect)) {
		bgColor = "blue";
	} else {
		bgColor = "white";
	}
}

function checkCollision() {
	// Check if Moving Grey Circle collides with colored circles.
	// Set the color of the grey circle to the color of the circle 
	// it collides with, or white if no collision.
	if (circleIntersect(greyCircle, greenCircle)) {
		greyCircle.col = "green";
	} else if (circleIntersect(greyCircle, orangeCircle)) {
		greyCircle.col = "orange";
	} else {
		greyCircle.col = "grey";
	}
	
	// Check if Moving Grey Square collides with colored rectangles.
	// Set the color of the grey square to the color of the rectangle 
	// it collides with, or white if no collision.
	if (rectIntersect(greySquare, redRect)) {
		greySquare.col = "red";
	} else if (rectIntersect(greySquare, blueRect)) {
		greySquare.col = "blue";
	} else {
		greySquare.col = "grey";
	}
}