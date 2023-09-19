// Ejercicio 3: Operador Ternario y Tipos de Datos

// 1. Variable `numero`.
let numero = 15

// 2. Operador ternario para asignar `tipoNumero`.
let tipoNumero = numero > 0 ? 'positivo' : 'negativo o cero'
console.log(`El número es ${tipoNumero}`)

// 3. Variable `cadena`.
let cadena = 'Hola Mundo'

// 4. Operador ternario para asignar `longitudCadena`.
let longitudCadena = cadena.length > 5 ? 'larga' : 'corta'
console.log(`La cadena es ${longitudCadena}`)

// 5. Función esVocal.
function esVocal(letra) {
  let vocales = 'aeiouAEIOU'
  return vocales.includes(letra)
}

// 6. Utiliza la función esVocal.
let caracter = 'e'
if (esVocal(caracter)) {
  console.log(`${caracter} es una vocal`)
} else {
  console.log(`${caracter} no es una vocal`)
}
