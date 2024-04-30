// Escribe un programa que realice las operaciones básicas de suma, resta, multiplicación y división. El programa debe solicitar al usuario dos números y la operación que desea realizar.

function calcularOperacion(numero1, numero2, operacion) {
    let resultado;

    switch (operacion) {
      case '+':
        resultado = numero1 + numero2;
        break;
      case '-':
        resultado = numero1 - numero2;
        break;
      case '*':
        resultado = numero1 * numero2;
        break;
      case '/':
        if (numero2 !== 0) {
          resultado = numero1 / numero2;
        } else {
          resultado = "Error: división por cero";
        }
        break;
      default:
        resultado = "Operación no válida";
    }
    return resultado;
  }
  
  let numero1 = parseFloat(prompt("Para realizar una operacion, ingrese el primer número:"));
  let numero2 = parseFloat(prompt("Ingrese el segundo número:"));
  let operacion = prompt("Ingrese la operación que desea realizar (+, -, *, /):");
  
  if (isNaN(numero1) || isNaN(numero2)) {
    console.log("Por favor, ingrese números válidos.");
  } else {
    let resultado = calcularOperacion(numero1, numero2, operacion);
    console.log("El resultado de la operación es:", resultado);
  }