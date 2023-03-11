const array1 = [1, 2, 3];

console.log(array1.includes(2));



const products = [ 
    {id:1, name:"mi Phone",price:100},
    {id:2, name:"oppo",price:100},
    {id:3, name:"vivo Phone",price:100},
    {id:4, name:"iphone",price:100},
    {id:5, name:"laptop",price:100},
    {id:6, name:"Pc",price:100},
];

function matchesPhone(products,search){
    let match = [];
    for (product of products){
        if(product.name.toLowerCase().includes(search.toLowerCase())){
            match.push(product)
        }
    }
    return match;

}


const result = matchesPhone(products,'LAPTOP');
console.log(result);