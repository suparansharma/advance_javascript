const students = [

    {id: 21, name:'omer sunny'},
    {id: 31, name:'Karim sunny'},
    {id: 41, name:'Rahim sunny'},
    {id: 51, name:'Rony sunny'},
]

const name = students.map(s => s.name);
const id = students.map(s=> s.id);
const bigger = students.filter(s=> s.id>31);
const finde = students.find(s=> s.id>31);

console.log(name);
console.log(id);
console.log(bigger);
console.log(finde);