// Escribe un programa que tome dos números como variables y muestre cuál es el mayor de los dos.

let num1 = parseFloat(prompt("Ingrese el primer número:"));
let num2 = parseFloat(prompt("Ingrese el segundo número:"));


function numMayor(num1, num2) {
    if (num1 > num2) {
        return num1 + " es mayor que " + num2;
    } 
    else if (num2 > num1) {
        return num2 + " es mayor que " + num1;
}
}

resultado = numMayor(num1, num2);
console.log(resultado);


