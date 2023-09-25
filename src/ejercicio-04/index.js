// 1. Crea una variable hora y asígnale un valor numérico que represente una hora del día (en formato de 24 horas).
let hora = 22

// 2. Utiliza condicionales anidados para mostrar en la consola un mensaje que indique el momento del día: "Buenos días" si la hora es menor a 12, "Buenas tardes" si la hora es mayor o igual a 12 y menor a 18, y "Buenas noches" si es igual o mayor a 18.
if (hora<12) {
    console.log('Buenos dias')
}
    else if (hora >= 12 && hora< 18) {
        console.log('Buenas tardes')
    }
else {
    console.log('Buenas noches')
}

// 3. Crea una función llamada esMayorDeEdad que tome la edad como argumento y devuelva true si la edad es mayor o igual a 18, y false si es menor.

let edad = 22
function esMayorDeEdad(edad) {
    return edad >= 18
}
console.log(esMayorDeEdad(edad))

// 4. Utiliza la función esMayorDeEdad y el operador lógico && para mostrar en la consola si una persona es mayor de edad y estudiante o no.

function esEstudiante(edad) {
    return edad <25
}
if (esMayorDeEdad(edad) && esEstudiante (edad) ) {
    console.log ('es mayor de edad y estuduante')
}
else {
    console.log ('la persona no cumple una de las condiciones')
}

// 5. Crea una función llamada esVocal que tome una letra como argumento y devuelva true si la letra es una vocal (mayúscula o minúscula), y false si no lo es.

function esVocal(letra) {
    let vocales = 'aeiouAEIOU'
    return vocales.includes(letra)
}

// 6. Utiliza la función esVocal para mostrar en la consola si un carácter específico es una vocal.

let letra='a'

if(esVocal(letra)){
    console.log('la letra '+(letra)+' es una vocal')
}
else{
    console.log('la letra '+(letra)+' no es una vocal')
}

