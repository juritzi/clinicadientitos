// Para animar botones de navegacion
const botonesDelNavegador = document.querySelectorAll(".nav-link");
let secciones = document.querySelectorAll(".seccion");
const hadita = document.getElementById('container-hadita')
const botonDeWhatsApp = document.getElementById('boton-whatsapp-hadita');


window.addEventListener('scroll', () =>{
    let posicionScroll = window.scrollY; 
    if (posicionScroll < secciones[0].offsetTop -100){
        botonesDelNavegador.forEach(e => e.classList.remove('active'))
        hadita.style.visibility = 'hidden';
    } else if (posicionScroll >= secciones[0].offsetTop -100&& posicionScroll < secciones[1].offsetTop -100){
        botonesDelNavegador.forEach(e => e.classList.remove('active'))
        botonesDelNavegador[1].classList.add('active');
        hadita.style.visibility = 'visible';
    } else if (posicionScroll >= secciones[1].offsetTop -100 && posicionScroll < secciones[2].offsetTop -100) {
        botonesDelNavegador.forEach(e => e.classList.remove('active'))
        botonesDelNavegador[2].classList.add('active');
    } else if (posicionScroll >= secciones[2].offsetTop -100 && posicionScroll < secciones[3].offsetTop -100){
        botonesDelNavegador.forEach(e => e.classList.remove('active'))
        botonesDelNavegador[3].classList.add('active')
    } else if (posicionScroll >= secciones[3].offsetTop -100){
        botonesDelNavegador.forEach(e => e.classList.remove('active'))
        botonesDelNavegador[4].classList.add('active')
        hadita.style.visibility = 'hidden';  
        botonDeWhatsApp.style.visibility = 'hidden';  
    } 
})

// Para animar al botón del hadita


hadita.addEventListener('mouseover', () =>{
    botonDeWhatsApp.style.visibility = 'visible';  
});

hadita.addEventListener('mouseleave', () =>{
    botonDeWhatsApp.style.visibility = 'hidden';  
})


// Animacion para secciond e profesionales
const profesionalImagenContainer = document.querySelectorAll('.profesional-perfil');
const profesionalImagen = document.querySelectorAll('.profesional-perfil-imagen');
const profesionalImagenTexto = document.querySelectorAll('.profesional-texto');


profesionalImagenContainer[0].addEventListener('mouseover', () =>{
    profesionalImagenTexto[0].style.visibility= 'visible';
    profesionalImagenTexto[0].style.fontSize= 'large';
    profesionalImagenTexto[1].style.visibility= 'visible';
    profesionalImagenTexto[1].style.fontSize= 'small';


})

profesionalImagenContainer[1].addEventListener('mouseover', () =>{
    profesionalImagenTexto[2].style.visibility= 'visible';
    profesionalImagenTexto[2].style.fontSize= 'large';
    profesionalImagenTexto[3].style.visibility= 'visible';
    profesionalImagenTexto[3].style.fontSize= 'small';


})

profesionalImagenContainer[0].addEventListener('mouseleave', () =>{
    profesionalImagenTexto[0].style.visibility= 'hidden';
    profesionalImagenTexto[1].style.visibility= 'hidden';

})

profesionalImagenContainer[1].addEventListener('mouseleave', () =>{
    profesionalImagenTexto[2].style.visibility= 'hidden';
    profesionalImagenTexto[3].style.visibility= 'hidden';

})

