/*E.2 Crie uma função que recebe três argumentos, 
uma função e duas strings, aplique a função nas duas strings e imprima o resultado.*/

function concatena(argumento1, argumento2){
    return console.log(argumento1+argumento2)
}
function inicia(função, arg1, arg2){
    função(arg1, arg2)
}

inicia(concatena, "Olá! ", "Seja bem-vindo :)")
