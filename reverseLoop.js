for (let i = 10; i >=1; i--) {
    // let i = array.length - 1; i >= 0; i--
    console.log(i)
}


for (let i = 0; i < 4; i++) {
	// Print each iteration to the console
	// console.log(i);
}



function reverseFactorial (number){
    let multi = 1;
    let multiAr = [];
    for (let i = number; i >=1; i--) {
      multi = multi * i;
      multiAr.push(multi)
      console.log(i)
        
    }
    console.log(multi)
    return multiAr;
}


const result = reverseFactorial(10);
console.log(result)