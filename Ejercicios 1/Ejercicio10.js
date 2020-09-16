//Leer tres números, los cuales significan una fecha (día, mes, año). Comprobar que sea válida la fecha, si no es válido que imprima un mensaje de error, y si es válida imprimir el mes con su nombre.
function fecha(d,m,a){
    if (d <= 0 || d > 31) console.log('Día incorrecto');
    if (a <= 0) console.log('Año incorrecto');
    switch (m){
        case 1: console.log('La fecha es:',d,'de Enero del',a) ; break;
        case 2: console.log('La fecha es:',d,'de Febrero del',a) ; break;
        case 3: console.log('La fecha es:',d,'de Marzo del',a) ; break;
        case 4: console.log('La fecha es:',d,'de Abril del',a) ; break;
        case 5: console.log('La fecha es:',d,'de Mayo del',a) ; break;
        case 6: console.log('La fecha es:',d,'de Junio del',a) ; break;
        case 7: console.log('La fecha es:',d,'de Julio del',a) ; break;
        case 8: console.log('La fecha es:',d,'de Agosto del',a) ; break;
        case 9: console.log('La fecha es:',d,'de Septiembre del',a) ; break;
        case 10: console.log('La fecha es:',d,'de Octubre del',a) ; break;
        case 11: console.log('La fecha es:',d,'de Noviembre del',a) ; break;
        case 12: console.log('La fecha es:',d,'de Diciembre del',a) ; break;
        default: 'Mes incorrecto'; break;
    }
}
fecha(32,3,2001)