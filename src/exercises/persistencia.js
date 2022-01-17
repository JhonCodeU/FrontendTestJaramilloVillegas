// La persistencia de un número entero equivale al número de veces
// que hay que multiplicar sus dígitos hasta alcanzar un solo dígito.
// De esta forma, la persistencia de 715 se calcula multiplicando cada
// dígito del número entre sí. Es decir, 7 * 1 * 5 = 35. Como 35 no
// tiene un solo dígito se debe continuar multiplicando los dígitos de
// 35 entre sí. Es decir 3 * 5 = 15. De igual forma 15 no tiene un solo
// dígito, se continúa multiplicando los dígitos de 15 entre sí.

// Es Decir 1 * 5 = 5. Como 5 si tiene un solo dígito, no se multiplica
// mas y se cuentan las veces que fue necesario multiplicar los
// dígitos de cada valor resultante para obtener un número de un
// solo dígito, que en este caso fueron 3 veces. Por lo tanto, la
// La persistencia de 715 es 3. Defina una función (En el lenguaje de su
// preferencia) que calcule la persistencia de un número entero dado

// Inicializar contador
var contador = 0;
/**
 *
 * @param {num} numerico recibe una variable de tipo numerico
 * @returns {Object} Retorna un Objeto con el numero y la persistencia
 */
function persistencia(num) {
  // comvertir num a string y separar en un array
  var numString = num.toString();
  var numArray = numString.split("");
  // multiplicar valores dentro del array
  let result = numArray.reduce((a, b) => a * b);
  // Si el resultado es mayor a 2 digitos ejecutar de nuevo la function
  if (result.toString().length > 1) {
    contador++;
    persistencia(result);
    return { result: result, persistencia: contador };
  } else {
    contador++;
    return { result: result, persistencia: contador };
  }
}

const num = 715; // 3
const result = persistencia(num);
console.log(
  "El numero " + num + " tiene una persistencia de: " + result.persistencia
);
