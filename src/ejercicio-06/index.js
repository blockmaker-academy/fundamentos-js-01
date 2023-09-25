// 1. Declara dos variables num3 y num4 y asígnales valores numéricos.
let num3 = 5
let num4 = 3
// 2. Utiliza los operadores bit a bit para realizar las siguientes operaciones:
    // Realiza una operación AND entre num3 y num4 y muestra el resultado en la consola.
        console.log(num3 & num4)
    // Realiza una operación OR entre num3 y num4 y muestra el resultado en la consola.
        console.log(num3 | num4)
    // Realiza una operación XOR entre num3 y num4 y muestra el resultado en la consola.
        console.log(num3 ^ num4)
    // Invierte los bits de num3 y muestra el resultado en la consola.
        console.log(~num3)

// 3. Crea una función llamada desplazarBits que tome un número numero y un número posiciones como argumentos. Utiliza los operadores de desplazamiento de bits (<<, >>, >>>) para desplazar los bits
function desplazarBits(numero,posiciones,operador) {
    if(operador=='<<'){
        return numero << posiciones
    }
    else if (operador == '>>'){
        return numero >> posiciones
    }
    else if (operador == '>>>'){
        return numero >>> posiciones
    }
    else {
        return 'Operador erroneo'
    }
    
}

// 4. Utiliza la función desplazarBits para mostrar en la consola el resultado de desplazar los bits de un número específico.
    console.log(desplazarBits(5,2,'>>>'))


