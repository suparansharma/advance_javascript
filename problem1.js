const arrowFunction = (a,b,c) =>{
    return a*b*c;
}

const result = arrowFunction(1,2,3);
console.log(result)

let sentence = 
`I am a web developer 
I love to code.
I love to eat biryani.
`
console.log(sentence);

const arrowFunction2 = (a=1,b= 2)=>{
 const total =  a + b;
    return total ;
}
const result1 = arrowFunction2(2);
console.log(result1);


const arr = [1,2,3,4,5,6,7,8,9,10];

let evenArr = [];

// function a
for (let i = 0; i < arr.length; i++) {
    const element = arr[i];
    // console.log(element)
    if (element%2 ==0){
        evenArr.push(element);
    }
// return evenArr;
    
}
console.log("even values are",evenArr);
