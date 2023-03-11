const numberArr =  [12,23,45,79,65,12,32,1,6,16,45,23,22,19];
const bigNumber = numberArr.filter(x=> x>20);
const evnNumber = numberArr.filter(x => x%2 ===0);



const numberAr =  [1,2,3,4,5,6,7,8,9,10];

const smallCondi = numberAr.filter((currentValue,index,arr)=>  {

    return currentValue<5;
    // return index<5;

});
   
console.log(smallCondi);