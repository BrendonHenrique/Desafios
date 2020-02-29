/*E.11 Ordene o array de forma decrescente por idade, em caso de empate o desempate é pelo id.*/

var vetorObjetos = [
    {id: 1, nome: 'juca', sobrenome: 'da silva', idade: 42},
    {id: 2, nome: 'daniel', sobrenome: 'gonçalves',  idade: 21},
    {id:3, nome: 'matheus', sobrenome: 'garcia', idade: 28},
    {id: 4, nome: 'gabriel', sobrenome: 'pinheiro',  idade: 21}
]

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