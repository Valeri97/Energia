        /* Evitar scroll*/
window.addEventListener('beforeunload', function () {
    sessionStorage.setItem('scrollPosition', window.scrollY);
});
  
window.addEventListener('load', function () {
const scrollPosition = sessionStorage.getItem('scrollPosition');
if (scrollPosition) {
      window.scrollTo(0, parseInt(scrollPosition, 10));
    }
});

        /* Seccion inicio - boton/imagen/texto */
function MostrarTexto(textoId, mostrar) {
    const texto = document.getElementById(textoId);
    const seccion = document.getElementById("inicio");
    if (mostrar) {
        texto.style.display = "block";  // Mostrar el texto
        switch (textoId) {
            case 'texto1':
                seccion.style.backgroundImage = "linear-gradient(rgba(0, 0, 0, 0.5), rgba(0, 0, 0, 0.5)), url('img/ahorro.jpg')";
                seccion.style.backgroundSize = 'cover';
                break;
            case 'texto2':
                seccion.style.backgroundImage = "linear-gradient(rgba(0, 0, 0, 0.5), rgba(0, 0, 0, 0.5)), url('img/eficiencia.jpg')";
                seccion.style.backgroundSize = 'cover';
                break;
            case 'texto3':
                seccion.style.backgroundImage = "linear-gradient(rgba(0, 0, 0, 0.5), rgba(0, 0, 0, 0.5)), url('img/asesoramiento.jpg')";
                seccion.style.backgroundSize = 'cover';
                break;
        }
    } else {
        texto.style.display = "none";
        seccion.style.backgroundImage = "linear-gradient(rgba(0, 0, 0, 0.5), rgba(0, 0, 0, 0.5)), url('img/imagenPrincipal-inicio.jpg')";
    }
    
}
