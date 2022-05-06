// Para animar botones de navegacion
const botonesDelNavegador = document.querySelectorAll(".nav-link");
let secciones = document.querySelectorAll(".seccion");

window.addEventListener('scroll', () =>{
    let posicionScroll = window.scrollY; 
    if (posicionScroll < secciones[0].offsetTop -100){
        botonesDelNavegador.forEach(e => e.classList.remove('active'))
    } else if (posicionScroll >= secciones[0].offsetTop -100&& posicionScroll < secciones[1].offsetTop -100){
        botonesDelNavegador.forEach(e => e.classList.remove('active'))
        botonesDelNavegador[1].classList.add('active');
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