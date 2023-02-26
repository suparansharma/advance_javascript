function multiOfLength(numbers) {
    let multiArray = [];
    let multi = 1
    for (let index = 1; index <= numbers; index++) {
        
        multi = multi * index;
        multiArray.push(multi)
    }
console.log("multi : ",multi)
    return multiArray;
}

const result = multiOfLength(7);
console.log(result)