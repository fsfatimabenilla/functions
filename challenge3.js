const prompt = require('prompt-sync')();

function max(a,b){
    if(a>b){
        return a;
    }else{
        return b;
    }
     
}
let n1 = Number(prompt("entrez 1ére nombre "));
let n2 = Number(prompt("entrez 2éme nombre "));
console.log(max(n1,n2));