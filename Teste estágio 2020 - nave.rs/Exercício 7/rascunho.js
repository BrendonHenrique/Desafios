
var i, j, x, tam
function ordenacaoBolha(vetor) {
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


var vetorObjetos = [
  {id: 1, nome: 'juca', sobrenome: 'da silva', idade: 42},
  {id: 2, nome: 'daniel', sobrenome: 'gonçalves',  idade: 42},
  {id:3, nome: 'matheus', sobrenome: 'garcia', idade: 42},
  {id: 4, nome: 'gabriel', sobrenome: 'pinheiro',  idade: 42}
]
ordenacaoBolha(vetorObjetos)