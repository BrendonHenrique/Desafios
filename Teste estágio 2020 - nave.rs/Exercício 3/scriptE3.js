/*E.3 Crie uma função que recebe vários argumentos do tipo string e imprime todos juntos*/

function imprime(arg1, arg2, arg3, arg4, arg5, arg6){
    var concatena = (arg1.concat(arg2, arg3, arg4, arg5, arg6)).toString()
    console.log(concatena)
}

imprime("Olá", ",", " este é um ", "exercício", " em javascript", "!") //nomes.toString()
