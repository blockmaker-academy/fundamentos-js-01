// Ejercicio 1: Variables y Tipos de Datos

// 1. Declara una variable llamada nombre y asígnale tu nombre.
const nombre = 'Xavier'

// 2.Crea una variable edad y asígnale tu edad actual.
const edad = 50

// 3.Declara una variable esEstudiante y asígnale true si eres estudiante o false si no lo eres.
const esEstudiante = true

// 4.Crea una cadena de texto llamada frase que contenga el siguiente mensaje: "Hola, mi nombre es [nombre] y tengo [edad] años. Soy estudiante: [true/false]."
const mensaje = 'Buenos días, me llamo ' + nombre + ' y tengo ' + edad + ' años'
const frase = 'Hola, mi nombre es ' + nombre + ' y tengo ' + edad + ' años. Soy estudiante: ' + esEstudiante + '.'

// 5. Crea una variable num1 y asígnale un número cualquiera.
const num1 = 33

// 6. Crea otra variable num2 y asígnale otro número.
const num2 = 10

// 7. Realiza las siguientes operaciones:
// Suma num1 y num2 y guarda el resultado en una variable llamada suma.
const suma = num1 + num2
// Resta num1 y num2 y guarda el resultado en una variable llamada resta.
const resta = num1 - num2
// Multiplica num1 por num2 y guarda el resultado en una variable llamada multiplicacion.
const multiplicacion = num1 * num2
// Divide num1 entre num2 y guarda el resultado en una variable llamada division.
const division = num1 / num2

// 9. Muestra por terminal con console.log las variables frase, suma, resta, multiplicacion y division.
console.log(frase)
console.log('Operaciones realizadas con los números : ' + num1 + ' y ' + num2 + ' :')
console.log('Suma: ', suma)
console.log('Resta: ', resta)
console.log('Multiplicación: ', multiplicacion)
console.log('División: ', division)

