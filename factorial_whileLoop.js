let i = 1
while (i<=7) {
    // console.log(i);
    i++;
}

function factorial(number) {
    let i =10;
    let mainArray = [];
    let multiArray = [];
    let multi = 1;
    while(i >=number){
        multi = multi*i;
        mainArray.push(i);
        multiArray.push(multi);
        console.log(i,multi);
        i--;
    }


    console.log(mainArray,multiArray);
    return;
}

factorial(1)
