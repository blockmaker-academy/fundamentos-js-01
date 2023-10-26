//Readme 1.
const puntuacion = 75;

//Readme 2.
if (puntuacion >= 70) {
    console.log("Aprobado");
} else{
    console.log("Reprobado");
}

//Readme 3 y 4. Solución A
const dia = 1;

switch (dia) {
    case 1:
        console.log("Lunes")
        break
    case 2:
        console.log("Martes")
        break
    case 3:
        console.log("Miércoles")
        break
    case 4:
        console.log("Jueves")
        break
    case 5:
        console.log("Viernes")
        break
    case 6:
        console.log("Sábado")
        break
    case 7:
        console.log("Domingo")
        break
    default:
        console.log("Día inválido")
}

//Readme 3 y 4. Solución B
let diaSemana = 3;
let nombreDia;
switch (diaSemana) {
    case 1:
        nombreDia = "Lunes";
        break;

    case 2:
        nombreDia = "Martes";
        break;
    case 3:
        nombreDia = "Miércoles";
        break;
    case 4 :
        nombreDia = "Jueves";
        break;
    case 5:
        nombreDia = "Viernes";
        break;
    case 6:
        nombreDia = "Sábado";
        break;
    case 7:
        nombreDia = "Domingo"
        break;
    default:
        nombreDia = "Día no válido";
}
console.log(`El número indicado (${diaSemana}) se corresponde con del día: ` , nombreDia)

// Readme 5 y 6
const temperaturaCelsius = 24

function convertirGradosFarenheit (temperaturaCelsius) {
    console.log(`${temperaturaCelsius}ºC se corresponden con ${temperaturaCelsius*9/5+32}ºF`);
}
convertirGradosFarenheit(temperaturaCelsius);

// Readme 5 y 6 (Extra). Alternativa a llamar a la función:
temperaturaFarenheit = convertirGradosFarenheit(temperaturaCelsius);

// Readme 7
function esPar (numero) {
    return numero % 2 === 0
}

// Readme 8
const numeroPar = 15
console.log(`El número ${numeroPar} es par: ` , esPar(numeroPar))
