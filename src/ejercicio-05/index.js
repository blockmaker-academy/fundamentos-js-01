// 1. Crea una variable `mes` y asígnale un número del 1 al 12.
var mes = 5;

// 2. Utiliza una declaración `switch` para determinar la estación del año.
switch (mes) {
    case 12:
    case 1:
    case 2:
        console.log("Invierno");
        break;
    case 3:
    case 4:
    case 5:
        console.log("Primavera");
        break;
    case 6:
    case 7:
    case 8:
        console.log("Verano");
        break;
    case 9:
    case 10:
    case 11:
        console.log("Otoño");
        break;
    default:
        console.log("Número de mes no válido");
}

// 3. Crea una función llamada `calcularDiasMes`.
function esBisiesto(año) {
    return (año % 4 === 0 && año % 100 !== 0) || año % 400 === 0;
}

function calcularDiasMes(mes, año) {
    switch (mes) {
        case 1: return 31;
        case 2: return esBisiesto(año) ? 29 : 28;  
        case 3: return 31;
        case 4: return 30;
        case 5: return 31;
        case 6: return 30;
        case 7: return 31;
        case 8: return 31;
        case 9: return 30;
        case 10: return 31;
        case 11: return 30;
        case 12: return 31;
        default: return "Número de mes no válido";
    }
}

// 4. Utiliza la función `calcularDiasMes`.
var año = 2020; 
var mes = 2;  
console.log("El mes " + mes + " del año " + año + " tiene " + calcularDiasMes(mes, año) + " días.");