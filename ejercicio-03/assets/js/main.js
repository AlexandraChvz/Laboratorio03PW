const calculateFactorial = (numero) => {
  var total = 1;
  for (i=1; i<=numero; i++) {
    total = total * i;
  }
  return total;
}

const requestNumber = (promptText) => {
  let num;
  do {
    num = parseFloat(prompt(promptText));
  } while (isNaN(num));
    return num;
};

const main = () => {
  let numero = requestNumber("Introduce un numero entero no negativo para calcular su factorial :");
  let resultado = calculateFactorial(numero);
  alert("El factorial de " + numero + " es: " + resultado);
}

main();
