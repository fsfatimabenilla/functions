const prompt = require('prompt-sync')();
let n = Number(prompt("entrez un nombre "));
function Fibonacci(a){
let f0 =0;
let f1 =1;

for (i=1;i<=n;i++){
   
    let fn=f0+f1;
    
f0=f1;
    f1=fn;
    
}return f0

}

console.log(Fibonacci(n)); 
