## Ejercicio 2: Operadores y Condicionales

1. Declara una variable `puntuacion` y asígnale un valor entre 0 y 100 para representar una calificación.

2. Utiliza un condicional `if` para verificar si la `puntuacion` es mayor o igual a 70. Si es verdadero, muestra en la consola "Aprobado", de lo contrario, muestra "Reprobado".

3. Declara una variable `dia` y asígnale un número del 1 al 7 para representar un día de la semana (1: Lunes, 2: Martes, ..., 7: Domingo).

4. Utiliza una estructura `switch` para mostrar en la consola el nombre del día correspondiente al número asignado a `dia`.

5. Crea una función llamada `convertirFahrenheit` que tome la `temperatura` en grados Celsius como argumento y devuelva la temperatura equivalente en grados Fahrenheit utilizando la fórmula: `(C × 9/5) + 32`.

6. Utiliza la función `convertirFahrenheit` para mostrar la temperatura en grados Fahrenheit en la consola.

7. Crea una funcion llamada `esPar` que tome un numero como argumento y devuelva true o false si el numero es par. Puedes utilizar el operador modulo `%` para ver si tiene resto la operación y saber si es par o no.

8. Utiliza la función esPar

```javascript
// Ejercicio 2: Operadores y Condicionales

// 1. Declara una variable `puntuacion`.
const puntuacion = 85

// 2. Condicional if/else.
if (puntuacion >= 70) {
  console.log('Aprobado')
} else {
  console.log('Reprobado')
}

// 3. Declara una variable `dia`.
const dia = 3

// 4. Switch para días de la semana.
switch (dia) {
  case 1:
    console.log('Lunes')
    break
  case 2:
    console.log('Martes')
    break
  case 3:
    console.log('Miércoles')
    break
  case 4:
    console.log('Jueves')
    break
  case 5:
    console.log('Viernes')
    break
  case 6:
    console.log('Sábado')
    break
  case 7:
    console.log('Domingo')
    break
  default:
    console.log('Día inválido')
}

// 5. Declaración de función convertirFahrenheit.
function convertirFahrenheit(celsius) {
  return (celsius * 9) / 5 + 32
}

// 6. Utiliza la función convertirFahrenheit.
const temperaturaCelsius = 25
const temperaturaFahrenheit = convertirFahrenheit(temperaturaCelsius)
console.log('Temperatura en Fahrenheit: ' + temperaturaFahrenheit)

// 7. Función esPar.
function esPar(numero) {
  return numero % 2 === 0
}

// 8. Utiliza la función esPar.
const numeroPar = 10
if (esPar(numeroPar)) {
  console.log(numeroPar + ' es par')
} else {
  console.log(numeroPar + ' es impar')
}
```
