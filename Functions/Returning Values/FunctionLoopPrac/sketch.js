function loopOneToFifty() {
    for (let i = 1; i <= 50; i++) {
        console.log(i);
    }
}

function loopMultiOfFive() {
    for (let i = 500; i <= 600; i = i + 5) {
        console.log(i);
    }
}

function printPattern(start, stop, step) {
    for (let i = start; i <= stop; i += step) {
        console.log(i)
    }
}

// loopOneToFifty();
// loopMultiOfFive();
printPattern(1, 50, 1);
// printPattern(500, 600, 5);
// printPattern(0, 100, 10);