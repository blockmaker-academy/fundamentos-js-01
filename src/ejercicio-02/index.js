// Puntuacion

const puntuacion = 85

if (puntuacion >= 70) {
    console.log('Aprobado')
} else{
    console.log('Reprobado')
}

// Día de la semana

const dia = 3

switch(dia) {
    case 1:
        console.log('Lunes')
        break

    case 2:
        console.log('Martes')
        break

    case 3:
        console.log('Miercoles')
        break

    case 4:
        console.log('Jueves')
        break

    case 5:
        console.log('Viernes')
        break

    case 6:
        console.log('Sabado')
        break
    case 7:
        console.log('Domingo')
        break
    
    default:
        console.log('Día inválido')

}

// Fahrenheit

function convertirfahrenheit(celsius) {
    return(celsius * 9) / 5 + 32
}

const temperaturaCelsious = 25
const temperaturaFahrenheit = 

convertirfahrenheit(temperaturaCelsious)
console.log('Temperatura en Fahrenheit: ' + temperaturaFahrenheit)

// Numero Par 

function esPar(numero) {
    return numero % 2 === 0
}

const numeroPar = 10
if (esPar(numeroPar)) {
    console.log(numeroPar + ' es par ')
}else {
    console.log(numeroPar + ' es impar ')
}