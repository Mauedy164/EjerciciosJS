const sumaBtn = document.querySelector(".suma");
const restaBtn = document.querySelector(".resta");
const multiplicacionBtn = document.querySelector(".multiplicacion"); 
const divisionBtn = document.querySelector(".division");
const igualBtn = document.querySelector(".igual");

const num1Input = document.getElementById("numero-1");
const num2Input = document.getElementById("numero-2");
const resultadoElement = document.querySelector(".final-result"); 

sumaBtn.addEventListener("click", () => {
  calcular('suma');
});

restaBtn.addEventListener("click", () => {
  calcular('resta');
});

multiplicacionBtn.addEventListener("click", () => {
  calcular('multiplicacion');
});

divisionBtn.addEventListener("click", () => {
  calcular('division');
});

igualBtn.addEventListener("click", () => {
  calcular(operacionSeleccionada); 
});

let operacionSeleccionada;

function calcular(operacion) {
  const num1 = parseFloat(num1Input.value);
  const num2 = parseFloat(num2Input.value);

  if (isNaN(num1) || isNaN(num2)) {
    resultadoElement.textContent = "Error: Ingrese números válidos.";
    return;
  }

  let resultado;

  switch (operacion) {
    case 'suma':
      resultado = num1 + num2;
      break;
    case 'resta':
      resultado = num1 - num2;
      break;
    case 'multiplicacion':
      resultado = num1 * num2;
      break;
    case 'division':
      if (num2 === 0) {
        resultado = "Error: No se puede dividir por cero.";
      } else {
        resultado = num1 / num2;
      }
      break;
    default:
      resultado = "Operación no válida.";
  }

  resultadoElement.textContent = resultado;
  operacionSeleccionada = operacion; 
}