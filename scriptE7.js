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

/*E.8 Imprima a soma das idades (dica: utilize reduce)*/
total = vetorObjetos.reduce((total, elemento) => {
    return total += (elemento.idade)}, 0);

console.log(`\nA soma das idades é ${total}\n`)

/*E.9 Imprima o objeto se existir alguem com menos 25 anos.*/
console.log(vetorObjetos.filter((pessoas) => pessoas.idade < 25))

console.log('\n')

/*E.10 Imprima todos os elementos em que a idade é menor que 30 anos.*/
console.log(vetorObjetos.filter((pessoas) => pessoas.idade < 30))

/*E.11 Ordene o array de forma decrescente por idade, em caso de empate o desempate é pelo id.*/
console.log('\n\n\n')
var i, j, x, tam
function bubbleSort(vetor) {
    let n = vetor.length;
    for (let i = 0; i < n - 1; i++) 
      for (let j = 0; j < n - i - 1; j++)
        if(vetor[j].idade > vetor[j + 1].idade){
          let temp = vetor[j];
          vetor[j] = vetor[j + 1];
          vetor[j + 1] = temp;
        }
        
    console.log(vetor);
  }
bubbleSort(vetorObjetos)