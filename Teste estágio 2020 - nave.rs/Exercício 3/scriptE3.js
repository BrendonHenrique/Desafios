/*E.3 Crie uma função que recebe vários argumentos do tipo string e imprime todos juntos*/

const imprime = (...args) =>  args.reduce((args1, args2) => args1.concat(args2))

imprime("Olá", ",", " este é um ", "exercício", " em javascript", "!") 
