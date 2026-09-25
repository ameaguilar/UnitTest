const test = require("node:test");
const funciones = require("./funciones.js");

// Test Unitario Funcion 1:

test("el descuento del 10% de 100 es 90" ,()=>{
    expect(funciones.calcularDescuento(100)).toBe(90);
}); 

