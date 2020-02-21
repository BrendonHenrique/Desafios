//E.1 Crie uma função que recebe dois argumentos string e retorna o de maior comprimento.
function testar(){
    var st1 = document.getElementById('txtstring1')
    var st2 = document.querySelector('input#txtstring2')
    var resultado = document.querySelector('div#resultado')
    
    resultado.innerHTML = maiorString(st1, st2)
}
function maiorString(string1, string2){
    if(string1.value.length == 0 && string2.value.length == 0){
        return resultado.innerHTML = 'Nada foi digitado.'
    }
    else if(string1.value.length == string2.value.length){
        return resultado.innerHTML = 'As strings possuem o mesmo tamanho.'
    }
    else if(string1.value.length > string2.value.length){
        return resultado.innerHTML = `A string de maior comprimento é: ${string1.value}`
    }
    else{
        return resultado.innerHTML = `A string de maior comprimento é: ${string2.value}`
    }
}
