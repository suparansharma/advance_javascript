class student {

    name = "Student name";
    address = "student address";
    phone = "student phone";

    constructor(age,city){
        this.age = age;
        this.city = city;
    }

}

const student1 = new student(20,'BD');
const student2 = new student(20,'India');
console.log(student1,"\n\n",student2)