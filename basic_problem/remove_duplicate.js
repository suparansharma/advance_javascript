let names=['a','b','c','a','r','d','d','c','e'];
let unique = [];

function removeDuplicate(names){
    for (let i = 0; i < names.length; i++) {
        const element = names[i];

        if(unique.includes(element) === false){
            unique.push(element);
        }

        // console.log(element);
        
    }
    return unique;
};

const uniqueValue = removeDuplicate(names);
console.log(uniqueValue);