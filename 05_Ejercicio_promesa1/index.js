/* 
Crea una promesa que simule tirar un dado.
La promesa debe resolverse con un número aleatorio entre 1 y 6 después de 1 segundo.
Maneja el resultado de la promesa para mostrar el número obtenido.
*/ 
function numeroAleatorio(minimo,maximo){
    return Math.floor(Math.random()* (maximo-minimo + 1)) + 1;
}

const dado = new Promise ((resolve) => {
    setTimeout(()=>{
        let giraDado = numeroAleatorio(1,6);
        resolve(giraDado);
    }, 1000)
})

dado.then((resultado)=>{
    console.log(resultado)
})

/* 
Crea una promesa que simule una petición a una API para obtener una lista de usuarios.
Luego, crea otra promesa que tome el primer usuario de la lista y simule una petición a otra API para obtener sus detalles.
Maneja el resultado final para mostrar los detalles del usuario.
*/

/* Crea una promesa que simule el proceso de pedir un archivo.
Si el nombre del archivo es "documento.txt", la promesa debe cumplirse y devolver el mensaje "Archivo encontrado."
En caso contrario, debe rechazarse con el mensaje "Archivo no encontrado." */

//Variables
const documento = "documento.xls"

//Código

const solicitudDoc = new Promise((resolve, reject) => {
    if (documento === "documento.txt") {
        resolve("Archivo encontrado")
    } else {
        reject("Archivo no encontrado")
    }
})

solicitudDoc.then((chorizo) =>{
    console.log(chorizo);
}).catch((taco) => {
    console.log(taco)
});

/* Crea una función que devuelva una promesa para verificar si un número es par.

Si el número es par, la promesa debe cumplirse con el mensaje "Es par."
Si es impar, la promesa debe rechazarse con el mensaje "Es impar."
Llama a la función con un número y maneja tanto el éxito como el error con .then y .catch.*/

function parImpar(num) {
    return new Promise((resolve, reject) => {
        if (num%2 === 0) {
            resolve("Es par")
        } else {
            reject("Es impar")
        }
    })
}

parImpar(8).then((respuesta) => {
    console.log(respuesta)
}).catch((error) => {
    console.log(error)
})

/* Simulación de API de usuarios
Crea una función que devuelva una promesa para simular la obtención de un usuario desde una "base de datos".

Si el ID del usuario es 1, la promesa debe cumplirse con un objeto { id: 1, nombre: "Juan Pérez" }.
Si el ID no es 1, la promesa debe rechazarse con el mensaje "Usuario no encontrado".
Después, usa esta promesa para imprimir en consola el nombre del usuario si es encontrado, o el mensaje de error si no. */

const usuarios = {id:1,
    nombre: "Juan Perez"
}

function validarUsuario(identidad) {
    return new Promise ((resolve, reject) => {
        if (identidad === 1) {
            resolve(usuarios)
        } else {
            reject("Usuario no encontrado")
        }
    })
}

validarUsuario(1).then((respuesta) =>{
    console.log(respuesta)
}).catch((error) => {
    console.log(error)
})

validarUsuario(2).then((respuesta) =>{
    console.log(respuesta)
}).catch((error) => {
    console.log(error)
})


/* Llamadas encadenadas
Crea dos funciones basadas en promesas:

generarNumeroAleatorio: Devuelve un número aleatorio entre 1 y 100 después de 2 segundos.
esMayorQue50: Recibe un número y devuelve una promesa que:
Se resuelve con el mensaje "El número es mayor que 50" si el número es mayor que 50.
Se rechaza con el mensaje "El número es 50 o menor" si el número no cumple con la condición.
Encadena ambas funciones para:

Generar el número aleatorio.
Evaluar si es mayor que 50.
Imprimir el mensaje correspondiente en la consola. */

function generarNumeroAleatorio() {
    Math.floor(Math.random()*(100-1+1))+1
}



function esMayorQue50(){
    return new Promise ((resolve,reject)=> {
        const numeroAleatorio = setTimeout(generarNumeroAleatorio,2000)
        console.log(numeroAleatorio)
        if (numeroAleatorio >= 50) {
            resolve("El número es mayor que 50")
        } else {
            reject("El número es menor que 50")
        }
    })
}

esMayorQue50().then((respuesta)=>{
    console.log(respuesta)
}).catch((error)=>{
    console.log(error)
})