// LINE ANALYZER ASSIGNMENT SOLUTIONS

// Initialize Global Point Variables
function initGlobals() {
	pt1 = {
		x: -8,
		y: 3,
		name: "1"
	};
	pt2 = {
		x: -2,
		y: 3,
		name: "2"
	};
	pt3 = {
		x: 4,
		y: 4,
		name: "3"
	};
	pt4 = {
		x: 4,
		y: -4,
		name: "4"
	};
}

// Click Event Listeners
$("#refresh").click(lineCalculations);

// Event Functions
function lineCalculations() {
	// Length of Lines
	document.getElementById("l1Length").innerHTML = lineLength(pt1, pt2);
	document.getElementById("l2Length").innerHTML = lineLength(pt3, pt4);
	// MidPoint of Lines
	document.getElementById("l1MidPoint").innerHTML = midPoint(pt1, pt2);
	document.getElementById("l2MidPoint").innerHTML = midPoint(pt3, pt4);
	// Slope of Lines
	document.getElementById("l1Slope").innerHTML = lineSlope(pt1, pt2);
	document.getElementById("l2Slope").innerHTML = lineSlope(pt3, pt4);
	// Description of Lines
	document.getElementById("l1Description").innerHTML = lineDescription(pt1, pt2);
	document.getElementById("l2Description").innerHTML = lineDescription(pt3, pt4);
	// Domain of Lines
	document.getElementById("l1Domain").innerHTML = domain(pt1, pt2);
	document.getElementById("l2Domain").innerHTML = domain(pt3, pt4);
	// Range of Lines
	document.getElementById("l1Range").innerHTML = range(pt1, pt2);
	document.getElementById("l2Range").innerHTML = range(pt3, pt4);
	// Equation of Lines
	document.getElementById("l1Equation").innerHTML = equationOfLine(pt1, pt2);
	document.getElementById("l2Equation").innerHTML = equationOfLine(pt3, pt4);
}

// LINE FUNCTIONS -- DEFINE YOUR LINE FUNCTIONS HERE
function lineLength(ptA, ptB) {
	let run = ptA.x - ptB.x;
	let rise = ptA.y - ptB.y;
	return Math.sqrt(run ** 2 + rise ** 2);
}

function midPoint(ptA, ptB) {
	let xm = (ptA.x + ptB.x) / 2;
	let ym = (ptA.y + ptB.y) / 2;
	return "(" + xm + "," + ym + ")";
}

function lineSlope(ptA, ptB) {
	let rise = (ptB.y - ptA.y);
	let run = (ptB.x - ptA.x);
	return rise / run;
}

function lineDescription(ptA, ptB) {
	let rise = (ptB.y - ptA.y);
	let run = (ptB.x - ptA.x);
	let slope = rise / run;
	if (slope > 0 && slope < 100) {
		return "Increasing";
	} else if (slope < 0 && slope > -100) {
		return "Decreasing";
	} else if (slope == 0) {
		return "Horizontal";
	} else {
		return "Vertical";
	}
} 

function domain(ptA, ptB) {
	return "[" + ptA.x + "," + ptB.x + "]";
}

function range(ptA, ptB) {
	return "[" + ptA.y + "," + ptB.y + "]";
}

function equationOfLine (ptA, ptB) {
	let rise = (ptB.y - ptA.y);
	let run = (ptB.x - ptA.x);
	let m = rise / run;
	if (m == Infinity || m == -Infinity) {
		m = undefined;
	}
	let b = ptA.y + m * ptA.x;
	return "y = " + m + "x" + " + " + b;
}
