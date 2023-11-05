// Variable hora
const hora = 15

// Condicionales anidados para determinar el momento del día
if (hora < 12) {
    console.log('Buenos días')
} else if (hora >= 12 && hora < 18) {
    console.log('Buenas tardes')
} else {
    console.log('Buenas noches')
}

// Función esMayorDeEdad
function esMayorDeEdad(edad) {
    return edad >=18
}

// Condicionales anidados con operador lógico para verificar mayor de edad y estudiante
const esEstudiante = 20
const edadPersona = 20

if (esMayorDeEdad(edadPersona) && esEstudiante) {
    console.log('Es mayor de edad y estudiante')
} else {
    console.log('No cumple ambas condiciones')
}

// Función esVocal
function esVocal(letra) {
    const vocales = 'aeiouAEIOU'
    return vocales.includes(letra)
}

// Utiliza la función esVocal
const letraCaracter = 'A'

if (esVocal(letraCaracter)) {
    console.log(letraCaracter + ' es una vocal')
} else {
    console.log(letraCaracter + ' no es una vocal')
}