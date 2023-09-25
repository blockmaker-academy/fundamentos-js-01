// 1. Crea una variable mes y asígnale un número del 1 al 12 para representar un mes del año.
let mes = 4
// 2. Utiliza una declaración switch para mostrar en la consola la estación del año correspondiente al mes asignado.
switch (mes) {
    case 12:
    case 2:
    case 1:
        console.log('Invierno')
        break
    case 4:
    case 5:
    case 3:
        console.log('Primavera')
        break
    case 6:
    case 7:
    case 8:
        console.log('Verano')
        break
    case 9:
    case 10:
    case 11:
        console.log('Otoño')
        break

    default:
        console.log('mes invalido')
}

// 3. Declara una variable producto y asígnale un valor numérico del 1 al 5 para representar un producto.
let producto = 3

// 4. Utiliza una declaración switch para mostrar en la consola el nombre del producto correspondiente al número asignado a producto.
switch (producto) {
    case 1:
        console.log('Agua')
        break
    case 2:
        console.log('fanta')
        break
    case 3:
        console.log('coca-cola')
        break
    case 4:
        console.log('Arroz')
        break
    case 5:
        console.log('Vino')
        break

    default:
        break;
}

// 5. Crea una función llamada calcularDiasMes que tome un número mes como argumento y devuelva la cantidad de días que tiene ese mes. Utiliza una declaración switch para calcular los días de cada mes.

function calcularDiasMes(mes) {
    switch (mes) {
        case 1:
        case 3:
        case 5:
        case 7:
        case 8:
        case 10:
        case 12:
            return 31
            break
        case 2:
            return 28
            break
        
        default:
            return 30
            break;
    }
    
}

// 6. Utiliza la función calcularDiasMes para mostrar en la consola la cantidad de días de un mes específico.

console.log('El mes '+(mes)+' tiene '+(calcularDiasMes(mes)+' días'))

