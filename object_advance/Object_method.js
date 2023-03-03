const student = {
    name:"Student Name",
    study:"Math",
    subject :['calculus','algebra','geometry'],
    exam : function(){
        return this.name + 'is a good boy';
    }
}

const output = student.exam();
console.log(student)