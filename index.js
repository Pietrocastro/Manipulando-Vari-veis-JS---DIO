//Desafios JavaScript na DIO têm funções "gets" e "print" acessíveis globalmente:
//- "gets" : lê UMA linha com dado(s) de entrada (inputs) do usuário;
//- "print": imprime um texto de saída (output), pulando linha.
const prompt = require("prompt-sync")();
// Para converter os valores inseridos na entrada, utilizamos a função JavaScript parseInt() que converte a parte inicial da string em um número inteiro.
let heroName = prompt("Tell me, what's your name? ");
const inicialPosition = parseInt(prompt("Tell the position that the hero started: "));
const totalSteps = parseInt(prompt("Now, tell how many steps will be taken: "));

//TODO: Calcule a posição final do herói:
const finalPosition = inicialPosition + totalSteps;

// Imprime a posição final
console.log("Hero's final position: ", finalPosition);