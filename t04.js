// Escribe un programa que calcule el factorial de un número.

let numero = parseInt(prompt("Ingrese un número para calcular su factorial:"));

function calcularFactorial(numero) {
    let factorial = 1;

    for (let i = 1; i <= numero; i++) {
      factorial *= i;
    }
    return factorial;
  }
  
  if (isNaN(numero) || numero < 0) {
    console.log("Por favor, ingrese un número entero que no sea negativo.");
  } else {
    let factorial = calcularFactorial(numero);
    console.log("El factorial de " + numero + " es: " + factorial);
  }