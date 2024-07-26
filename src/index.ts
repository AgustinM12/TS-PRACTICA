let mensaje: string = "Hola mundo"

const animales: string[] = ["perro", "gato", "goat"]

const nums: number[] = [1, 2, 3, 4, 5]

function funcion(retorno: string) {
    return retorno
}

let tupla: [number, string] = [1, 'hola']

enum Talla { Chica = 2, Mediana, Grande, ExtraGrande }

const enum Carga { Idle, Loading, Success, Error }

const estado = Carga.Success

const objeto: { id: number, nombre: string } = {
    id: 1,
    nombre: 'Juan'
}

// DEFINICION DE UN TIPO DE OBJETO, UN MODELO DE COMO SERAN LOS OBJETOS
type Direccion = {
    numero: number,
    calle: string,
    pais: string
}

// TIPO DE OBJETO QUE INCLUYE OTRO TIPO (DIRECCION) Y AL ENUM
type Persona = {
    readonly id: number,
    nombre: string,
    talla: Talla,
    direccion: Direccion
}

// DEFINIR UNA INSTACIA DEL OBJETO PERSONA
const objetoPrueba: Persona = {
    id: 1,
    nombre: "Juan",
    direccion: {
        numero: 123,
        calle: "Calle falsa",
        pais: "Arg"
    },
    talla: Talla.Grande
}

console.log(objetoPrueba);
