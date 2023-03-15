
// for in
const myArray = [1,2,3,4,5,6];

for(element in myArray ){
    console.log("Array Index Number :",element)
}


const myObj = {
    name:"JavaScript",
    yr:"1995",
    founder:"XYZ"
};

for (property in myObj){
    console.log("Object Property :",property)
}



//for of

for(element of myArray ){
    console.log("Array Element :",element)
}


const myString = "I Love JavaScript";
for(element of myString) {
    console.log("values",element)
}
for(element in myString) {
    console.log("index",element)
}