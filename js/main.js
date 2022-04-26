// Animacion de la barra de navegación

function cambiarBarra(){
    const barra = document.getElementById('barra-principal'); 
    const logo = document.getElementById('logo');
    if (window.scrollY > 0) {    
        logo.src = "img/logo-colores.svg";
        barra.style.backgroundColor = 'white'
        barra.style.boxShadow = '5px 5px 18px #888888';
    } else {
        logo.src = "img/logo-negro.svg";
        barra.style.backgroundColor = '#FEDEDC'
    }
};
window.addEventListener('scroll', cambiarBarra);
