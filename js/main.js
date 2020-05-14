document.addEventListener("DOMContentLoaded", function(event) {
    console.log("DOM fully loaded and parsed");

    
const btn_comprar = document.querySelector('#btn_proceso_compra');
const btn_comprarCapuchino = document.querySelector('#btn_comprar_producto_capucchino');
const btn_comprarAmericano = document.querySelector('#btn_comprar_producto_capucchino');
const btn_comprarMocca = document.querySelector('#btn_comprar_producto_capucchino');
const btn_comprarEspresso = document.querySelector('#btn_comprar_producto_capucchino');

const pantalla1 = document.querySelector('.pantalla_1');
const pantalla2 = document.querySelector('.pantalla_2');
const pantalla3 = document.querySelector('.pantalla_3');

function procesoCompra(){    
pantalla1.style.display = 'none';
pantalla2.style.display = 'flex';
}

function pantallaDescripcionProducto(){
pantalla1.style.display = 'none';
pantalla2.style.display = 'none';
pantalla3.style.display = 'flex';
}

btn_comprar.addEventListener('click', procesoCompra);

btn_comprarCapuchino.addEventListener('click', pantallaDescripcionProducto);
btn_comprarAmericano.addEventListener('click', pantallaDescripcionProducto);
btn_comprarMocca.addEventListener('click', pantallaDescripcionProducto);
btn_comprarEspresso.addEventListener('click', pantallaDescripcionProducto);

});