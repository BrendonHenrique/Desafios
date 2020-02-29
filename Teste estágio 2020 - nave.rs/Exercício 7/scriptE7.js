/*E.7 Imprima uma mensagem de saudação com o nome completo para cada um dos objetos. 
O nome deve ter a primeira letra maiúscula.
Olá, Fulano de tal!
Olá, Juca da silva!*/

var vetorObjetos = [
    {id: 1, nome: 'juca', sobrenome: 'da silva', idade: 42},
    {id: 2, nome: 'daniel', sobrenome: 'gonçalves',  idade: 21},
    {id:3, nome: 'matheus', sobrenome: 'garcia', idade: 28},
    {id: 4, nome: 'gabriel', sobrenome: 'pinheiro',  idade: 21}
]

var pos = 0
var total = 0
for(pos in vetorObjetos){
    console.log(`Olá, ${vetorObjetos[pos].nome.replace(/^./, vetorObjetos[pos].nome[0].toUpperCase())} ${vetorObjetos[pos].sobrenome}! `)
}