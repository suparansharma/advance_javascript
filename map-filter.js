const number = [1,3,5,7,9];
const output = [];


for (let i=0; i< number.length;i++){

    const element = number[i];
    const result = element*element;
    output.push(result);


}
// console.log("output",output);



// number.map(function(element,index,array){
//     console.log(element,index,array)
// })


// const square = element =>element*element;



// const result = number.map(function(element){
//     return element * element;
// })

const value =number.map(x=> x);
console.log(value);

const result =number.map(x=> x*x);
console.log(result);


const bigger =number.filter(x=> x >5);
console.log(bigger );


const findvalue =number.find(x=> x >5);
console.log(findvalue);