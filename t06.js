// Escribe un programa que tome como entrada tus nombres y apellidos completos y cuente cuantos caracteres tiene, sin tener en cuenta los espacios.
  

let nombreCompleto = prompt("Ingrese sus nombres y apellidos completos:");

function contarNombreSinEspacios(nombreCompleto) {
    let contador = 0;

    for (let i = 0; i < nombreCompleto.length; i++) {
   
      if (nombreCompleto[i] !== ' ') {   
        contador++;
      }
    }
    return contador;
  }
  

  let caracteresSinEspacios = contarNombreSinEspacios(nombreCompleto);
  console.log("El número de caracteres sin contar espacios es: " + caracteresSinEspacios);