//f(n-1) + n =f(n)


function Recursion(n){

    if(n === 1){
        return 0;
    }
    else{
        return Recursion(n-1) + n;
    }
}


function multirecoursion(n){
    if(n=== 1){
        return 1;
    }
    else{
        // console.log(multirecoursion(n - 1) * n);
        return multirecoursion(n - 1) * n
    }
}
const Sumresult  = Recursion(10);
const Multiresult  = multirecoursion(10);
console.log(Sumresult);
console.log("recoursion in multi factorial",Multiresult);