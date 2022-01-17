// Se tiene una matriz de 9 x 9, con números enteros entre 1 y 9, se

const matriz = [
  [1, 3, 3, 4, 5, 6, 7, 8, 9],
  [3, 3, 7, 8, 6, 4, 1, 9, 5],
  [4, 5, 6, 7, 8, 9, 3, 3, 1],
  [9, 6, 3, 1, 3, 5, 4, 7, 8],
  [3, 8, 1, 9, 7, 3, 6, 5, 4],
  [5, 7, 4, 6, 3, 8, 9, 1, 2],
  [8, 1, 9, 5, 4, 2, 3, 6, 7],
  [6, 4, 5, 3, 1, 7, 8, 2, 9],
  [7, 3, 2, 8, 9, 1, 5, 4, 6],
];

// requiere que defina una función en el lenguaje que desee, que
// determine la cantidad de columnas que poseen un número, dado,
// más de 3 veces.

//In process
function cantidadColumnasMatriz(num) {
  let cantidad = 0;
  for (let i = 0; i < matriz.length; i++) {
    for (let j = 0; j < matriz[i].length; j++) {
      if (matriz[i][j] === num) {
        cantidad++;
      }
    }
  }
  if (cantidad >= 3) {
    return "Este numeros se repite " + cantidad + " veces en la matriz";
  } else {
    return "Este numeros no se repite mas de 3 veces en la matriz";
  }
}

const result = cantidadColumnasMatriz(2);
console.log(result);
