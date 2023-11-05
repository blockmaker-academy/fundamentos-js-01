// Declara una variable puntuación
const puntuacion = 85

// Condicional if/else
if (puntuacion >= 70) {
    console.log ('Aprobado')
} else {
    console.log ('Reprobado')
}
// Declara una variable 'día'
const dia = 3

// Switch para días de la semana
switch (dia) {
    case 1:
        console.log ('lunes')
        break
    case 2: 
        console.log ('martes')
        break
    case 3:
        console.log ('miércoles')
        break
    case 4: 
        console.log ('jueves')
        break
    case 5:
        console.log('viernes')
        break
    case 6:
        console.log('sábado')
        break
    case 7: 
        console.log('domingo')
        break 
    default:
        console.log('día inválido')    
}
// Declaración de función convertirFahrenheit
function convertirFahrenheit(celsius) {
    return (celsius * 9) / 5 + 32
}

// Utiliza la función convertirFahrenheit
const temperaturaCelsius = 25
const temperaturaFahrenheit = convertirFahrenheit(temperaturaCelsius)
console.log('Temperatura en Fahrenheit: ' + temperaturaFahrenheit)

// Función esPar
function esPar(numero) {
    return numero % 2 === 0
}

// Utiliza la función esPar
const numeroPar = 10
if (esPar(numeroPar)) {
    console.log(numeroPar + ' es par')
} else {
    console.log(numeroPar + 'es impar')
}
