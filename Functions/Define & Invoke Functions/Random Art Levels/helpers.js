function drawLevels() {
    if (level == 1) {
        // LEVEL 1 LOGIC
        paintTool.x += random(-10, 10);
        paintTool.y += random(-10, 10);

        // DRAW LEVEL 1
        noFill();
        stroke(100, 0, 100, 80);
        ellipse(paintTool.x, paintTool.y, paintTool.w, paintTool.h);
    } else if (level == 2) {
        // LEVEL 2 LOGIC
        paintTool.x += random(-20, 20);

        // DRAW LEVEL 2
        fill(200, 180, 0, 50);
        noStroke();
        rect(paintTool.x, paintTool.y, paintTool.w, paintTool.h);
    } else if (level == 3) {
        // LEVEL 3 LOGIC
        paintTool.x = random(0, width);
        paintTool.y = random(0, height);

        // DRAW LEVEL 3
        fill(random(255), random(255), random(255), 120);
        stroke(random(255), random(255), random(255));
        ellipse(paintTool.x, paintTool.y, paintTool.w, paintTool.h);
    } else if (level == 4) {
        // LEVEL 4 LOGIC
        paintTool.x += random(-30, 30);
        paintTool.y += random(-30, 30);
        
        // DRAW LEVEL 3
        fill(random(255), 23, random(255));
        rect(paintTool.x, paintTool.y, paintTool.w, paintTool.h);
    }
}

function changeLevelSaveCanvas() {
    if (keyCode == RIGHT_ARROW) {
        // Go to next level, loop if needed
        level++;
        if (level > 4) {
            level = 1;
        }

        // Set Background for New Level
        if (level == 1) {
            background(255);
        } else if (level == 2) {
            background(85);
        } else if (level == 3) {
            background(0);
        } else if (level == 4) {
            background(30);
        }
    } else if (keyCode == LEFT_ARROW) { 
        // Go to previous level, loop if needed
        level--;
        if (level < 1) {
            level = 4;
        }
        
        // Set Background for New Level
        if (level == 1) {
            background(255);
        } else if (level == 2) {
            background(85);
        } else if (level == 3) {
            background(0);
        } else if (level == 4) {
            background(30);
        }
    } else if (keyCode == 83) { // 's' for save
        saveCanvas();
    }
}

function drawOnMouse() {
    paintTool.x = mouseX;
    paintTool.y = mouseY;
}