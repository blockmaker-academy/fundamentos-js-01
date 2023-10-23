**Ejercicio 3: Operador Ternario y Tipos de Datos**

1. Crea una variable `numero` y asígnale un valor numérico cualquiera.

2. Utiliza el operador ternario para asignar a la variable `tipoNumero` el valor "positivo" si `numero` es mayor que 0, y "negativo o cero" si no lo es.

3. Declara una variable `cadena` y asígnale un valor de tipo cadena de texto.

4. Utiliza el operador ternario para asignar a la variable `longitudCadena` la longitud de la cadena si su longitud es mayor que 5, y "corta" si no lo es.

5. Crea una función llamada `esPar` que tome un número como argumento y devuelva `true` si el número es par, y `false` si es impar.

6. Utiliza la función `esPar` para mostrar en la consola si un número específico es par o impar.

```javascript
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
```
