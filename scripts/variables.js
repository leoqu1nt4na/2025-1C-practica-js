//VAR

/* var miVar;
console.log(miVar)

var miVar = 'Texto miVar'
console.log(miVar)

miVar = 1
console.log(miVar) */

//LET

/* let miLet;
console.log(miLet)

//let miLet; NO FUNCIONA

miLet = 'Texto miLet'
console.log(miLet) */

//CONST

//const miconst; NO FUNCIONA

// const miConst = 'Texto miConst'
// console.log(miConst)

// miConst = 1;
// console.log(miConst)

//SCOPE

/* var miVar = 1

function imprimirVar() {
    console.log('Imprimiendo miVar desde dentro de la funcion, el valor de miVar es: ', miVar)
    
    var miVar2 = 2
    console.log('Imprimiendo miVar2 desde dentro de la funcion, el valor de miVar2 es: ', miVar2)
    
    if(miVar2 == 2) {
        var miVar3 = 3
        console.log('Imprimiendo miVar3 desde dentro del if, el valor de miVar3 es: ', miVar3)
        
    }
    console.log('Imprimiendo miVar3 desde dentro de la funcion pero fuera del if, el valor de miVar3 es: ', miVar3)
}

imprimirVar() */

// console.log('Imprimiendo miVar2 desde fuera de la funcion, el valor de miVar es: ', miVar2)

// console.log('Imprimiendo miVar3 desde fuera de la funcion, el valor de miVar3 es: ', miVar3)



/*let miLet = 1

function imprimirLet() {
    console.log('Imprimiendo miLet desde dentro de la funcion, el valor de miLet es: ', miLet)
    
    let miLet2 = 2
    console.log('Imprimiendo miLet2 desde dentro de la funcion, el valor de miLet2 es: ', miLet2)
    
    if(miLet2 == 2) {
        let miLet3 = 3
        console.log('Imprimiendo miLet3 desde dentro del if, el valor de miLet3 es: ', miLet3)
        
    }

    //console.log('Imprimiendo miLet3 desde dentro de la funcion pero fuera del if, el valor de miLet3 es: ', miLet3)
}

//console.log('Imprimendo miLet2 desde fuera de la funcion, el valor de miLet2 es: ', miLet2)

//console.log('Imprimiendo miLet3 desde dentro de la funcion pero fuera del if, el valor de miLet3 es: ', miLet3)
imprimirLet()
 */



/* const miConst = 1

function imprimirConst() {
    console.log('Imprimiendo miConst desde dentro de la funcion, el valor de miConst es: ', miConst)
     
    const miConst2 = 2
    console.log('Imprimiendo miConst2 desde dentro de la funcion, el valor de miConst2 es: ', miConst2)
  
    if(miConst2 == 2) {
        const miConst3 = 3
        console.log('Imprimiendo miConst3 desde dentro del if, el valor de miConst3 es: ', miConst3)
        
    }

    //console.log('Imprimiendo miConst3 desde dentro de la funcion pero fuera del if, el valor de miConst3 es: ', miConst3)
}

//console.log('Imprimendo miConst2 desde fuera de la funcion, el valor de miConst2 es: ', miConst2)

//console.log('Imprimiendo miConst3 desde dentro de la funcion pero fuera del if, el valor de miConst3 es: ', miConst3)

imprimirConst() */


// OBJETOS

let vendedor = {
    nombre: 'Carlos',
    apellido: 'Carles',
    empresa: 'Vendetuti SA',
    habilidadesBlandas: ['empatía','carisma','responsabilidad'],
    vender: function () {
        return 'Carlos vendió un auto'
    },
    obtenerNombreCompleto: function () {
        return `El nombre completo de este vendedor es ${this.nombre} ${this.apellido}`
    }
}

/* let nombre = "Federico"

let texto1 = "Soy eltexto 1"
let texto2 = "Soy el texto 2 y me llamo 'Federico' "
let texto3 = `Soy el texto 3 y me llamo ${nombre}`


console.log(texto1, "me llamo ", nombre)

console.log(texto2) */


/* let numero1 = '1'
let numero2 = 2

let resultado = numero1 + numero2

console.log(resultado) */


// console.log(vendedor)

// console.log('El tipo de dato de vendedor es: ', typeof vendedor)

// console.log(vendedor.nombre)

// console.log(vendedor.vender)
// console.log(vendedor.vender())
// console.log(vendedor.obtenerNombreCompleto())

/* vendedor.apellido = 'Sanchez'

console.log(vendedor)

vendedor.edad = 56;

console.log(vendedor) */
