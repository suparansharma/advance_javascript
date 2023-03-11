var a =1;
var b = 2;

var temp = a;
a = b;
b = temp;
console.log("a:",a,"b:",b);


// destructuring way to swap

[a,b]=[b,a]

console.log("a:",a,"b:",b);