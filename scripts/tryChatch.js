//Manejo de errores

try {
    console.log('Intento ejecutar el código')

    console.log('El código sale con fritas')

} catch (error) {
    console.log('Algo salió mal', error)
}

console.log('**********************************')

try {
    console.log('Segundo intento de ejecutar el código')
    
    throw 'hay un error en el código'
    console.log('El código sale con fritas')
} catch (error) {
    console.log('Algo salió mal,', error)
}

console.log('**********************************')

try {
    console.log('Tercer intento de ejecutar el código')
    console.log('El código sale con fritas')
} catch (error) {
    console.log('algo salió mal', error)
} finally {
    console.log('Finalizó el bloque try catch')
}