let words ="Bangladesh";

let vowels = [];
let consonants = [];

for (let i = 0; i < words.length; i++) {
    let currentChar = words[i].toLowerCase();
    if ('aeiou'.includes(currentChar)) {
        vowels.push(words[i]);
    }else{
        consonants.push(words[i]);
    }
    
}

console.log("vowels",vowels);
console.log("consonants",consonants);