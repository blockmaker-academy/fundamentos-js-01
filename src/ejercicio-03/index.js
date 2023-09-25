// 1. Crea una variable numero y asígnale un valor numérico cualquiera.
let numero = 49

// 2. Utiliza el operador ternario para asignar a la variable tipoNumero el valor "positivo" si numero es mayor que 0, y "negativo o cero" si no lo es.
let tipodeNumero = numero>0 ? 'positivo' : 'negativo o cero'
console.log(`El número es ${tipodeNumero}`)

// 3. Declara una variable cadena y asígnale un valor de tipo cadena de texto.
let cadena = 'Hola Mundo'

// 4. Utiliza el operador ternario para asignar a la variable longitudCadena la longitud de la cadena si su longitud es mayor que 5, y "corta" si no lo es.
longitudCadena = cadena.length > 5? 'Larga':'Corta'
console.log(`La cadena es ${longitudCadena}`)

// 5. Crea una función llamada esPar que tome un número como argumento y devuelva true si el número es par, y false si es impar.
function esPar(valor) {
    return valor%2==0
}

// 6. Utiliza la función esPar para mostrar en la consola si un número específico es par o impar.

let valor =13
let numero_par = esPar(valor)?'el numero es par':'el numero es impar'
console.log(numero_par)

