// Escribe un programa que genere una lista aleatoria de numeros y elimine todos los pares.


function generarListaAleatoria(longitud) {
    let lista = [];
    for (let i = 0; i < longitud; i++) {
      let numeroAleatorio = Math.floor(Math.random() * 100) + 1;
      lista.push(numeroAleatorio);
    }
    return lista;
  }
  
  function eliminarNumerosPares(lista) {
    let listaFiltrada = [];
    for (let i = 0; i < lista.length; i++) {
      if (lista[i] % 2 !== 0) {
        listaFiltrada.push(lista[i]);
      }
    }
    return listaFiltrada;
  }
  

  let longitudLista = 10;
  let listaAleatoria = generarListaAleatoria(longitudLista);
  
  console.log("Lista aleatoria antes de eliminar los pares:");
  console.log(listaAleatoria);
  
    let listaFiltrada = eliminarNumerosPares(listaAleatoria);
  
  console.log("Lista después de eliminar los pares:");
  console.log(listaFiltrada);