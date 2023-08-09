/*
 * White Belt - Option A
 * Your Name:  James Chu
 */
s
// Question 1
// Predict the result of the following code.

var answer = 3 + 4 * 2;
console.log(answer);

/*
 * Your answer: 11
 */

// Question 2
// Predict the result of the following code.

var answer = (3 + 4) * 2;
console.log(answer);

/*
 * Your answer: 14
 */

// Question 3
// Predict the result of the following code.

for(var i=0; i<13; i++) {
    console.log(i);
    i += 2;
}

/*
 * Your answer: 0,3,6,9,12
 */

// Question 4
// Predict the result of the following code.

for(var i=19; i>13; i--) {
    console.log(i);
    i -= 1;
}

/*
 * Your answer: 19,17,15
 */

// Question 5
// Predict the result of the following code.

var i = 8;
if(i % 2 == 0) {
    console.log("even");
} else {
    console.log(i);
}

/*
 * Your answer: even
 */

// Question 6
// Predict the result of the following code.

for(var i=3; i<8; i++) {
    if(i % 2 == 0) {
        console.log("even");
    } else {
        console.log(i);
    }
}

/*
 * Your answer: 3,even,5,even,7
 */

// Question 7
// Predict the result of the following code.

var arr = [1, 4, 7, 6, 2, 1];
var count = 0;
for(var i=0; i<arr.length; i++) {
    if(arr[i] > 3) {
        count++;
    }
}
console.log(count);

/*
 * Your answer: 3
 */

// Question 8
// Complete the function in the code below to console log all numbers down from 68 to 9.

function print68to9() {
    // your code here
    for (let i = 68; i >= 9; i--){
        console.log(i);
    }
}

print68to9();

// Question 9
// Complete the function in the code below to return the largest value of an array.
// Given: [3, 6, 4, 9, 2]
// Return: 9

function findLargest(arr) {
    // your code here
    let max = arr[0];
    for (let i = 0; i < arr.length; i++){
        if (max < arr[i]){
            max = arr[i];
        }
    }
    return max;
}

findLargest([12, 21, 3.6, 9, 12, 8]);

// Question 10
// Complete the function in the code below to return a count of all values in the array larger than another number "y".
// Given: [3, 6, 4, 9, 2], 5
// Return: 2

function countGreaterThanY(arr, y) {
    var count = 0;
    // your code here
    for (let i = 0; i < arr.length; i++){
        if (arr[i] > y){
            count ++;
        }
    }
    return count;
}

countGreaterThanY([12, 21, 3.6, 9, 12, 8], 8);