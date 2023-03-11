function modifire(strings,...values){
   const m = strings.reduce((prev,current)=>{
    return prev + current + (values.length ? "Mr."+values.shift():"")
   },"");

   return m;
}

var player1 = "sakib";
var player2 = "Tamim";

console.log(modifire `we have ${player1} and ${player2}`)