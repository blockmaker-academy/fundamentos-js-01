// 1. variable hora
 let hora = 1;

// 2.Condicional anidado
 if (hora < 12) {
    console.log("Buenos días");
 } else if (hora <18) {
    console.log("Buenas tardes");
} else {
    console.log("Buenas noches");
}

// 3. Función MayorDeEdad
function esMayorDeEdad(edad) {
    return edad === 18 || edad >18;
}
const edadUsuario = 17;
console.log(`El usuario con edad ${edadUsuario} es mayor de edad: ` , esMayorDeEdad(edadUsuario))

// 4. Mayor de edad y Estudiante
let edadPersona = 23
let esEstudiante = false

if (esMayorDeEdad(edadPersona) && esEstudiante) {
    console.log(`La Persona con ${edadPersona} es mayor de edad: `, esMayorDeEdad(edadPersona), `, Además esta persona tambén es estudiante: `, esEstudiante);
} else {
    console.log(`Esta persona no cumple ambos requisitos: ser mayor de edad y estudiante`);
}

// 5. Función esVocal
function esVocal(letra) {
    let vocales = "aeiouAEIOU"
    return vocales.includes(letra)
}

// 6. Usar función esVocal
let letra = "b"
let vocal = "U"
console.log(`la letra ${letra} es vocal: `, esVocal(letra))
console.log(`la letra ${vocal} es vocal: `, esVocal(vocal))
