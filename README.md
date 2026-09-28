# Ejercicios Básicos de Pruebas Unitarias con Jest

## Objetivo

Desarrollar pruebas unitarias básicas utilizando Jest para comprender:

* La importancia de validar el comportamiento de las funciones.
* Cómo estructurar pruebas unitarias sencillas.
* Cómo identificar escenarios de prueba.
* Cómo trabajar con casos correctos, inválidos y valores límite.
* Cómo probar diferentes combinaciones de entrada.
* Cómo documentar pruebas técnicas de manera profesional.

---

## Descripción

Este proyecto contiene cinco funciones básicas de JavaScript. Para cada función se desarrollan pruebas unitarias utilizando Jest.

Las pruebas buscan comprobar que cada función produzca el resultado esperado ante diferentes tipos de entradas.

Las funciones incluidas son:

1. Calculadora de descuento.
2. Validación de contraseña.
3. Conversor de temperatura.
4. Verificación de mayoría de edad.
5. Generación de nombre completo.

---

# 1. Calculadora de descuento

## Propósito de la función

La función `calcularDescuento` recibe una cantidad y un porcentaje de descuento.

Su propósito es calcular el precio final después de aplicar el descuento.

```javascript
function calcularDescuento(cantidad, porcentaje) {
    let descuento = cantidad * porcentaje / 100;
    let total = cantidad - descuento;

    if (porcentaje < 0 || porcentaje > 100) {
        console.log("Cantidad inválida");
    }

    return total;
}
```

## ¿Qué valida la prueba unitaria?

Las pruebas verifican que:

* Un descuento normal se calcule correctamente.
* Un descuento del 0% mantenga el precio original.
* Un descuento del 100% deje el precio en cero.
* Un porcentaje mayor a 100 sea identificado como inválido.
* Un porcentaje menor a 0 sea identificado como inválido.

## Casos de prueba

| Caso                | Cantidad | Porcentaje | Resultado esperado |
| ------------------- | -------: | ---------: | -----------------: |
| Descuento normal    |      100 |        10% |                 90 |
| Descuento normal    |     1000 |        20% |                800 |
| Sin descuento       |      500 |         0% |                500 |
| Descuento máximo    |      500 |       100% |                  0 |
| Porcentaje inválido |      300 |       120% |           Inválido |
| Porcentaje inválido |      300 |       -10% |           Inválido |

Los valores `0%` y `100%` representan los límites válidos del porcentaje de descuento.

---

# 2. Validación de contraseña

## Propósito de la función

La función `validarPassword` comprueba si una contraseña cumple con dos condiciones:

* Tener al menos 8 caracteres.
* Contener al menos un número.

La función devuelve `true` cuando se cumplen ambas condiciones y `false` cuando no se cumplen.

```javascript
function validarPassword(password) {
    const regex = new RegExp("^(?=.*\\d).{8,}$");

    if (!regex.test(password)) {
        return false;
    }

    return true;
}
```

## ¿Qué valida la prueba unitaria?

Las pruebas verifican diferentes tipos de contraseñas:

* Contraseñas válidas con números.
* Contraseñas de exactamente 8 caracteres.
* Contraseñas menores a 8 caracteres.
* Contraseñas que no contienen números.

## Casos de prueba

| Caso     | Contraseña                 | Resultado esperado |
| -------- | -------------------------- | ------------------ |
| Válida   | `parangaricutirimicuaro10` | `true`             |
| Válida   | `12345678`                 | `true`             |
| Válida   | `abcde123`                 | `true`             |
| Inválida | `pepinillos`               | `false`            |
| Inválida | `abcdefg1`                 | `false`            |
| Inválida | `abcdefgh`                 | `false`            |

El valor límite principal es una contraseña de exactamente 8 caracteres.

---

# 3. Conversor de temperatura

## Propósito de la función

La función `celsiusFahrenheit` convierte una temperatura expresada en grados Celsius a grados Fahrenheit.

```javascript
function celsiusFahrenheit(celsius) {
    let f = (celsius * 9 / 5) + 32;

    return f;
}
```

## ¿Qué valida la prueba unitaria?

Las pruebas verifican que la fórmula funcione correctamente con diferentes valores:

* Cero grados Celsius.
* Valores decimales.
* Valores negativos.
* Valores muy grandes.

## Casos de prueba

| Caso           |   Celsius |      Resultado esperado |
| -------------- | --------: | ----------------------: |
| Valor normal   |       `0` |                    `32` |
| Valor decimal  |    `37.5` |                  `99.5` |
| Valor negativo |     `-40` |                   `-40` |
| Valor grande   | `1000000` |               `1800032` |
| Valor decimal  |    `36.6` | `97.88` aproximadamente |

