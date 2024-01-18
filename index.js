const prompt = require("prompt-sync")()

console.log("WELCOME TO HERO POSITION [by Pietro Prata]")

let heroName = prompt("Tell me, what's your name? ")
const inicialPosition = parseInt(prompt("Tell the position that the hero started: "))
const totalSteps = parseInt(prompt("Now, tell how many steps will be taken: "))

//Calcula a posição final do herói:
const finalPosition = inicialPosition + totalSteps

// Imprime a posição final
console.log("Hero's final position: ", finalPosition)
