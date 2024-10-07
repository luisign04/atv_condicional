console.log("Digite o tipo da consulta: ")
console.log("1) Clinico Geral") 
console.log("2) Cardiologista") 
console.log("3) Oftamologista")
console.log("4) Gastrologista")

var prompt = require('prompt-sync')();

var input = prompt('Digite um número de 1 a 4: ')

if(input == 1){
    console.log('Você marcou pra um Clinico Geral, Seu médico está marcado para o dia 23/10/2024')
}
else if(input == 2){
    console.log('Você marcou pra um Cardiologista, Seu médico está marcado para o dia 14/10/2024')
}
else if(input == 3){
    console.log('Você marcou pra um Oftamologista, Seu médico está marcado para o dia 1/11/2024')
}
else if(input == 4){
    console.log('Você marcou pra um Gastrologista, Seu médico está marcado para o dia 7/11/2024')
}

else{
    console.log("Você digitou algo errado, tente novamente.")
}