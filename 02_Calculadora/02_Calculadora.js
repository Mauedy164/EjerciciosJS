
const operacion = prompt("¿Qué operación quieres realizar? 1: Suma, 2: Resta, 3:Multiplicación, 4: División");
const valor1 = parseInt(prompt("Ingresa el primer valor: "));
const valor2 = parseInt(prompt("Ingresa el segundo valor"));
let resultado = 0;



switch (operacion) {
    case "1":
        alert("Elegiste sumar");
        resultado = valor1 + valor2;
        break;
    case "2":
        alert("Elegiste resta");
        resultado = valor1 - valor2;
        break;
    case "3":
        alert("Elegiste multiplicar");
        resultado = valor1 * valor2;
        break;
    case "4":
        if (valor2 === 0) {
            alert("El valor 2 no puede ser igual a cero")
        } else {
            alert("Elegiste dividir");
            resultado = valor1 / valor2;
        }
        break;
    default:
        alert("Ingresa un valor válido")
        break;
}

alert(`El resultado es: ${resultado}`)