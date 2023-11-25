let numbers = [5, 1, 4, 9, 13, 96, 1, 97];

let oddNumbers = numbers.filter(function (number) {
    return number % 2 !== 0;
});

console.log("Odd numbers:", oddNumbers);




/***Arrow Function */

let oddNumbersArr = numbers.filter((number) => number % 2 !== 0);

console.log("Odd numbers:", oddNumbersArr);
