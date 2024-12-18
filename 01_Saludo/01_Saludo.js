
const saludo = prompt("Dime tu nombre:");

/* console.log("Hola, " + saludo + ", es un gusto conocerte"); */

//Optimizado

const saludoMayusculas = saludo.charAt(0).toUpperCase() + saludo.slice(1)

console.log(`Hola, ${saludoMayusculas} ,  es un gusto conocerte`);