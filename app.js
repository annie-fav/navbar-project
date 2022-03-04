
const navToggle = document.querySelector('.nav-toggle');
const links = document.querySelector('.links');

navToggle.addEventListener('click', function () {

var abierto = false;

function togNav(){
    var element = document.getElementById("nav");
    // Actualizamos el estado
    abierto = !abierto;

    !abierto ? 
       element.style.display = "none" :
        element.style.display = "inline-block"; // O tu propiedad deseada
}

});



