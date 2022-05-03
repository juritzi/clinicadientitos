// Para animar botones de navegacion
const botonesDelNavegador = document.querySelectorAll(".nav-link");

function cambiarEstilo (e) {
    botonesDelNavegador.forEach(e => e.classList.remove('active'))
    e.target.classList.add('active');
    console.log('questapasanda')
};

for (const e of botonesDelNavegador){
    e.addEventListener('click',cambiarEstilo);
}
