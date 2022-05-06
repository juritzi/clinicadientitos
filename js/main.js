// Para animar botones de navegacion
const botonesDelNavegador = document.querySelectorAll(".nav-link");
let secciones = document.querySelectorAll(".header-seccion");

window.addEventListener('scroll', () =>{
    let posicionScroll = window.scrollY; 
    if (posicionScroll >= 768 && posicionScroll <= 1515){
        botonesDelNavegador.forEach(e => e.classList.remove('active'))
        botonesDelNavegador[2].classList.add('active');
    } else if (posicionScroll >= 1516 && posicionScroll <= 2264) {
        botonesDelNavegador.forEach(e => e.classList.remove('active'))
        botonesDelNavegador[3].classList.add('active');
    } else if (posicionScroll >= 2265 && posicionScroll <= 3013){
        botonesDelNavegador.forEach(e => e.classList.remove('active'))
        botonesDelNavegador[4].classList.add('active')
    } else if (posicionScroll >= 3014){
        botonesDelNavegador.forEach(e => e.classList.remove('active'))
        botonesDelNavegador[5].classList.add('active')
    } 
})