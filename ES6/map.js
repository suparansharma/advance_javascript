const numbers = [1,2,3,4,5,6,4,8,9];

function getDoubles(){
    let doubleValueArr = [];
    for(number in numbers){
        // console.log(number);
        let double = doubleIt(number);
        doubleValueArr.push(double)
    }
    return doubleValueArr;
}



const doubleIt = number => number*2;
const makeDouble = numbers.map(doubleIt);
const ShowMapvl = numbers.map((x)=>{
    return x*3
})


const raw = [1,2,3,4,5,6,7].map((x)=>{return x})
// console.log(raw);
const result =  getDoubles(numbers)

const strVl = ["Tom","Tom And Jerry","Jerry And Tom","Cat","Mouse","Cat and Mouse"];
const firstValue =  strVl.map((x)=>{ return x[0]})
// console.log(firstValue);
// console.log("makeDouble",makeDouble);
// console.log(result);
// console.log(ShowMapvl);


const products = [ 
    {id:1, name:"mi Phone",price:100},
    {id:2, name:"oppo",price:100},
    {id:3, name:"vivo Phone",price:100},
    {id:4, name:"iphone",price:100},
    {id:5, name:"laptop",price:100},
    {id:6, name:"Pc",price:100},
];

const pro = products.map(product => console.log(product));