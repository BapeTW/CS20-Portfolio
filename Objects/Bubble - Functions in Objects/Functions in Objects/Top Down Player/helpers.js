class Game {
    //Properties (STATE)
    constructor() {
        // Init Players
        this.player1 = new TopDownPlayer(100, 300, 255, 87, 83, 65, 68, 84);
        this.player2 = new TopDownPlayer(700, 300, 0, 38, 40, 37, 39, 32);

        //Init Balls
        this.bounce1 = new BouncingCircle(200);
        this.bounce2 = new BouncingCircle(300);
        this.bounce3 = new BouncingCircle(400);
        this.bounce4 = new BouncingCircle(500);
    }

    // Methods (Behvaiour)
    moveGameObjects() {
        // Move Players
        this.player1.move();
        this.player2.move();

        // Move Balls
        this.bounce1.bounce();
        this.bounce2.bounce();
        this.bounce3.bounce();
        this.bounce4.bounce();
    }

    drawGameObjects() {
        this.player1.show();
        this.player2.show();
        this.bounce1.show();
        this.bounce2.show();
        this.bounce3.show();
        this.bounce4.show();
    }

    checkCollision() {
        this.ballCollision(this.player1);
        this.ballCollision(this.player2);
    }

    ballCollision() {
        if (circleIntersect(this.player1, this.bounce1) || circleIntersect(this.player1, this.bounce2) ||
            circleIntersect(this.player1, this.bounce3) || circleIntersect(this.player1, this.bounce4)) {
            gameState = "gameOverP1";
        }

        if (circleIntersect(this.player2, this.bounce1) || circleIntersect(this.player2, this.bounce2) ||
            circleIntersect(this.player2, this.bounce3) || circleIntersect(this.player2, this.bounce4)) {
            gameState = "gameOverP2";
        }
    }
}

function drawStartScreen() {
    background(255);
    textSize(40);
    fill(0);
    textAlign(CENTER);
    text("CLICK TO START", width / 2, 300);
}

function drawGameOverP1() {
    background(0);
    fill(255);
    text("BLACK CIRCLE WINS", width / 2, 300);
    text("CLICK TO PLAY AGAIN", width / 2, 400);
}

function drawGameOverP2() {
    background(255);
    fill(0);
    text("WHITE CIRCLE WINS", width / 2, 300);
    text("CLICK TO PLAY AGAIN", width / 2, 400);
}