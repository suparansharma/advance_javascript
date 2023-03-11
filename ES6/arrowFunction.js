var students = {

    name:"Student name",
    books :["Bangla","English","Math"],
    functioName:function (){
        this.books.forEach(a=>{
            console.log(`${this.name} have ${a}`)
        })
    },
    mapFuction:function (){
        this.books.map(a=>{
            console.log(`${this.name} have ${a}`)
        })
    },
}



// students.functioName();
students.mapFuction();