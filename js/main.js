document.addEventListener("DOMContentLoaded", function(event) {
    console.log("DOM fully loaded and parsed");

    
const btn_comprar = document.querySelector('#btn_proceso_compra');
const btn_experiencia = document.querySelector('#btn_experiencia');
const btn_comprarCapuchino = document.querySelector('#btn_comprar_producto_capucchino');
const btn_comprarAmericano = document.querySelector('#btn_comprar_producto_americano');
const btn_comprarMocca = document.querySelector('#btn_comprar_producto_mocca');
const btn_comprarEspresso = document.querySelector('#btn_comprar_producto_espreso');
const btn_continuarCompra = document.querySelector('.coffee__container__comprar');
const btn_confirmarPedidoCaracteristicas = document.querySelector('.btn_confirmarPedidoCaracteristicas');
const btn_tarjeta_credito = document.querySelector('.tarjeta_credito');
const btn_pagarEfectivo = document.querySelector('.efectivo');
const btn_comprar_efectivo = document.querySelector('.btn_comprar_efectivo');
const btn_comprar_tarjeta = document.querySelector('.btn_comprar_tarjeta');
const btn_otraBebida = document.querySelector('.btn_otraBebida');
const btn_finalizarPedido = document.querySelector('.btn_finalizarPedido');
const btn_proceso_compra_video = document.querySelector('#btn_proceso_compra_video');
const btn_siguiente_transa = document.querySelector('#btn_siguiente_transa');
const btn_siguiente_escanea = document.querySelector('#btn_siguiente_escanea');
const btn_siguiente_molino = document.querySelector('#btn_siguiente_molino');
const btn_siguiente_molienda = document.querySelector('#btn_siguiente_molienda');




const pantalla1 = document.querySelector('.pantalla_1');
const pantalla2 = document.querySelector('.pantalla_2');
const pantalla3 = document.querySelector('.pantalla_3');
const pantalla4 = document.querySelector('.pantalla_4');
const pantalla5 = document.querySelector('.pantalla_5');
const pantalla_pagoEfectivo = document.querySelector('.pantalla_pagoEfectivo');
const pantalla_pagoTarjeta = document.querySelector('.pantalla_pagoTarjeta');
const pantalla_final = document.querySelector('.pantalla_final');
const pantalla_video = document.querySelector('.pantalla_video');
const pantalla_tran_aprobada = document.querySelector('.pantalla_tran_aprobada');
const pantalla_vaso = document.querySelector('.pantalla_vaso');
const pantalla_molino = document.querySelector('.pantalla_molino');
const pantalla_video_molienda = document.querySelector('.pantalla_video_molienda');

var imagenProductoDescripcion = document.querySelector('.imagenProductoDesc');
var nombreProductoDesc = document.querySelector('.nombreProductoDesc');

var productoSeleccionado
var valor_producto

function verExperiencia(){
  pantalla1.style.display = 'none';
  pantalla_video.style.display = 'flex';
}



function procesoCompra(){    
pantalla1.style.display = 'none';
pantalla2.style.display = 'flex';
pantalla_video.style.display = 'none';

}

function pantallaDescripcionProducto(){
pantalla1.style.display = 'none';
pantalla2.style.display = 'none';
pantalla3.style.display = 'flex';
}


function comprarCapuchino(){
  productoSeleccionado = 1;
  imagenProductoDescripcion.src= './src/mocca_img.png';
  nombreProductoDesc.innerHTML = "Capucchino";

  pantallaDescripcionProducto();
  console.log(productoSeleccionado);
}


function comprarAmericano(){
  productoSeleccionado = 2;
  imagenProductoDescripcion.src= './src/americano_img.png';
  nombreProductoDesc.innerHTML = "Americano";

  pantallaDescripcionProducto();
  console.log(productoSeleccionado);
}


function comprarMocca(){
  productoSeleccionado = 3;
  imagenProductoDescripcion.src= './src/mocca_img.png';
  nombreProductoDesc.innerHTML = "Mocca";

  pantallaDescripcionProducto();
  console.log(productoSeleccionado);
}


function comprarEspresso(){
  productoSeleccionado = 4;
  imagenProductoDescripcion.src= './src/espresso_img.png';
  nombreProductoDesc.innerHTML = "Espresso";

  pantallaDescripcionProducto();
  console.log(productoSeleccionado);
}

function continuarCompra(){
pantalla1.style.display = 'none';
pantalla2.style.display = 'none';
pantalla3.style.display = 'none';
pantalla4.style.display = 'none';
pantalla5.style.display = 'flex';
}

function confirmarCompraOrigen(){
pantalla1.style.display = 'none';
pantalla2.style.display = 'none';
pantalla3.style.display = 'none';
pantalla4.style.display = 'none';
pantalla5.style.display = 'flex';
}

function mostrarPantallaTarjeta(){
pantalla1.style.display = 'none';
pantalla2.style.display = 'none';
pantalla3.style.display = 'none';
pantalla4.style.display = 'none';
pantalla5.style.display = 'none';
pantalla_pagoTarjeta.style.display = 'flex';
}

function mostrarPantallaEfectivo(){
pantalla1.style.display = 'none';
pantalla2.style.display = 'none';
pantalla3.style.display = 'none';
pantalla4.style.display = 'none';
pantalla5.style.display = 'none';
pantalla_pagoTarjeta.style.display = 'none';
pantalla_pagoEfectivo.style.display = 'flex';
}

function mostrarPantallaFinal(){
pantalla1.style.display = 'none';
pantalla2.style.display = 'none';
pantalla3.style.display = 'none';
pantalla4.style.display = 'none';
pantalla5.style.display = 'none';
pantalla_pagoTarjeta.style.display = 'none';
pantalla_pagoEfectivo.style.display = 'none';
pantalla_video_molienda.style.display = 'none';
pantalla_final.style.display = 'flex';
}

function mostrarPantallaTransaccion(){
  pantalla1.style.display = 'none';
  pantalla2.style.display = 'none';
  pantalla3.style.display = 'none';
  pantalla4.style.display = 'none';
  pantalla5.style.display = 'none';
  pantalla_pagoTarjeta.style.display = 'none';
  pantalla_pagoEfectivo.style.display = 'none';
  pantalla_final.style.display = 'none';
  pantalla_tran_aprobada.style.display = 'flex';
  }

function comprarOtraBebida(){
pantalla1.style.display = 'none';
pantalla2.style.display = 'flex';
pantalla3.style.display = 'none';
pantalla4.style.display = 'none';
pantalla5.style.display = 'none';
pantalla_pagoTarjeta.style.display = 'none';
pantalla_pagoEfectivo.style.display = 'none';
pantalla_final.style.display = 'none';
}

function finalizarPedido(){
  pantalla1.style.display = 'flex';
  pantalla2.style.display = 'none';
  pantalla3.style.display = 'none';
  pantalla4.style.display = 'none';
  pantalla5.style.display = 'none';
  pantalla_pagoTarjeta.style.display = 'none';
  pantalla_pagoEfectivo.style.display = 'none';
  pantalla_final.style.display = 'none';
}

function mostrarPantallaEscanear(){
  pantalla_tran_aprobada.style.display = 'none';
  pantalla_vaso.style.display = 'flex';
  pantalla_pagoEfectivo.style.display = 'none';
}

function mostrarPantallaMolino(){
  pantalla_vaso.style.display = 'none';
  pantalla_molino.style.display = 'flex';
}

function mostrarPantallaVideoMolienda(){
  pantalla_molino.style.display = 'none';
  pantalla_video_molienda.style.display = 'flex';
}




btn_comprar.addEventListener('click', procesoCompra);

btn_comprarCapuchino.addEventListener('click', comprarCapuchino);
btn_comprarAmericano.addEventListener('click', comprarAmericano);
btn_comprarMocca.addEventListener('click', comprarMocca);
btn_comprarEspresso.addEventListener('click', comprarEspresso);

btn_continuarCompra.addEventListener('click', continuarCompra);
btn_confirmarPedidoCaracteristicas.addEventListener('click', confirmarCompraOrigen);

btn_tarjeta_credito.addEventListener('click', mostrarPantallaTarjeta);
btn_pagarEfectivo.addEventListener('click', mostrarPantallaEfectivo);

btn_comprar_efectivo.addEventListener('click', mostrarPantallaEscanear);
btn_comprar_tarjeta.addEventListener('click', mostrarPantallaTransaccion);

btn_otraBebida.addEventListener('click', comprarOtraBebida);
btn_finalizarPedido.addEventListener('click', finalizarPedido);

btn_experiencia.addEventListener('click', verExperiencia);

btn_proceso_compra_video.addEventListener('click', procesoCompra);

btn_siguiente_transa.addEventListener('click', mostrarPantallaEscanear);
btn_siguiente_escanea.addEventListener('click', mostrarPantallaMolino );
btn_siguiente_molino.addEventListener('click', mostrarPantallaVideoMolienda);
btn_siguiente_molienda.addEventListener('click', mostrarPantallaFinal);


});



function simulateKeyPress(tecla) {
var input = document.querySelector(".input__teclado");
var valor = input.value;
  input.value = (valor*10) + (parseInt(tecla));

  
  

}