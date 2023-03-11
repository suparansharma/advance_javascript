const student = {
    name:"Student Name",
    study:"Math",
    subjects :['calculus','algebra','geometry'],
    money:5000,
    exam : function(){
        return this.name + 'is a good boy';
    },
    improveExam : function(subject){
        this.exam();
        return `${this.name} is taken the exam on ${subject}`;
    },

    amountDebit : function(amount){
        this.money = this.money - amount;
        return this.money;
    }

}

const output = student.exam();
const output_inner_function = student.improveExam('algebra');
const money = student.amountDebit(500)
const againmoney = student.amountDebit(500)
console.log(againmoney)