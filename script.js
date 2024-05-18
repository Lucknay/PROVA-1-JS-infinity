const nota1 = Number(prompt("Digite a nota 1"))
const nota2= Number(prompt("Digite a nota 2"))
const nota3= Number(prompt("Digite a nota 3"))

const peso1= Number(prompt("Digite o peso 1"))
const peso2= Number(prompt("Digite o peso 2"))
const peso3= Number(prompt("Digite o peso 3"))

const media = nota1 * peso1 + nota2 * peso2 + nota3 * peso3
const media2= peso1 + peso2+ peso3
const media3= media / media2

console.log (`O resultado da média é ${media3 .toFixed(1)}`)