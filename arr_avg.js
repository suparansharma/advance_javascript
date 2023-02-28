const arr = [10,20,30,40]
let sum = 0;
for (let i = 0; i < arr.length; i++) {
    const element = arr[i];
    sum = sum+element
}
console.log(arr.length);
console.log(sum,sum/arr.length);