//Código elaborado na 1°Aula da Imersão Dev da Alura 2021

//Solicita um valor via caixa de texto para o usuário
var valorEmDolarTexto = prompt("Qual o valor em dolar que você quer converter?")

//Pega o valor digitado que esta em formato de texto e converte para .Flutuante
var valorEmDolarNumero = parseFloat(valorEmDolarTexto)

var valorEmReal = valorEmDolarNumero * 5.50
var valorEmRealFixado = valorEmReal.toFixed(2)

alert("O valor em R$ " + valorEmRealFixado)