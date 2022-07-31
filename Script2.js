// JavaScript source code


function agregarCantidadCripto( cantidad)
{
    cantidadCripto = cantidadCripto + Number(cantidad);
}
function agregarCotizacion(cotizacion)
{
    cotizacionCripto = cotizacion;

}

function calcularInversion(cantidadCripto, CotizacionCripto)
{
    total = cantidadCripto * cotizacionCripto;
    return total;

}

var cantidad =0
var cantidadCripto =0
var cotizacion =0
var cotizacionCripto =0
var total =0
var continuar = 1;

while (continuar == 1) {
    continuar = window.prompt('Agregar 1 si desea cargar cantidad de criptomoneda : ')

    if (continuar == 1) {
        cantidad = window.prompt('Agregar cantidad de criptomoneda comprada : ');
        agregarCantidadCripto(cantidad);

    }
    else {
        cotizacion = window.prompt('Agregar cotizacion de esa criptomoneda comprada : ');
        agregarCotizacion(cotizacion);
    }
}

window.alert(cantidadCripto)

window.alert(cotizacionCripto)

window.alert('Su inversion total es : ' + calcularInversion(cantidadCripto, cotizacionCripto))

