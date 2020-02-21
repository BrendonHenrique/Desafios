/**E.4 Dado a seguinte string 'teste 1 de 2 string 3', 
substitua todas as ocorrências de números pelo valor '[removido]'.**/

var string = 'teste 1 de 2 string 3'
console.log(string)
string = string.replace(/\d+/g, "[removido]")
console.log(string)