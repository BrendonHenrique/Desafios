/*E.9 Imprima o objeto se existir alguem com menos 25 anos.*/

var vetorObjetos = [
    {id: 1, nome: 'juca', sobrenome: 'da silva', idade: 42},
    {id: 2, nome: 'daniel', sobrenome: 'gonçalves',  idade: 21},
    {id:3, nome: 'matheus', sobrenome: 'garcia', idade: 28},
    {id: 4, nome: 'gabriel', sobrenome: 'pinheiro',  idade: 21}
]

console.log(vetorObjetos.filter((pessoas) => pessoas.idade < 25))
