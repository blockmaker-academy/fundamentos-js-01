// 1. Crea una variable `hora` y asígnale un valor.
var hora = 15;

// 2. Utiliza condicionales anidados.
if (hora < 12) {
    console.log("Buenos días");
} else if (hora >= 12 && hora < 18) {
    console.log("Buenas tardes");
} else {
    console.log("Buenas noches");
}

// 3. Crea una función llamada `esMayorDeEdad`.
function esMayorDeEdad(edad) {
    return edad >= 18;
}

// 4. Utiliza la función `esMayorDeEdad` y el operador lógico `&&`.
var edadPersona = 20;  
var esEstudiante = true;

if (esMayorDeEdad(edadPersona) && esEstudiante) {
    console.log("La persona es mayor de edad y estudiante");
} else {
    console.log("La persona no es mayor de edad o no es estudiante");
}

// 5. Crea una función llamada `esVocal`.
function esVocal(letra) {
    var vocales = ['a', 'e', 'i', 'o', 'u', 'A', 'E', 'I', 'O', 'U'];
    return vocales.includes(letra);
}

// 6. Utiliza la función `esVocal`.
var caracter = 'E';
if (esVocal(caracter)) {
    console.log("El carácter " + caracter + " es una vocal");
} else {
    console.log("El carácter " + caracter + " no es una vocal");
}