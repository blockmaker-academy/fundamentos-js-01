**Ejercicio 3: Operador Ternario y Tipos de Datos**

1. Crea una variable `numero` y asígnale un valor numérico cualquiera.

2. Utiliza el operador ternario para asignar a la variable `tipoNumero` el valor "positivo" si `numero` es mayor que 0, y "negativo o cero" si no lo es.

3. Declara una variable `cadena` y asígnale un valor de tipo cadena de texto.

4. Utiliza el operador ternario para asignar a la variable `longitudCadena` indicar que la cadena es "larga" si su longitud es mayor que 5, y "corta" si no lo es.

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
```
