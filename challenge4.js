const prompt = require('prompt-sync')();

function min(a,b){
    if(a<b){
        return a;
    }else{
        return b;
    }
     
}
let n1 = Number(prompt("entrez 1ére nombre "));
let n2 = Number(prompt("entrez 2éme nombre "));
console.log(min(n1,n2));