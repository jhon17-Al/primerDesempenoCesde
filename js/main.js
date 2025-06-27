let valorPasaje, hora, cantidadTransbordo, transbordo, valorFinal;
let descuento = 0;
const TARIFABASE = 2800;
// TIPO DE PASAJERO
const pasajero = prompt(
  "BIENVENIDO A NUESTRO SISTEMA DE TRANSPORTE\n" +
  "Seleccione su tipo de usuario:\n" +
  "1- Estudiante\n" +
  "2- Adulto mayor\n" +
  "3- Trabajador\n" +
  "4- Turista");
switch (pasajero) {
  case "1":
    valorPasaje = TARIFABASE * 0.5;
    break;
  case "2":
    valorPasaje = TARIFABASE * 0.6;
    break;
  case "3":
    valorPasaje = TARIFABASE;
    break;
  case "4":
    valorPasaje = TARIFABASE * 1.1;
    break;
  default:
    console.error("Usuario inválido");
    break;
}
//AUMENTO POR LA HORA
hora = Number(prompt("Ingrese la hora en formato militar 24h:"));
if (hora >= 18 && hora <= 21) {
  valorPasaje *= 1.10;
}
// DESCUENTO POR TRANSBORDO
transbordo = prompt("¿Realiza transbordos? (si/no)");
if (transbordo == "si") {
  cantidadTransbordo = prompt("¿Cuántos? \n1- Uno \n2- Dos \n3- Tres o más");
  switch (cantidadTransbordo) {
    case "1":
      descuento = 300;
      break;
    case "2":
      descuento = 500;
      break;
    default:
      descuento = 0;
  }
}
valorFinal = valorPasaje - descuento;
console.log("El valor a pagar es: $" + valorFinal);