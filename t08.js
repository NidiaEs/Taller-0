// Escribe un programa JavaScript que genere un número aleatorio entre 1 y 10 y le pida al usuario que lo adivine. El programa debe dar pistas al usuario si su suposición es demasiado alta o demasiado baja hasta que logre adivinar el número correcto.


let numeroAleatorio = Math.floor(Math.random() * 10) + 1;
let intentos = 0;
let adivinado = false;

while (!adivinado) {
  let suposicion = parseInt(prompt("Adivina el número entre 1 y 10:"));

  intentos++;

  if (suposicion === numeroAleatorio) {
    alert("¡Felicidades! Adivinaste el número " + numeroAleatorio + " en " + intentos + " intentos.");
    console.log("¡Felicidades! Adivinaste el número " + numeroAleatorio + " en " + intentos + " intentos.");
    adivinado = true;
  } else if (suposicion < numeroAleatorio) {
    alert("El número es demasiado bajo. Intenta nuevamente.");
    console.log("El número es demasiado bajo. Intenta nuevamente.");
  } else {
    alert("El número es demasiado alto. Intenta nuevamente.");
    console.log("El número es demasiado alto. Intenta nuevamente.");
  }
}








