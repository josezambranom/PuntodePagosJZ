function enviarMensaje(msg) {
      // Obtener valores seleccionados
    let productoSeleccionado = document.getElementById("producto").value;
    let cantidadIngresada = document.getElementById("cantidad").value;
    let phone = "593963177642";
    let textoMensaje = "";

    // Validar que se haya seleccionado un producto y se haya ingresado una cantidad
    if (productoSeleccionado !== "0" && cantidadIngresada > '0') {

        // Validar el tipo de compra
        switch(msg){
        case 'promo': textoMensaje = "¡Hola! 👋🏻, estoy comprando una promoción desde la tienda online. Deseo *" + cantidadIngresada + "* cuenta(as) de *" 
          + productoSeleccionado + "* ";
        break;
        case 'nor':  textoMensaje = "¡Hola! 👋🏻, estoy comprando desde la tienda online. Deseo *" + cantidadIngresada + "* cuenta(as) de *" 
          + productoSeleccionado + "* ";
        break;
        case 'recarga' :  textoMensaje = "¡Hola! 👋🏻, estoy comprando desde la tienda online. Deseo recargar *$ " + cantidadIngresada + "* de *" 
          + productoSeleccionado + "* ";
        break;
        case 'recargajg' :  textoMensaje = "¡Hola! 👋🏻, estoy comprando desde la tienda online. Deseo recargar *" + cantidadIngresada + "* del videojuego *" 
          + productoSeleccionado + "* ";
        break;
        default:
        break;
      }

       // Construir la URL de la página de venta con los parámetros
      let urlVenta = "whatsapp://send?phone=" + encodeURIComponent(phone) + "&text=" + encodeURIComponent(textoMensaje);
      // Redireccionar a la página de venta
      window.location.href = urlVenta;

    } else {
      Swal.fire({
        title: 'todos los campos son requeridos',
        icon: 'error',
        customClass: {
          popup: 'contenidoalert'
        }
      });
    }
}

document.addEventListener("DOMContentLoaded", function() {
  var botonIrArriba = document.querySelector(".ir-arriba-btn");

  // Función para detectar el desplazamiento hacia abajo en la página
  var scrollListener = function() {
      // Verifica si la página se ha desplazado más de 20px
      if (document.body.scrollTop > 20 || document.documentElement.scrollTop > 20) {
          botonIrArriba.style.display = "block"; // Muestra el botón
      } else {
          botonIrArriba.style.display = "none"; // Oculta el botón
      }
  };

  // Agrega el listener para el evento de desplazamiento
  window.addEventListener('scroll', scrollListener);

  // Función para desplazar hacia arriba suavemente
  botonIrArriba.addEventListener("click", function() {
      window.scrollTo({top: 0, behavior: 'smooth'});
  });
});
