const arr = [1,2,3,4,5,6];

const largeValue = largestValue(arr);

function largestValue(arr) {
    let largeV = arr[0]
    for (let i = 0; i < arr.length; i++) {
        const element = arr[i];
        if(element > largeV){
            largeV = element;
        }
        
    }

    return largeV;
}


console.log(largeValue);