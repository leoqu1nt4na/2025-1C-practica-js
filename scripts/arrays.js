/* const array1 = ['HTML', 'CSS', 'JS']

const array2 = new Array(5)
array2[0] = 'HTML'
array2[1] = 'CSS'
array2[2] = 'JS'


console.log(array1)
console.log(array2)

const arrayNumeros = [3, 5, 7, 43, 12, 7]

console.log(arrayNumeros)
console.log(arrayNumeros.length)
console.log(arrayNumeros.length -1)


const temasFront = ['HTML', 'CSS', 'JS']

temasFront[temasFront.length] = 'ANGULAR'

console.log(temasFront)

 */


//METODOS DE LOS ARRAYS

let frutas = ['Manzana', 'Pera', 'Banana', 'Naranja', 'Manzana', 'Naranja', 'Pera', 'Tomate']

//FILTER
//devuelve un nuevo array basado en el criterio que le defina

// let filter = frutas.filter((param) => {
//     return param === 'Manzana'
// })

/*
let fruta = 'Mandarina'

console.log(filter)
console.log(typeof filter)
console.log(Array.isArray(filter))

console.log(fruta)
console.log(typeof fruta)
console.log(Array.isArray(fruta)) */

// let filter2 = frutas.filter(param => param == 'Naranja')

// console.log(filter)
// console.log(filter)

//FIND

//Busca y devuelve el primer elemento que encuentra dentro de array

/* let resutladoFind = frutas.find(param => param == 'Pera')
console.log(resutladoFind)
console.log(typeof resutladoFind) */

//FINDINDEX

//Devuelve el indice del primer elemento que encuetra

/* let resultadoFindIndex = frutas.findIndex(param => param == 'Naranja')
console.log(resultadoFindIndex)
console.log(typeof resultadoFindIndex)*/

//SOME

//Verifica si al menos uno de los elementos coincide con el criterio, devuelve true o false

/* let resutladoSomeTrue = frutas.some(param => param =='Naranja')
console.log(resutladoSomeTrue)
console.log(typeof resutladoSomeTrue)

let resutladoSomeFalse = frutas.some(param => param =='Ciruela')
console.log(resutladoSomeFalse)
console.log(typeof resutladoSomeFalse) */

//POP
//Elimina el último elemento del array y devuelve el elemento elmininado


/* console.log(frutas)
let resultadoPop = frutas.pop()
console.log(frutas)
console.log(resultadoPop) */

//SHIFT

//Elimina el primer elemento del array y devuelve el elemento eliminado

/* console.log(frutas)
let resultadoShift = frutas.shift()
console.log(frutas)
console.log(resultadoShift) */

//UNSHIFT

//Agrega uno o mas elementos al principio y devuelvela longitud de array

/* frutas.unshift('Pomelo')
console.log(frutas) */

//SPLICE

//Agrega, elimina o reemplaza los elementos del array que yo indique

/* 
let num = [1, 2, 3, 4, 5]
console.log(num)

//eliminar
num.splice(2, 1) //elimina 1 desde el indice 2
console.log(num)

//agregar
num = [1, 2, 3, 4, 5]
console.log(num)

num.splice(2, 0, 'melon', 'sandia') //Agrega 2 elementos desde el indice 2.
console.log(num)

//Reemplazar

num.splice(2, 2, 99, 100)
console.log(num)
 */

//FOREACH

//Recorre el array y ejecuta una funcon especifica en cada elemento. Se utiliza para realizar operaciones sobre los elementos SIN modificar el array original. No devuelve un nuevo array.

/* 
console.log(frutas)

frutas.forEach((fruta) => {
    console.log('Imprimiendo desde foreach', fruta)
})


frutas.forEach((fruta, indice, array) => {
    console.log(`La fruta es ${fruta}, está en el índice ${indice}, pertenece al array de frutas que tiene las siguientes frutas ${array}.`)
})
 */


//SORT
//Ordena los elementos de un array

let arrayNumeros = [3, 8, 4, 6, 9, 7, 5, 1,]

console.log(arrayNumeros.sort())


let arrayNumeros2 = [20, 3, 8, 4, 2, 6, 9, 1, 7, 100, 5, 11,]

console.log(arrayNumeros2.sort())

console.log(arrayNumeros2.sort((a, b) => a - b))

console.log(arrayNumeros2.sort((a, b) => b - a))
















































