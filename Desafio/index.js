const precio = 400000;
const precioSpan = document.querySelector(".precio-inicial");

precioSpan.innerHTML = precio.toLocaleString("es-CL");

const cantidadSpan = document.querySelector(".cantidad");
const valorTotalSpan = document.querySelector(".valor-total");

let cantidad = 0;

function sumar() {
    cantidad++; 
    cantidadSpan.innerHTML = cantidad; 
    const total = cantidad * precio;
    valorTotalSpan.innerHTML = total.toLocaleString("es-CL");
}

function restar() {
    if (cantidad > 0) {
        cantidad--; 
        cantidadSpan.innerHTML = cantidad;
        const total = cantidad * precio;
        valorTotalSpan.innerHTML = total.toLocaleString("es-CL");
    }
}