/* let numero = 10

function sumar(num) {
    return num + 2
} */

// sumar(numero)

// console.log(sumar(numero))

// let resultado = sumar(numero)

// console.log(resultado)

// console.log(`Sumo desde sumar, el resultado es ${sumar(numero)}`)


// let sumarConArrow = (num) => {
//     return num +2
// }

// console.log(`Sumo desde sumarConArrow, el resultado es ${sumarConArrow(numero)}`)

// let sumarconArrowRePro = num => num + 2

// console.log(`Sumo desde sumarConArrowRePro, el resultado es ${sumarconArrowRePro(numero)}`)

//CALLBACKS

/* function saludar(param1) {
    console.log(`Hola ${param1}`)
}

let nombre = 'Pedro'

function procesarSaludo(param2, callback) {
    console.log(`La función 'procesarSaludo' recibió como argumentos a ${param2} y a la función 'saludar', pues bien, saludemos entonces a ${param2} utilizando el callback`)
    
    callback(param2)
}

procesarSaludo(nombre, saludar) */

/************************************************************* */

let numero1 = 2

function potenciar(num1) {
    numero1 = num1 ** 2
    return numero1
}

function sumar(num2, num3, callback) {
    let numero2 = num3 ** 3;

    setTimeout(callback,3000, num2);

    console.log(`Numero1 vale ${numero1}, peeeero, aun no se ejecutó el callbak, entonces el resultado de la suma es ${numero1 + numero2}`)
    
    setTimeout(() => {

        console.log(`Numero1 vale ${numero1} y ya se ejecutó el callbak, entonces el resultado de la suma es ${numero1 + numero2}`)   

    }, 5000)
}

sumar(5,3,potenciar)












































