// CODE FOR A BUBBLE OBJECT

function initBubble() {
    bubble = {
        // Properties (State)
        x: width / 2,
        y: height / 2,
        r: 25,
        move: function () {
            // Move Bubble Randomly
            this.x += random(-1, 1);
            this.y += random(-1, 1);
        },
        show: function () {
            // Draw Bubble
            noFill();
            stroke(255, 180);
            strokeWeight(3);
            ellipse(this.x, this.y, 2 * this.r);
        }
    }
}