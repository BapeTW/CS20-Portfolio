function platform(x, y, w, h, col, topCol) {
    noStroke();
    // Main Platform
    fill(col);
    rect(x, y, w, h);
    // Platform Top
    fill(topCol);
    rect(x, y, w, 2);
}

function powerUp(x, y, char) {
    // Box
    noStroke();
    fill(0);
    rect(x, y, 20, 20);
    // Text
    fill(255);
    textAlign(CENTER);
    textSize(18);
    text(char, x + 10, y + 16);
}

function spike(x, y, col) {
    // Triangle
    fill(col);
    triangle(x, y, x + 20, y, x + 10, y - 20);
}

function itemBox(x, y, outerCol, innerCol) {
    // Box
    fill(outerCol);
    rect(x, y, 20, 20);

    // Inner Circle
    fill(innerCol);
    ellipse(x + 10, y + 10, 10)
}

function door(x, y, frameCol) {
    // Frame
    fill(frameCol);
    rect(x, y, 40, 40);

    // Door
    fill(0);
    rect(x + 5, y + 5, 30, 35);
}

function bridge(x, y, w, col) {
    // Ellipse Bridge
    fill(col);
    // Loop for bridge length
    for (w; 0 < w; w--) {
        ellipse(x, y, 20);
        x = x + 20;
    }
}

function spikeStrip(x, y, w, col) {
    // Triangle Line
    fill(col);
    // Loop for strip length
    for (w; 0 < w; w--) {
        triangle(x, y, x + 20, y, x + 10, y - 20);
        x = x + 20;
    }
}