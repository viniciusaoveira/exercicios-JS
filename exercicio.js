let nome = "João";
var idade = 20;
const temperatura = 30.0;

console.log(typeof nome);
console.log(typeof idade);
console.log(typeof temperatura);

//

let nota = 10
if (nota >= 7){
  console.log("APROVADO")
}
else {
  console.log("REPROVADO")
}

//

for (let i = 1; i <= 10; i += 1){
  console.log(i)
}

//

let diaSemana = 0

switch (diaSemana){
  case 1:
    console.log("Domingo")
    break
  case 2:
    console.log("Segunda-feira")
    break
  case 3:
    console.log("Terça-feira")
    break
  case 4:
    console.log("Quarta-feira")
    break
  case 5:
    console.log("Quinta-feira")
    break
  case 6:
    console.log("Sexta-feira")
    break
  case 7:
    console.log("Sábado")
    break
  default:
    console.log("ERRO")
}

//

let frutas = ["Maça", "Banana", "Kiwi", "Morango", "Amora"]
  for (let a = 0; a < frutas.length; a += 1){
    console.log(frutas[a])
  }

  //

const pessoa = {
  nome: "Vinicius",
  idade: 26,
  cidade: "Rio de Janeiro",
  comida: ["Pizza", "Hamburguer", "Cachorro Quente"],
}
console.log(pessoa.comida)
for (let a = 0; a < pessoa.comida.length; a += 1){
  console.log(pessoa.comida[a])
}

//

/* function fruta(frutas) {
  return frutas[0]
}
console.log(fruta(frutas)) */

function soma(x,y,d){
  return x + y + d
}
console.log(soma(50,50,50))

//
const soma2 = (x,y,d) => {
  return x + y + d
}
console.log(soma2(50, 50, 50))
//  

let botao = document.getElementById("botao")
let hello = document.getElementById("hello")

// console.log(botao)
// console.log(hello)

botao.addEventListener("click", () => {
  hello.innerHTML = "Olá mundo"
})