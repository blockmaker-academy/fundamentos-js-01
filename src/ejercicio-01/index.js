// 1. Declara una variable llamada `nombre` y asígnale tu nombre.
let nombre = 'Juan'

// 2. Crea una variable `edad` y asígnale tu edad actual.
let edad = 25

// 3. Declara una variable `esEstudiante` y asígnale `true` si eres estudiante o `false` si no lo eres.
let esEstudiante = true

// 4. Crea una variable `mensaje` que contenga un saludo utilizando las variables `nombre` y `edad`.
let mensaje = 'Hola mi nombre es '+(nombre)+ ' tengo '+(edad)+' años  y soy '+(esEstudiante?'estudiante':'trabajador')

// 5. Crea una variable num1 y asígnale un número cualquiera.
let num1 = 48

// 6. Crea otra variable num2 y asígnale otro número.
let num2 = 10

// 7. Realiza las siguientes operaciones:

        // Suma num1 y num2 y guarda el resultado en una variable llamada suma.
        let suma = num1 + num2

        // Resta num1 y num2 y guarda el resultado en una variable llamada resta.
        let resta = num1 - num2

        // Multiplica num1 por num2 y guarda el resultado en una variable llamada multiplicacion.
        let multiplicacion = num1 * num2

        // Divide num1 entre num2 y guarda el resultado en una variable llamada division.
        let division = num1/num2

        // 8. Crea una cadena de texto llamada frase que contenga el siguiente mensaje: "Hola, mi nombre es [nombre] y tengo [edad] años. Soy estudiante: [true/false]."
        let frase = 'Hoña me llamo '+(nombre)+' y tengo '+(edad)+' años y soy estudiante: '+ (esEstudiante)+'.'

        // 9. Imprime todos los resultados por pantalla:
        console.log(mensaje)
        console.log('Suma:', suma)
        console.log('Resta:', resta)
        console.log('Multiplicación:', multiplicacion)
        console.log('División:', division)
        console.log(frase)
