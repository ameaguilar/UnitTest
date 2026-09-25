/** FUNCION 1
 * CALCULADORA DE DESCUENTO
 * Debe devolver el precio final con descuento aplicado.
 *Si el porcentaje es menor a 0 o mayor a 100, devolver:
 */



function calcularDescuento(cantidad, porcentaje) {

    let descuento = cantidad * porcentaje/100;
    let total = cantidad - descuento;

    if (porcentaje < 0 || porcentaje > 100) {
        console.log("Cantidad inválida");  

    } 
        return total;
}




/** FUNCION 2
 * Validación de contraseña, debe contener:
 * 8 carácteres mínimo
 * al menos 1 número
 * devolver true si devuelve las condiciones, false en otro caso
 */

function validarPassword(password) {
    const regex = new RegExp("^(?=.*\\d).{8,}$");

    if (!regex.test(password)) {
        return false;
    } // if

    return true;
}


module.exports.calcularDescuento = calcularDescuento;
module.exports.validarPassword = validarPassword;