const prompt = require('prompt-sync')();
let n = Number(prompt("entrez un nombre "));
function pairImpair(a){
   return n%2==0
}

if(pairImpair(n)){
    console.log(`${n}: paire`); 
}else{
    console.log(`${n}: impaire`); 
}
