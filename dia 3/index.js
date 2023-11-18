let nome = ""
let idade = 0 
let altura = 0 
let peso = 0

nome = prompt("Seu nome :")
idade = parseInt(prompt("Sua Idade :"))
altura = parseFloat(prompt("Sua Altura :"))
peso = parseInt(prompt("Seu Peso :"))

let anoNasc = 0
anoNasc = 2023 - idade

let imc = 0
imc = peso / (altura * altura)

console.log("Olá" + nome ,", você tem" + idade + "anos, nasceu em " + anoNasc +
", tem " + altura + " de altura, pesa " + peso + "kg e seu IMC é " + imc + "kg/m^2" )
