const arr = [1,2,3,4,5,6];
const arr2= [0,...arr,7,8];
const largest = Math.max(...arr);
// console.log(...arr);
// console.log(largest);
// console.log(arr2);


const [a,...b] = [1,2,3,4,5,6];
// console.log(a,b);
const {x,y,z,...c} = {x:1,y:2,z:3,name:'ABC',phone:123,salary:123}
console.log(x,y,z,c);