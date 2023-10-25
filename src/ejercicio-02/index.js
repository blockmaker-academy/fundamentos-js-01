// Ejercicio 2: Operadores y Condicionales

// 1.Declara una variable puntuacion y asígnale un valor entre 0 y 100 para representar una calificación.
const puntuacion = 71

// 2.Utiliza un condicional if para verificar si la puntuacion es mayor o igual a 70. Si es verdadero, muestra en la consola "Aprobado", de lo contrario, muestra "Reprobado".
if (puntuacion > 70) {
    console.log('Aprobado')
} else {
    console.log('Reprobado')
}

// 3.Declara una variable dia y asígnale un número del 1 al 7 para representar un día de la semana (1: Lunes, 2: Martes, ..., 7: Domingo).
const dia = 0

// 4.Utiliza una estructura switch para mostrar en la consola el nombre del día correspondiente al número asignado a dia.
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
        console.log('Día de la semana incorrecto')
}

// 5.Declara una variable temperatura y asígnale un valor en grados Celsius.
const temperatura = 25

// 6.Crea una función llamada convertirFahrenheit que tome la temperatura en grados Celsius como argumento y devuelva la temperatura equivalente en grados Fahrenheit utilizando la fórmula: (C × 9/5) + 32.
function convertirFahrenheit (tempCelsius) {
    return (tempCelsius * 9) / 5 + 32
}

// 7.Utiliza la función convertirFahrenheit para mostrar la temperatura en grados Fahrenheit en la consola.
console.log('La temperatura en grados Fahrenheit de ' + temperatura + ' grados Celsius es: ' + convertirFahrenheit(temperatura) + ' grados F')

