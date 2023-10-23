// Ejercicio 3: Operador Ternario y Tipos de Datos

// 1. Variable `numero`.
const numero = 15

// 2. Operador ternario para asignar `tipoNumero`.
const tipoNumero = numero > 0 ? 'positivo' : 'negativo o cero'
console.log('El número es ' + tipoNumero)

// 3. Variable `cadena`.
const cadena = 'Hola Mundo'

// 4. Operador ternario para asignar `longitudCadena`.
const longitudCadena = cadena.length > 5 ? 'larga' : 'corta'
console.log('La cadena es ' + longitudCadena)

// 5. Función esVocal.
function esVocal(letra) {
  const vocales = 'aeiouAEIOU'
  return vocales.includes(letra)
}

// 6. Utiliza la función esVocal.
const caracter = 'e'
if (esVocal(caracter)) {
  console.log(caracter + ' es una vocal')
} else {
  console.log(caracter + ' no es una vocal')
}