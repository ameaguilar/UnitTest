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

// Test Unitario Función 2
// Thrutiness - buscar valores null, undefined, true o false

test("La contraseña parangaricutirimicuaro10 tiene formato válido", () => {
    expect(funciones.validarPassword("parangaricutirimicuaro10")).toBeTruthy();
});

test("La contraseña 12345678 tiene formato válido", () => {
    expect(funciones.validarPassword("12345678")).toBeTruthy();
});

test("La contraseña pepinillos tiene formato válido", () => {
    expect(funciones.validarPassword("pepinillos")).toBeFalsy();
});


//Test Unitario Función 3 
test("La conversión de 0 celsius a Fahrenheit es 32",() =>{
    expect (funciones.celsiusFahrenheit(0)).toBe(32);
})

test("La conversión de 37.5 celsius a Fahrenheit es 99.5", () => {
    expect(funciones.celsiusFahrenheit(37.5)).toBe(99.5);
}); // valores decimales

test("Convierte correctamente un valor Celsius muy grande", () => {
    expect(funciones.celsiusFahrenheit(1000000)).toBe(1800032);
}); // valores muy grandes 