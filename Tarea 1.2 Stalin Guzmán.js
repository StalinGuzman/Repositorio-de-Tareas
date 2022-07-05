//4.Replica el comportamiento de los siguientes ciclos for utilizando ciclos while
let i = 0;
while (i < 5) {
	console.log("El valor de i es: " + i);
	i++;
}
let i = 10;
while (i >= 2) {
	console.log("El valor de i es: " + i);
	i--;
}
//5.Escribe un código en JavaScript que le pregunte a los usuarios cuánto es 2+2 Si responden bien, mostramos un mensaje de felicitaciones, pero si responden mal, volvemos a empezar.
var pregunta = prompt("2 + 2 es igual a?");

if (pregunta != 4) {
	while (pregunta != 4) {
		pregunta = prompt("2 + 2 is igual a?");
   	if (pregunta == 4) {
			console.log("Felicidades es correcto :)");
   		break;
		}
		continue;
	}
} else {
   console.log("Felicidades es correcto :)");
}
//6.	Tienes un array de productos con los siguientes atributos: (name, price, stock) Debes agregar y calcular una nueva propiedad llamada "iva", los impuestos deben ser del 12% con base al precio base. Por ejemplo, si aplicamos el 12% de impuestos para un producto con precio de $1000 el resultado de los "IVA" será $190, debes tener en cuenta que como resultado se debe dejar un valor entero sin decimales.
let name = "Mesa";
let price = 100;
let stock = 50;
let iva = 0.12;

var price = 100;
var priceIva = price*1.12;
