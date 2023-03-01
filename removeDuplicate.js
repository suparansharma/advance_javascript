
let arr =['a','b','c','a','d','b','a','c','e','e'];

function removeDuplicate(numbers){
    let newArr = [];
    for(let i=0; i<=numbers.length; i++){
        let number = numbers[i];
        if(newArr.includes(number)=== false){
            newArr.push(number)
        }
    }
    return newArr;
}

const value= removeDuplicate(arr);
console.log(value)