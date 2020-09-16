/*Elaborar un algoritmo para calcular el promedio final de una materia. Dicha calificación se compone de los siguientes porcentajes:
a. 55% del promedio final de sus 3 calificaciones parciales
b. 30% de la calificación de promedio
c. 15% de la calificación de un trabajo final
*/
function promedio(p1,p2,p3,calpro,caltra){
    var p55 = (((p1+p2+p3)/3) * 0.55);
    var p30 = (calpro * 0.3);
    var p15 = (caltra * 0.15);
    var final = (p55+p30+p15);
    console.log('El promedio final es: ',final);
}
promedio(5,4,5,4,3)
