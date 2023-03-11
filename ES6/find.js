const numberArr =  [12,23,45,79,65,12,32,1,6,16,45,23,22,19];
const numberAr =  [1,2,3,4,5,6,7,8,9,10];

const four = numberArr.find(x => x%4 === 0);
console.log(four);

const bigdata = numberAr.findIndex((currentValue,index,arr)=>{
    return currentValue>8;
})

const bigvalue = numberAr.find((currentValue,index,arr)=>{
    return currentValue>8;
})

console.log("Index Value :",bigdata,"General Value:",bigvalue);