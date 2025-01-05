const num1 = document.getElementById("num-1");
const comprobar = document.getElementById("boton")
let comprobacion = document.getElementById("resultado");


function parImpar(){
    const valor = num1.value;
    impar = valor % 2;
    if (impar !== 0) {
       resultado = "Tu numero es: Impar"
    }  else {
        resultado = "Tu núemor es: Par"
    }
    comprobacion.textContent = resultado;
}

comprobar.addEventListener("click", parImpar);