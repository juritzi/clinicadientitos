// Para animar botones de navegacion
const botonesDelNavegador = document.querySelectorAll(".nav-link");
const secciones = document.querySelectorAll("header-seccion");

function cambiarEstilo (e) {
    botonesDelNavegador.forEach(e => e.classList.remove('active'))
    e.target.classList.add('active');
};

for (const e of botonesDelNavegador){
    e.addEventListener('click',cambiarEstilo);
}

function cambiarEstiloNavegador () {
    let posicionScroll = window.scrollY;
    console.log(posicionScroll)
    if (posicionScroll >= 800 && posicionScroll <= 1799){
        botonesDelNavegador.forEach(e => e.classList.remove('active'))
        botonesDelNavegador[6].classList.add('active');
    } else if (posicionScroll >= 1800 && posicionScroll <= 2799) {
        botonesDelNavegador.forEach(e => e.classList.remove('active'))
        botonesDelNavegador[7].classList.add('active');
    } else if (posicionScroll >= 2800 && posicionScroll <= 3799){
        botonesDelNavegador.forEach(e => e.classList.remove('active'))
        botonesDelNavegador[8].classList.add('active')
    } else if (posicionScroll >= 3800 && posicionScroll <= 4799){
        botonesDelNavegador.forEach(e => e.classList.remove('active'))
        botonesDelNavegador[9].classList.add('active')
    } else if (posicionScroll >= 4800 && posicionScroll <= 5799){
        botonesDelNavegador.forEach(e => e.classList.remove('active'))
        botonesDelNavegador[10].classList.add('active')
    }
}

window.addEventListener('scroll', cambiarEstiloNavegador)