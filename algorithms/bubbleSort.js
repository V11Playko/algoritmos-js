/**
 * Complejidad Temporal -> O( n²)
 * Complejidad Espacial -> O( n  )
 * Espacio Auxiliar -> O( 1 )
 */
 function bubbleSort(arreglo) {
    let longitud = arreglo.length; // O(1)
    for (let i = 0; i < longitud; i++) { // O(n)
      for (let j = 0; j < longitud; j++) { // O(n)
        if (arreglo[j] > arreglo[j + 1]) { // O(1)
          let temporal = arreglo[j]; // O(1)
          arreglo[j] = arreglo[j + 1]; // O(1)
          arreglo[j + 1] = temporal; // O(1)
        }
      }
    }
    return arreglo; // O(1)
  }