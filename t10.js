// Escriba un programa que tome dos números base y altura para calcular el area de un triángulo.


function calcularAreaTriangulo(base, altura) {
    return (base * altura) / 2;
  }
  
  let base = parseFloat(prompt("Ingrese la longitud de la base del triángulo:"));
  let altura = parseFloat(prompt("Ingrese la altura del triángulo:"));
  
  if (isNaN(base) || isNaN(altura) || base <= 0 || altura <= 0) {
    console.log("Por favor, ingrese valores válidos para la base y la altura del triángulo.");
  } else {

    let area = calcularAreaTriangulo(base, altura);
    console.log("El área del triángulo con base " + base + " y altura " + altura + " es: " + area);
  }