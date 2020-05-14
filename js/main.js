document.addEventListener("DOMContentLoaded", function(event) {
    console.log("DOM fully loaded and parsed");

    
const btn_comprar = document.querySelector('#btn_proceso_compra');
const btn_comprarCapuchino = document.querySelector('#btn_comprar_producto_capucchino');
const btn_comprarAmericano = document.querySelector('#btn_comprar_producto_americano');
const btn_comprarMocca = document.querySelector('#btn_comprar_producto_mocca');
const btn_comprarEspresso = document.querySelector('#btn_comprar_producto_espreso');

const pantalla1 = document.querySelector('.pantalla_1');
const pantalla2 = document.querySelector('.pantalla_2');
const pantalla3 = document.querySelector('.pantalla_3');

var imagenProductoDescripcion = document.querySelector('.imagenProductoDesc');
var nombreProductoDesc = document.querySelector('.nombreProductoDesc');

var productoSeleccionado
var valor_producto

function procesoCompra(){    
pantalla1.style.display = 'none';
pantalla2.style.display = 'flex';
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


btn_comprar.addEventListener('click', procesoCompra);

btn_comprarCapuchino.addEventListener('click', comprarCapuchino);
btn_comprarAmericano.addEventListener('click', comprarAmericano);
btn_comprarMocca.addEventListener('click', comprarMocca);
btn_comprarEspresso.addEventListener('click', comprarEspresso);

});