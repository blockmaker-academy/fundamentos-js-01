// Ejercicio 3: Operador Ternario y Tipos de Datos

// 1.Crea una variable numero y asígnale un valor numérico cualquiera.
const numero = 13

// 2.Utiliza el operador ternario para asignar a la variable tipoNumero el valor "positivo" si numero es mayor que 0, y "negativo o cero" si no lo es.
const tipoNumero = numero > 0 ? 'positivo' : 'negativo o cero'
console.log('El número es: ' + tipoNumero)

// 3.Declara una variable cadena y asígnale un valor de tipo cadena de texto.
const cadena = 'Hola blockmaker'

// 4.Utiliza el operador ternario para asignar a la variable longitudCadena la longitud de la cadena si su longitud es mayor que 5, y "corta" si no lo es.
const longitudCadena = cadena.length > 5 ? cadena.length : 'corta'
console.log(longitudCadena)

// 5.Crea una función llamada esPar que tome un número como argumento y devuelva true si el número es par, y false si es impar.
function esPar(numero) {
    return numero % 2 == 0? true : false
}

// 6.Utiliza la función esPar para mostrar en la consola si un número específico es par o impar.
console.log('¿Es PAR el número ' + numero + ' ? ' + esPar(numero))
