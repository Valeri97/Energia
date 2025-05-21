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

        /* Header */
const btnMenu = document.getElementById("btnMenu");
const menu = document.getElementById("menuPrincipal");

btnMenu.addEventListener("click", () => {
  menu.classList.toggle("active");
});

        /* Seccion2 inicio - boton/imagen/texto */
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

        /* Seccion1 instroducción - cifras */
function cambiarCifra() {
  const cifras = [
    { valor: "15,4", unidad: "GW", texto: "Capacidad instalada total a diciembre 2024" },
    { valor: "13.6", unidad: "GW", texto: "Capacidad instalada consolidada a Diciembre 2024" },
    { valor: "26,7", unidad: "TWh", texto: "Produccion total a Diciembre 2024" },
    { valor: "24", unidad: "paises", texto: "Estamos presentes en los 5 continentes" },
    { valor: "14,4", unidad: "M", texto: "Toneladas de CO2 evitadas a Diciembre 2024" },
    { valor: "6,4", unidad: "M", texto: "Personas equivalentes abastecidas" }
  ];

  let index = 0;

  const valorSpan = document.querySelector(".cifras .valor");
  const unidadSpan = document.querySelector(".cifras .unidad");
  const textoP = document.querySelector(".cifras .textoCifras");

  const btnAnterior = document.querySelector(".btn-anterior");
  const btnSiguiente = document.querySelector(".btn-siguiente");

  function actualizarCifra(nuevoIndex) {
    // Animación salida
    valorSpan.style.opacity = 0;
    unidadSpan.style.opacity = 0;
    textoP.style.opacity = 0;

    setTimeout(() => {
      index = (nuevoIndex + cifras.length) % cifras.length; // Para que no pase el límite

      valorSpan.textContent = cifras[index].valor;
      unidadSpan.textContent = cifras[index].unidad;
      textoP.textContent = cifras[index].texto;

      // Animación entrada
      valorSpan.style.opacity = 1;
      unidadSpan.style.opacity = 1;
      textoP.style.opacity = 1;
    }, 300);
  }

  btnSiguiente.addEventListener("click", () => {
    actualizarCifra(index + 1);
  });

  btnAnterior.addEventListener("click", () => {
    actualizarCifra(index - 1);
  });
}

cambiarCifra();
