/*
function quienEsamigo() {
    console.log("Pedro es mi amigo")
}

//Llama a una función - Revisar Funcionamiento
quienEsamigo()

function esAmigo(nombre, yearsAmistad) {
    console.log(nombre + " es mi amigo desde hace ") + yearsAmistad + "años")
}
esAmigo("Manolo", 10)
esAmigo("Paco", 2)
esAmigo("Julian", 7)
esAmigo("Cande", 15)

let amistades = [
    {
        nombre: "Manolo",
        yearsAmistad: 10
    },
        nombre: "Paco",
        yearsAmistad: 10
    },
        nombre: "Julian",
        yearsAmistad: 10
    },
        nombre: "Cande",
        yearsAmistad: 10
    },
]
amistades.forEach(amistad => {
    esAmigo(amistad.nombre, amistad.yearsAmistad)
})
*/


/*
function esAmigo(nombre) {
    return nombre + " es mi amigo."
}
var mensaje = esAmigo("Pepe")
console.log(mensaje)
*/

//otro ejemplo


function loteria(numero) {
    if (numero == 1) {
        return "Te ha tocado."
    }
        return "No has tenuedo suerte."
    }

var resultado = loteria(1)
console.log(resultado)
