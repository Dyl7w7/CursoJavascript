//Solicitar la introducción de 2 números reales y una operación (+, -, *, /), y mostrar por pantalla el resultado de la operación introducida.
function operation(n1,n2,op){
    if (op === '+') {console.log('La suma es: ',n1+n2)
}else if (op === '-') {console.log('La resta es: ',n1-n2)
}else if (op === '/') {console.log('La división es: ',n1/n2)
}else if (op === '*') {console.log('La multiplicación es:',n1*n2)
}}
operation(4,1,'-')