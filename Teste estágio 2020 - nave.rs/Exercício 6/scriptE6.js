/*E.6 Utilizando a api da viacep (https://viacep.com.br/) e o seu cep como entrada
imprima o seu endereço no formato 'ENDERECO, NUMERO, CIDADE/ESTADO'.*/

function verifica(val){
    if(val.length == 8){
        var newScript = document.createElement('script') //cria um script
        newScript.src = 'https://viacep.com.br/ws/'+ val + '/json/?callback=resposta' //callback: código passado como parâmetro, chamo de "infos"
        document.body.appendChild(newScript); //Coloca o script no body
    }
    else{
        alert('[ERRO]! INFORME UM CEP VÁLIDO.')
    }
    
}
function resposta(infos){
    var numero = document.querySelector('input#txtnumero')
    var endereco = document.querySelector('p#endereço')
    
    if(numero.value <= 0 || numero.value == undefined){
        alert('[ERRO]! INFORME UM NÚMERO VÁLIDO.')
    }
    else{
        numero = Number(numero.value) //Converte string p/ numero
        var end = infos.logradouro
        var cid = infos.localidade
        var es = infos.uf
        var bairro = infos.bairro
    
        if(end != undefined){
            endereco.innerHTML = `${end} - ${bairro}, nº ${numero}, ${cid}/${es}`
        }
        else{
            alert('[ERRO]! CEP INVÁLIDO.')
        }
    }
}