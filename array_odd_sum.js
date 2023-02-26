const arr = [12,15,19,69,56,89,20]

function getSum(numbers){
    
    let sum = 0;
    for (let i = 0; i < numbers.length; i++) {
        
        const element = numbers[i];
        sum = sum + element;
        // console.log(i, element,sum);

        
    }
// console.log(numbers)
}



function findOddnumbers(numbers) {
    let newArray = [];
    for (let index = 0; index < numbers.length; index++) {
        const element = numbers[index];
        if (element % 2 !== 0) {
            console.log(element)
            newArray.push(element)
        }
        
    }

    return newArray;
}
const oddNumbers = findOddnumbers(arr);
console.log(oddNumbers)
getSum(arr);