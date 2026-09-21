const prompt = require('prompt-sync')();

function addition(a,b){
    return a+b
}
let n1 = Number(prompt("entrez 1ére nombre "));
let n2 = Number(prompt("entrez 2éme nombre "));
console.log(addition(n1,n2));