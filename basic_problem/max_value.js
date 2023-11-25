let numbers = [5, 1, 4, 9, 13, 96, 1, 97];


/*** Rule-1 Javascript Libary start */
let maxValue = Math.max(...numbers);

console.log("The maximum value is:", maxValue);

/*** Rule-1 Javascript Libary end */





/*** Rule-2 Javascript Libary start */

// Initialize max with the first element of the array
let max = numbers[0];

// Iterate through the array starting from the second element
for (let i = 1; i < numbers.length; i++) {
    // Update max if the current element is greater
    if (numbers[i] > max) {
        max = numbers[i];
    }
}

console.log("The maximum value is:", max);
/*** Rule-2 Javascript Libary end */