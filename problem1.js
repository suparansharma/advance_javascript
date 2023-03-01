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

const arrowFunction2 = (a=1,b)=>{
    console.log(a,b)
    return ;
}
const result1 = arrowFunction2(2);
console.log(result1);