"use strict";
let mensaje = "Hola mundo";
const animales = ["perro", "gato", "goat"];
const nums = [1, 2, 3, 4, 5];
function funcion(retorno) {
    return retorno;
}
let tupla = [1, 'hola'];
var Talla;
(function (Talla) {
    Talla[Talla["Chica"] = 2] = "Chica";
    Talla[Talla["Mediana"] = 3] = "Mediana";
    Talla[Talla["Grande"] = 4] = "Grande";
    Talla[Talla["ExtraGrande"] = 5] = "ExtraGrande";
})(Talla || (Talla = {}));
const estado = 2;
const objeto = {
    id: 1,
    nombre: 'Juan'
};
const objetoPrueba = {
    id: 1,
    nombre: "Juan",
    direccion: {
        numero: 123,
        calle: "Calle falsa",
        pais: "Arg"
    },
    talla: Talla.Grande
};
console.log(objetoPrueba);
//# sourceMappingURL=index.js.map