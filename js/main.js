// Para animar botones de navegacion
const botonesDelNavegador = document.querySelectorAll(".nav-link");
let secciones = document.querySelectorAll(".seccion");
const hadita = document.getElementById('container-hadita')

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
    } 
})

// Para animar al botón del hadita

const botonDeWhatsApp = document.getElementById('boton-whatsapp-hadita');

hadita.addEventListener('mouseover', () =>{
    botonDeWhatsApp.style.visibility = 'visible';  
});

hadita.addEventListener('mouseleave', () =>{
    botonDeWhatsApp.style.visibility = 'hidden';  
})