El caso `-40` es importante porque `-40 °C` equivale a `-40 °F`.

---

# 4. Verificación de mayoría de edad

## Propósito de la función

La función `esMayorDeEdad` determina si una persona tiene 18 años o más.

Devuelve `true` si la edad es igual o mayor a 18 y `false` si es menor.

```javascript
function esMayorDeEdad(edad) {
    return edad >= 18;
}
```

## ¿Qué valida la prueba unitaria?

Las pruebas verifican:

* Una persona menor de 18 años.
* Una persona de exactamente 18 años.
* Una persona mayor de 18 años.
* Los valores inmediatamente anteriores y posteriores al límite.

## Casos de prueba

| Caso          | Edad | Resultado esperado |
| ------------- | ---: | ------------------ |
| Menor de edad | `16` | `false`            |
| Menor de edad | `17` | `false`            |
| Valor límite  | `18` | `true`             |
| Mayor de edad | `19` | `true`             |
| Mayor de edad | `25` | `true`             |

El valor límite de esta función es `18`.

Por esta razón es importante probar los valores `17`, `18` y `19`.

---

# 5. Generación de nombre completo

## Propósito de la función

La función `generaNombreCompleto` recibe un nombre y un apellido y los devuelve juntos.

La función convierte todo el texto a minúsculas y posteriormente convierte la primera letra del nombre y del apellido a mayúscula.

También agrega un espacio entre el nombre y el apellido.

```javascript
function generaNombreCompleto(nombre, apellido) {
    nombre = nombre.toLowerCase();
    apellido = apellido.toLowerCase();

    nombre = nombre.charAt(0).toUpperCase() + nombre.slice(1);
    apellido = apellido.charAt(0).toUpperCase() + apellido.slice(1);

    return `${nombre} ${apellido}`;
}
```

## ¿Qué valida la prueba unitaria?

Las pruebas verifican que la función pueda corregir diferentes combinaciones de mayúsculas y minúsculas.

Por ejemplo:

```text
JUAN PEREZ → Juan Perez
juan perez → Juan Perez
jUaN pErEz → Juan Perez
```

También se comprueba que exista un espacio entre el nombre y el apellido.

## Casos de prueba

| Caso        | Nombre | Apellido | Resultado esperado |
| ----------- | ------ | -------- | ------------------ |
| Mayúsculas  | `JUAN` | `PEREZ`  | `Juan Perez`       |
| Minúsculas  | `juan` | `perez`  | `Juan Perez`       |
| Combinación | `jUaN` | `pErEz`  | `Juan Perez`       |
| Combinación | `JUan` | `perez`  | `Juan Perez`       |

---

# Resumen de escenarios de prueba

Para las diferentes funciones se consideran cuatro tipos principales de escenarios:

| Tipo de prueba           | Descripción                                                                       |
| ------------------------ | --------------------------------------------------------------------------------- |
| Casos correctos          | Comprueban que la función produzca el resultado esperado con entradas válidas.    |
| Casos inválidos          | Comprueban cómo responde la función ante entradas que no cumplen los requisitos.  |
| Valores límite           | Comprueban los valores que se encuentran justo en los límites de las condiciones. |
| Combinaciones de entrada | Comprueban diferentes formas de proporcionar los datos de entrada.                |

---

# Resumen de funciones

| Función                | Propósito                                       | Tipo de resultado |
| ---------------------- | ----------------------------------------------- | ----------------- |
| `calcularDescuento`    | Calcula un precio aplicando un descuento.       | Número            |
| `validarPassword`      | Valida los requisitos de una contraseña.        | `true` / `false`  |
| `celsiusFahrenheit`    | Convierte Celsius a Fahrenheit.                 | Número            |
| `esMayorDeEdad`        | Comprueba si una persona tiene 18 años o más.   | `true` / `false`  |
| `generaNombreCompleto` | Genera un nombre completo con formato correcto. | String            |

---

# Ejecución de las pruebas

Para ejecutar las pruebas unitarias utilizando Jest se puede utilizar:

```bash
npm test
```

También se puede ejecutar Jest directamente:

```bash
npx jest
```

---

# Conclusión

Las pruebas unitarias permiten comprobar de forma individual el comportamiento de cada función.

En este proyecto se utilizan diferentes casos para comprobar que las funciones funcionen correctamente con:

* Valores normales.
* Valores mínimos y máximos.
* Valores negativos.
* Valores decimales.
* Datos inválidos.
* Diferentes combinaciones de entrada.

El objetivo es comprobar no solamente que una función funcione con un ejemplo específico, sino también que tenga un comportamiento correcto ante diferentes escenarios.
