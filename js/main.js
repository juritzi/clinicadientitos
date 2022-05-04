// Para animar botones de navegacion
const botonesDelNavegador = document.querySelectorAll(".nav-link");
let secciones = document.querySelectorAll(".header-seccion");

window.addEventListener('scroll', () =>{
    let posicionScroll = window.scrollY; 
    if (posicionScroll <= 767){
        botonesDelNavegador.forEach(e => e.classList.remove('active'))
    } else if (posicionScroll >= 768 && posicionScroll <= 1515){
        botonesDelNavegador.forEach(e => e.classList.remove('active'))
        botonesDelNavegador[6].classList.add('active');
    } else if (posicionScroll >= 1516 && posicionScroll <= 2264) {
        botonesDelNavegador.forEach(e => e.classList.remove('active'))
        botonesDelNavegador[7].classList.add('active');
    } else if (posicionScroll >= 2265 && posicionScroll <= 3013){
        botonesDelNavegador.forEach(e => e.classList.remove('active'))
        botonesDelNavegador[8].classList.add('active')
    } else if (posicionScroll >= 3014){
        botonesDelNavegador.forEach(e => e.classList.remove('active'))
        botonesDelNavegador[9].classList.add('active')
    } 
})