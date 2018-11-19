// Grapher Class
class Grapher {
	constructor(ptA, ptB, ptC, ptD) {
		// Properties (State)
		this.ptA = ptA;
		this.ptB = ptB;
		this.ptC = ptC;
		this.ptD = ptD;
		this.selected = null;
	}

	drawLine1(lineColor) {
		this.drawLine(this.ptA, this.ptB, lineColor);
	}

	drawLine2(lineColor) {
		this.drawLine(this.ptC, this.ptD, lineColor);
	}

	drawLine(ptObj1, ptObj2, lineColor) {
		// Convert point ordered paris to pixels
		var x1 = map(ptObj1.x, -10, 10, 0, width);
		var y1 = map(ptObj1.y, -10, 10, height, 0);
		var x2 = map(ptObj2.x, -10, 10, 0, width);
		var y2 = map(ptObj2.y, -10, 10, height, 0);

		// Draw Line
		stroke(lineColor);
		strokeWeight(4);
		line(x1, y1, x2, y2);

		// Draw point A & B
		noStroke();
		fill(0);
		textSize(24);
		ellipse(x1, y1, 12, 12);
		text(ptObj1.name, x1 - 8, y1 - 8);
		ellipse(x2, y2, 12, 12);
		text(ptObj2.name, x2 - 8, y2 - 8);
	}

	dragAndDrop() {
		if (this.selected !== null) {
			var tempX = Math.round(mouseX / 10) * 10;
			var tempY = Math.round(mouseY / 10) * 10;
			this.selected.x = map(tempX, 0, width, -10, 10);
			this.selected.y = map(tempY, 0, height, 10, -10);
		}
	}

	processMousePressed() {
		if (this.withinPoint(this.ptA)) {
			this.selected = this.ptA;
		} else if (this.withinPoint(this.ptB)) {
			this.selected = this.ptB;
		} else if (this.withinPoint(this.ptC)) {
			this.selected = this.ptC;
		} else if (this.withinPoint(this.ptD)) {
			this.selected = this.ptD;
		}
	}

	withinPoint(aPoint) {
		// Convert point ordered pairs to pixels
		var x1 = map(aPoint.x, -10, 10, 0, width);
		var y1 = map(aPoint.y, -10, 10, height, 0);

		return (dist(mouseX, mouseY, x1, y1) < 6);
	}

	processMouseReleased() {
		this.selected = null;
	}

	drawCoordinatePlane() {
		// Draw a grid and axes.
		background(255);

		// Draw the grid
		stroke(60);
		// Draw horizontal lines
		for (var y = 0; y <= width; y += 20) {
			this.dashedLineHz(0, 400, 5, y);
		}

		// Draw Vertical Lines
		for (var x = 0; x <= width; x += 20) {
			this.dashedLineVt(0, 400, 5, x);
		}

		// Draw Axes
		strokeWeight(3);
		line(0, 200, 400, 200); // x-axis
		line(200, 0, 200, 400); // y-axis
	}

	dashedLineHz(xStart, xStop, length, y) {
		strokeWeight(1);
		for (var x = xStart; x <= xStop; x += 2 * length) {
			line(x, y, x + length, y);
		}
	}

	dashedLineVt(yStart, yStop, length, x) {
		strokeWeight(1);
		for (var y = yStart; y <= yStop; y += 2 * length) {
			line(x, y, x, y + length);
		}
	}

}