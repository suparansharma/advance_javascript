function leapYear (year){
if(year%4==0 && year%100 !=0 || year%400 ==0){
    console.log("this is leap year");
}
else{
    console.log("this is not a leap year");
}
}   


function leapYears (arr){
    let leapYear = [];
    for(let i=1;i<arr.length;i++){
        let yr = arr[i];
        // console.log(yr);
        if(yr%4==0 && yr%100 !=0 || yr%400 ==0){
            leapYear.push(yr)
        }
    }

    return leapYear;
}
let allYear = [2014,2004,2024,2030,2032,2008,2009]
// leapYear (2032);
const Years = leapYears(allYear);
console.log("check by for",Years);




function whileLeapYr(arr) {
    let i = 0;
    let newArr = [];
    while (i<=arr.length) {
        let y = arr[i];
        if(y%4==0 && y%100 !=0 || y%400 ==0){
           
            newArr.push(y);
        }
        i++;
    }
    return newArr
    
}


const tryWhile = whileLeapYr(allYear);
console.log("check by while",tryWhile);