// 1. Varaible mes
let mes = 9;

// 2. Declaración Switch
let nombreMes;
let estacionDelAño

switch (mes) {
    case 1:
    case 2:
        estacionDelAño = "Invierno";
        break;
    case 3:
        estacionDelAño = "Invierno hasta 21 de marzo y Primavera el resto del mes.";
        break;
    case 4:
    case 5:
        estacionDelAño = "Primavera";
        break;
    case 6:
        estacionDelAño = "Primavera hasta 21 de junio y Verano el resto del mes.";
        break;
    case 7:
    case 8:
        estacionDelAño = "Verano";
        break;
    case 9:
        estacionDelAño = "Verano hasta 23 de septiembre y Otoño el resto del mes.";
        break;
    case 10:
    case 11:
        estacionDelAño = "Otoño";
        break;
    case 12:
        estacionDelAño = "Otoño hasta 22 de diciembre e Invireno el resto del mes.";
        break;
    default:
        estacionDelAño = `El número de mes introducido (mes: ${mes}) no es válido`;
    
}
console.log(`Según el número de mes (mes: ${mes}) introducido estamos en: ` , estacionDelAño);

// 3. Función calcularDiaMes

function calcularDiasMes (mes) {
    switch (mes) {
        case 1:
        case 3:
        case 5:
        case 7:
        case 8:
        case 10:
        case 12:
            return "31 días";
            break;
        case 2:
            return "28 días; 29 días en años bisiestos";
            break;
        case 4:
        case 6:
        case 9:
        case 11:
            return "30 días";
            break;
        default:
            return `El número de mes (mes: ${mes}) introducido no es válido`;
            break;
    }
}

console.log(`Según el número de mes introducido (mes: ${mes}) se trata de un mes con: `, calcularDiasMes(mes))

// 4. Consola 

let mesEspecifico = 2

console.log(`El mes indicado (mes: ${mesEspecifico}) tiene: ` , calcularDiasMes(mesEspecifico))

