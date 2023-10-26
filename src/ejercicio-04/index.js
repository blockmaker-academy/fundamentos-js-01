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

