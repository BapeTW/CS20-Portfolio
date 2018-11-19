// Object Interaction Library

function circleClicked(c) {
    if (dist(mouseX, mouseY, c.x, c.y) < c.r && mouseIsPressed) {
        return true;
    }
}

function rectClicked(rectObj) {
    if (mouseX > rectObj.x && mouseY > rectObj.y && mouseX < rectObj.x + rectObj.w &&
        mouseY < rectObj.y + rectObj.h) {
        return true;
    }
}

function circleIntersect(c1, c2) {
    if (dist(c1.x, c1.y, c2.x, c2.y) < c1.r + c1.r) {
        return true;
    }
}

function rectIntersect(rect1, rect2) {
    let le1 = rect1.x;
	let re1 = rect1.x + rect1.w;
	let te1 = rect1.y;
	let be1 = rect1.y + rect1.h;
	
	let le2 = rect2.x;
	let re2 = rect2.x + rect2.w;
	let te2 = rect2.y;
	let be2 = rect2.y + rect2.h;
	
	return (le1 < re2 && re1 > le2 && be1 > te2 && te1 < be2);
}