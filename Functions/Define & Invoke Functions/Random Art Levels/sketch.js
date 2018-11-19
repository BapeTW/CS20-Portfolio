// RANDOM ART

// Declare Global Variables
var paintTool;
var level;

// SETUP FUNCTION - Runs once at beginning of program
function setup() {
    createCanvas(800, 600);
    background(255);
    
    // Initialize Global Variables
    level = 1;
    
    paintTool = {
        x: width / 2,
        y: height / 2,
        w: 25,
        h: 25
    };
}

// DRAW FUNCTION - Loops @ 60FPS by default
function draw() {
    drawLevels();
}

// EVENT FUNCTIONS
function keyPressed() {
    changeLevelSaveCanvas();
}

function mousePressed() {
    drawOnMouse();
}
