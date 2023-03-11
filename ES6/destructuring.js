const user ={
    id:1,
    name:"ali",
    email:"ali@gmail.com",
    education:{
        degree:"master",
    }

}

const {education:{degree:x}} = user;
console.log(x)


var numbers = [1,2,3,4,5,6,7,8,9];
var [a,,,,,,c]= numbers
console.log(a,c);

var num =[1,2,[100,200,300],4,5,6];
var [,,[a,b],,d]=num;
console.log(a,b,d)