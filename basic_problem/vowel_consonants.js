let word = "Bangladesh";

let vowels = [];
let consonants = [];

for (let i = 0; i < word.length; i++)
{
    let currentChar = word[i].toLowerCase(); // Convert to lowercase for case-insensitive comparison

    if ('aeiou'.includes(currentChar)) {
        vowels.push(word[i]);
    } else {
        consonants.push(word[i]);
    }
}

console.log("Vowels:", vowels);
console.log("Consonants:", consonants);
