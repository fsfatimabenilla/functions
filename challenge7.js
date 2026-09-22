const prompt = require('prompt-sync')();
let n = Number(prompt("entrez un nombre "));
function affich(a){
    for(i=n;i>0;i--){
        console.log(i)
    }
    return i;
}
console.log(affich(n)); 