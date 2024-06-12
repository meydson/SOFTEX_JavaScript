const prompt = require("prompt-sync")();

var numero = prompt("Insira um número entre 0 e 10: ")

if (numero >= 0 && numero <= 10) {
    console.log(`O valor informador é ${numero}`);
}else{
    console.log(`O número digitado, ${numero}, não está entre 0 e 10!`);
}
