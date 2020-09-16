//Solicitar un entero y determinar sí es múltiplo de 3 y además que se encuentre en el rango (100-200)
function multiploTres(n){
    if (n%3==0)
    return console.log('El número: '+n,' es múltiplo de 3');
    else
    return console.log('El número: '+n,' no es múltiplo de 3');
}
multiploTres(150)