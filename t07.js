// Escribe un programa que tome un string como entrada y cuente el número de vocales que contiene.



let texto = prompt("Ingrese una cadena de texto:");

function esVocal(caracter) {
    caracter = caracter.toLowerCase();
    return caracter === 'a' || caracter === 'e' || caracter === 'i' || caracter === 'o' || caracter === 'u';
  }
  

  function contarVocales(texto) {
    let contador = 0;

    for (let i = 0; i < texto.length; i++) {
      if (esVocal(texto[i])) {
        contador++;
      }
    }
    return contador;
  }

  let numeroVocales = contarVocales(texto)
  console.log("El número de vocales en la cadena es: " + numeroVocales);