const prompt = require('prompt-sync')(); 

let input1 = parseInt(prompt("1. Você prefere trabalhar em equipe do que sozinho? (1-5) "));
let input2 = parseInt(prompt("2. Você se sente energizado após passar tempo com outras pessoas? (1-5) "));
let input3 = parseInt(prompt("3. Você gosta de seguir planos ao invés de improvisar? (1-5) "));
let input4 = parseInt(prompt("4. Você valoriza mais a lógica do que as emoções nas decisões? (1-5) "));
let input5 = parseInt(prompt("5. Você se considera uma pessoa mais prática do que imaginativa? (1-5) "));
let input6 = parseInt(prompt("6. Você prefere ter um estilo de vida estruturado do que um estilo de vida mais flexível? (1-5) "));
let input7 = parseInt(prompt("7. Você se sente mais confortável com a realidade do que com ideias abstratas? (1-5) "));
let input8 = parseInt(prompt("8. Você prefere resolver problemas práticos ao invés de teóricos? (1-5) "));
let input9 = parseInt(prompt("9. Você toma decisões baseadas mais em sentimentos do que em dados? (1-5) "));
let input10 = parseInt(prompt("10. Você se considera mais introvertido do que extrovertido? (1-5) "));

const total = input1 + input2 + input3 + input4 + input5 + input6 + input7 + input8 + input9 + input10;
const analiseTotal = total / 10;

let tipoPersonalidade = '';

if (analiseTotal <= 2) {
    tipoPersonalidade = "Você é mais Introvertido e Analítico (I)";
} else if (analiseTotal <= 3.5) {
    tipoPersonalidade = "Você possui características equilibradas entre Introversão e Extroversão (I/E)";
} else {
    tipoPersonalidade = "Você é mais Extrovertido e Sociável (E)";
}

if (input3 <= 3) {
    tipoPersonalidade += ", e você tende a ser mais espontâneo (P).";
} else {
    tipoPersonalidade+= ", e você tende a ser mais planejador (J).";
}

if (input4 <= 3) {
    tipoPersonalidade += " Você valoriza mais as emoções do que a lógica (F).";
} else {
    tipoPersonalidade += " Você valoriza mais a lógica do que as emoções (T).";
}

console.log(`\nSeu tipo de personalidade: ${tipoPersonalidade}`);
