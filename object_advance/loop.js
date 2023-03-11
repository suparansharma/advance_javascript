const student ={name:"admin",id:1,password:123456,status:1};

const keys = Object.keys(student);
const values = Object.values(student);
// console.log(keys,values);


const numbers = [1,2,3,4,5,6];
for(number of numbers){
    // console.log(number);
}

for(key in student){
    // console.log(key,":",student[key]);
}

const pairs = Object.entries(student);
console.log(pairs);

for(const [key,value] of pairs){
    console.log(key,value);
}