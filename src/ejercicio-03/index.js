// 1. Crea una variable `numero` y asígnale un valor numérico cualquiera.
var numero = 7;

// 2. Utiliza el operador ternario.
var tipoNumero = numero > 0 ? "positivo" : "negativo o cero";
console.log("El número es " + tipoNumero);

// 3. Declara una variable `cadena` y asígnale un valor de tipo cadena de texto.
var cadena = "¡Feliz semana!";

// 4. Utiliza el operador ternario para determinar la longitud de la cadena.
var longitudCadena = cadena.length > 5 ? cadena.length : "corta";
console.log("La cadena es " + longitudCadena);

// 5. Crea una función llamada `esPar`.
function esPar(n) {
    return n % 2 === 0;
}

// 6. Utiliza la función `esPar`.
var numeroEspecifico = 12;  // Cambia este valor para probar con diferentes números
var esNumeroEspecificoPar = esPar(numeroEspecifico) ? "par" : "impar";
console.log("El número " + numeroEspecifico + " es " + esNumeroEspecificoPar);