/** FUNCION 1
 * CALCULADORA DE DESCUENTO
 * Debe devolver el precio final con descuento aplicado.
 *Si el porcentaje es menor a 0 o mayor a 100, devolver:
 */



function calcularDescuento(cantidad) {
    const porcentajeDescuento = 0.10;
    let descuento = cantidad * porcentajeDescuento;
    let total = cantidad - descuento;

    if (total < 0 || total > 100) {
        console.log("Cantidad inválida");
        return total;    
    }

    return total;
}


/** FUNCION 2
 * 
 */


module.exports.calcularDescuento = calcularDescuento;