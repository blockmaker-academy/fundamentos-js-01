// 1. Declara una variable `puntuacion` y asígnale un valor entre 0 y 100 para representar una calificación.
var puntuacion = 85;

// 2. Utiliza un condicional `if` para verificar si la `puntuacion` es mayor o igual a 70.
if (puntuacion >= 70) {
    console.log("Aprobado");
} else {
    console.log("Reprobado");
}

// 3. Declara una variable `dia` y asígnale un número del 1 al 7.
var dia = 4;

// 4. Utiliza una estructura `switch` para mostrar en la consola el nombre del día.
switch (dia) {
    case 1:
        console.log("Lunes");
        break;
    case 2:
        console.log("Martes");
        break;
    case 3:
        console.log("Miércoles");
        break;
    case 4:
        console.log("Jueves");
        break;
    case 5:
        console.log("Viernes");
        break;
    case 6:
        console.log("Sábado");
        break;
    case 7:
        console.log("Domingo");
        break;
    default:
        console.log("El número no corresponde a un día de la semana");
        break;
}

// 5. Declara una variable `temperatura` y asígnale un valor en grados Celsius.
var temperatura = 25;

// 6. Crea una función llamada `convertirFahrenheit`.
function convertirFahrenheit(C) {
    return (C * 9/5) + 32;
}

// 7. Utiliza la función `convertirFahrenheit` para mostrar la temperatura en grados Fahrenheit en la consola.
var temperaturaFahrenheit = convertirFahrenheit(temperatura);
console.log(temperatura + "°C equivale a " + temperaturaFahrenheit + "°F");