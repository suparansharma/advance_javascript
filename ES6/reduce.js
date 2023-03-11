const numberArr =  [1,2,3,4,5,6,7];
const total = numberArr.reduce((previous, current)=>
{
    console.log(previous, current);
    return previous  + current
},0
)
console.log(total);