/**
 * Para cada función intenta crear pruebas como:
/*Casos correctos.
/*Casos inválidos.
/*Valores límite.
/*Diferentes combinaciones de entrada.
 */



const funciones = require("./funciones.js");

// Test Unitario Funcion 1:

test("el descuento del 10% de 100 es 90" ,()=>{
    expect(funciones.calcularDescuento(100,10)).toBe(90);
}); 

test("el descuento del 20% de 1000 es 800" ,()=>{
    expect(funciones.calcularDescuento(1000, 20)).toBe(800);
});  

test("el descuento del 120% de 300 es 360" ,()=>{
    expect(funciones.calcularDescuento(300, 120)).toBe(-60);
});  

