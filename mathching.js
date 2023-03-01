const products = [ 
    {id:1, name:"mi Phone",price:100},
    {id:2, name:"oppo",price:100},
    {id:3, name:"vivo Phone",price:100},
    {id:4, name:"iphone",price:100},
    {id:5, name:"laptop",price:100},
    {id:6, name:"Pc",price:100},
];


for(product of products){
    // console.log(product);
}


function matchesPhone(products,search){
    let match = [];
    for (product of products){
        if(product.name.toLowerCase().includes(search)){
            match.push(product)
        }
    }
    return match;

}


const result = matchesPhone(products,'phone');
console.log(result);


