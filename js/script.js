let persona = prompt("¿Cuál es tu nombre?");

if (persona != null) {
    alert("Hola " + persona + "! Bienvenido a Remnant!")
}

function compra(libro) {
    let cantidad = prompt("Cuantas unidades deseas comprar?");
    let precio = cantidad * libro;
    alert("El costo será de $" + precio);
}