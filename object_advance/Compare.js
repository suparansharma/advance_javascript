const student ={name:"admin",id:1,password:123456,status:1};

const firstString =  JSON.stringify(student);
// console.log(firstString);

const first = {a:1,b:2,c:3};
const second = {a:1,b:2,c:3,d:5};


function compareObject(first,second){
    const firstKey = Object.keys(first);
    const secondKey = Object.keys(second);

    if(firstKey.length === secondKey.length){
        for(const val of firstKey){
            if(first[val] !== second[val]){
                console.log("not matcehs");  
            }
        }
        console.log("matcehs"); 
    }

    else{ 
        console.log("don't matches");
    }
}

compareObject(first,second)