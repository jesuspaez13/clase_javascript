
// Hola mundo
//alert('Hola Mundo');

// Comentarios

//Comentario de línea
/* Comentario de mas 
de una línea
*/




// Sentencias

//alert('Hola'); alert('Mundo');

//alert('Hola'); 
//alert('Mundo');


// inserción automática de punto y coma

//alert('Hola')
//alert('Mundo')

// Variables

let mensaje;
mensaje = "Hola Mundo"
//alert(mensaje)

let c=5, d=2, j = 3;

let a = 5;
let b = 6;
let suma = a + b;
console.log("El resultado de la suma es: ",suma);

b = 7
console.log(b)

let nombre = "Roberto";
let nombre_dos = nombre;

nombre_dos = "Carlos";
console.log("El nombre uno es: ",nombre);
console.log("El nombre dos es: ", nombre_dos);


// Nombrar variables con camel case
nombreUno = "Roberto";
nombreDos = "Carlos";

// Nombrar como underscore
nombre_uno = "Roberto";
nombre_dos = "Carlos";

// nombres no comunes
let $ = 1;
let _ = 2;

//no puede nombrar variables

/*let 1a = 3;
let primer-nombre = 4;*/

"use strict"
mensaje = "Hola Mundo";


// Constantes

const PI = 3.141624;
const COLOR_ROJO = "#FFFFF";
pi_dos = PI;
pi_dos = 7;
console.log(PI);
console.log(pi_dos);

const id_account = get_id_account(45); 

// Tipos de datos

// Dinámicamente tipado

let mensaje_tres = "Hola";
mensaje_tres = 12234

// Tipo de dato Number
let n = 123;
n = 12.456;

// Valores numéricos especiales Infinity, -Infinity y NaN

// Infinity: representa el infinito matemático. Es un valor epecial que es mayor que cualquier número;

console.log(1 / 0);
console.log(Infinity)

// NaN representa un error de cálculo. Es el resultado de una operación 
// matemática incorrecta o indefinida

console.log("no es un número" / 2);

// NaN es pegajoso. Cualquier operación sonbre NaN devuelve NaN

console.log("no es un número" / 2 +  5);

// Tipo de datos BigInt


// Valores enteros mayores que (2^53-1) o menor que -(2^53-1) 9.007.199.254.740.991

let numero_grande = 12345678990122334456567124444444324;
console.log(numero_grande);

// Tipo String
let t = "a";
let texto = "Hola";
let texto_dos = 'hola';
let texto_tres = ``;  //backticks funcionalidad extendida
let nomb = "Roberto";
//console.log("Hola", nomb);
//console.log('Hola', nomb);
//console.log(`Hola`, nomb);

console.log("Hola ${nomb}");
console.log('Hola ${nomb}');
console.log(`Hola ${nomb}`);

// Tipo Booleano

// true y false

let verdadero = true;
let falso = false;

let mayor = 4 > 1; //True

// Valor null

// Valor especial que no pertenece a ningun tipo de dato anterior. 
// Forma un tipo propio separado que contiene sólo el valor null.

let edad = null;
console.log(edad);

// en JS null NO significa un objeto no existente
// Es sólo un valor especial que representa nada, vacío o valor desconocido.

// valor Undefined

// Valor especial que no pertenece a ningún tipo de dato anterior.
// El significado de undefined es valor no asignado.

let edad_dos;
console.log(edad_dos);


// El operador typeof o función typeof(x), devuelve el tipo de dato.

console.log(typeof undefined); //undefined
console.log(typeof 0); //number
console.log(typeof true); //boolean
console.log(typeof 10n); //bigint
console.log(typeof "Hola"); //string

console.log(typeof(alert)); // function **
console.log(typeof(null)); // object - ERROR DE JAVASCRIPT
console.log(typeof(Math)); // object