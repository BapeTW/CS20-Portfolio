console.log(array1.length);
console.log(array1[0]);
console.log(array1[2]);
console.log(array1[array1.length - 1]);
array1.splice(2, 1, "hello");
array1[3] += 5000;

// ---
for (let i = 0; i < 200; i++) {
    array.push("hi");
}

for (let i = 30; i < 360; i += 3) {
    array.push(i);
}

for (let i = 550; i > 50; i -= 5) {
    array.push(i);
}

for (let i = 0; i < 1000; i++) {
    let randNum = Math.floor(Math.random() * 10);
    array.push(randNum);
}
// ---

for (let i = 0; i < array2.length; i++) {
    if (array2[i] < 10 || array2[i] > 90) {
        console.log(array2[i]);
    }
}

let greaterLess = 0;
for (let i = 0; i < array2.length; i++) {
    if (array2[i] < 10 || array2[i] > 90) {
        greaterLess++;
    }
}
console.log(greaterLess);

let newArr = [];
for (let i = 0; i < array2.length; i++) {
    if (array2[i] < 10 || array2[i] > 90) {
        newArr.push(array2[i]);
    }
}
// ---

for (let i = 0; i < array3.length; i++) {
    if (array3[i] % 2 > 0) {
        array3[i]+= 1;
    } else if (array3[i] % 2 == 0) {
        array3[i].splice(i, 1, 0);
    }
}
// ---

for (let i = array4.length - 1; i >= 0; i--) {
    if (array4[i] == 13) {
        array4.splice(i, 1);
    }
}
// ---

let array5Copy = array5.slice();
// ---

let same = true;
if (array6.length != array7.length) {
    same = false;
} else {
    for (let i = 0; i < array6.length; i++) {
        if (array6[i] !== array7[i]) {
            same = false;
            break;
        }
    }
}


// ---

let myArr = [1, 3, 5, 7, 9];

let myArr1;
for (let i = 0; i < 400; i++) {
    myArr1.push("algorithm");
}

let myArr2;
for (let i = 0; i < 3000; i++) {
    myArr2.push(Math.random() * 10);
}

let myArr3;
for (let i = 20; i <= 800; i += 4) {
    myArr3.push(i);
}

function createPatternedArray(start, stop, step) {
    let myArr4;
    for (let i = start; i <= stop; i += step) {
        myArr4.push(i);
    }
    return myArr4;
}
let arr4 = createPatternedArray(6, 18, 3);
let arr5 = createPatternedArray(7, 2000, 18)

