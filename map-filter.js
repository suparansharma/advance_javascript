const number = [1,3,5,7,9];
const output = [];
// for (let i=0; i< number.length;i++){

//     const element = number[i];
//     const result = element*element;
//     output.push(result);


// }
// console.log("output",output);


number.map(function(element,index,array){
    console.log(element,index,array)
})