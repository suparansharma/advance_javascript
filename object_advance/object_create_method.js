const student = {

    name : "Student name",
    address : "student address",
    phone : "student phone",

}


const student1 = Object.create(student);
console.log(student)
console.log(student1.name)