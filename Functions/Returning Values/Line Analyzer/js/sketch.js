// Line Analyzer

// Global Variables
var pt1, pt2, pt3, pt4;
var grapher;

// Set up & Draw
function setup() {
	let cnv = createCanvas(400, 400);
	cnv.parent("cnvContainer");

	initGlobals();
	grapher = new Grapher(pt1, pt2, pt3, pt4);
}

function draw() {
	grapher.drawCoordinatePlane();
	grapher.drawLine1("blue"); // Line 1 - pt1 to pt2
	grapher.drawLine2("green"); // Line 2 - pt3 to pt4
	grapher.dragAndDrop();
}

// Events
function mousePressed() {
	grapher.processMousePressed();
}

function mouseReleased() {
	grapher.processMouseReleased();
}

function keyPressed() {
	if (keyCode == 49) { // Key #1 - Distance
		q1Distance();
	} else if (keyCode == 50) { // Key #2 - Slope
		q2Slope();
	} else if (keyCode == 51) { // Key #3 - Point Location
		q3PointLocation();
	} else if (keyCode == 52) { // Key #4 - Midpoint
		q4Midpoint();
	} else if (keyCode == 53) { // Key #5 - Equation of Line
		q5Equation();
	}
}


