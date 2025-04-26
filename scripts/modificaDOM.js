import {html, css, javascript } from "./lenguajes.js"

//Obtener objetos del DOM

let enlaces = document.querySelectorAll('a')
let tituloElemento = document.getElementById('titulo')
let subtituloElemento = document.getElementById('subtitulo')
let parrafoElemento = document.getElementById('parrafo')

//Agergar el addEventListener a cada enlace

enlaces.forEach((enlace)=>{
    enlace.addEventListener('click', () => {

        enlaces.forEach((param) => {
            param.classList.remove('activo')
        })
        
        enlace.classList.add('activo')


        let contenido = obtenerInfo(enlace.textContent)
        tituloElemento.innerHTML = contenido.titulo
        subtituloElemento.innerHTML = contenido.subtitulo
        parrafoElemento.innerHTML = contenido.parrafo
    })

})

function obtenerInfo(enlace) {
    let contenido = {
        "HTML": html,
        "CSS": css,
        "JAVASCRIPT": javascript
    }
    return contenido[enlace]
}