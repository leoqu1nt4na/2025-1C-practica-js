function cambiarDemo() {
    const original = document.getElementById('demo').innerText

    document.getElementById('demo').innerText = 'Texto cambiado con JS'

    setTimeout(() => {
        document.getElementById('demo').innerText = original
    }, 2000);
}

function mostrar() {
    document.getElementById('seleccionable').innerHTML = Date()
}

function cambiarEstilo() {
    let cambiaEstilo = document.getElementById('escribime')

    // cambiaEstilo.style.color = 'red'
    // cambiaEstilo.style.backgroundColor = 'black'
    // cambiarEstilo.style.fontWeight = 'bold'

    cambiaEstilo.style.cssText = "color: red; background-color: black; font-weight: bold"
}

function cambiarColor() {
    let label = document.getElementById('label')

    switch (document.getElementById('select').value) {
        case 'rojo':
            label.style.cssText = "color: red; font-weight: bold"
            break;
        case 'verde':
            label.style.cssText = "color: green; font-weight: bold"
            break;
        case 'azul':
            label.style.cssText = "color: blue; font-weight: bold"
            break;

    }
}

document.getElementById('btn-select').addEventListener('click', () => {
    label.style.cssText = "color:black, font-weight: normal"
})

function mostrarLista() {
    const arrayLista = ['Carne', 'Ensalada', 'Bebida', 'Picada', 'Postre', 'Carbón']

    let items = ''

    for (let index = 0; index < arrayLista.length; index++) {

        setTimeout(() => {
            items += '<li>' + arrayLista[index] + '</li>'

            document.getElementById('lista').innerHTML = items

        }, 500*index);
    }
}





















