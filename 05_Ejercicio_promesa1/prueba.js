function saludar() {
    console.log("¡Hola! Esto se mostrará después de 2 segundos.");
  }
  
  setTimeout(saludar, 2000); // 2000 milisegundos = 2 segundos

const num=0;

  function generarNumeroAleatorio() {
    num = Math.floor(Math.random()*(100-1+1))+1
    console.log(num)
}

setTimeout(generarNumeroAleatorio,1000)

