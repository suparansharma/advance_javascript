//f(n-1) + n =f(n)


function Recursion(n){

    if(n === 1){
        return 0;
    }
    else{
        return Recursion(n-1) + n;
    }
}

const result  = Recursion(10);
console.log(result);