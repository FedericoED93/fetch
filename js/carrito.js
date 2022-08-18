const carrito = []
const carritoEfectivo = []

class primeraInfancia {
    constructor(articulo, precio){
        this.articulo = articulo.toUpperCase();
        this.precio = parseFloat(precio)
    }

    descEfect () {
        this.precio = this.precio/1.10;
    }
}

let botonCamion = document.getElementById("btnCamion")
botonCamion.onclick = () => {
    carrito.push(new primeraInfancia("camion didactico promo", "3200"));
    carritoEfectivo.push(new primeraInfancia("camion didactico", "3200"));
    for(const primeraInfancia of carritoEfectivo) {
        primeraInfancia.descEfect();}
    console.log(carrito)
    console.log(carritoEfectivo)
}

let botonCubo =  document.getElementById("btnCubo")
botonCubo.onclick = () => {
    carrito.push(new primeraInfancia("Cubo Didactico", "2800"));
    carritoEfectivo.push(new primeraInfancia("Cubo Didactico", "2800"));
    for(const primeraInfancia of carritoEfectivo) {
        primeraInfancia.descEfect();}
    console.log(carrito)
    console.log(carritoEfectivo)
}

let botonApego = document.getElementById("btnApego")
    botonApego.onclick = () => {
    carrito.push(new primeraInfancia("Muñeco de Apego promo", "3000"));
    carritoEfectivo.push(new primeraInfancia("Muñeco de Apego", "3000"));
    for(const primeraInfancia of carritoEfectivo) {
        primeraInfancia.descEfect();}
    console.log(carrito)
    console.log(carritoEfectivo)
}

let botonPelotero = document.getElementById("btnPelotero")
    botonPelotero.onclick = () => {
    carrito.push(new primeraInfancia("Pelotero", "3300"));
    carritoEfectivo.push(new primeraInfancia("Pelotero", "3300"));
    for(const primeraInfancia of carritoEfectivo) {
        primeraInfancia.descEfect();}
    console.log(carrito)
    console.log(carritoEfectivo)
}

let botonSensorial = document.getElementById("btnSensorial")
    botonSensorial.onclick = () => {
    carrito.push(new primeraInfancia("Libro Sensorial", "1800"));
    carritoEfectivo.push(new primeraInfancia("Libro Sensorial", "1800"));
    for(const primeraInfancia of carritoEfectivo) {
        primeraInfancia.descEfect();}
    console.log(carrito)
    console.log(carritoEfectivo)
}

let botonXilofon = document.getElementById("btnXilofon")
botonXilofon.onclick = () => {
    carrito.push(new primeraInfancia("Xilfon Promo", "3200"));
    carritoEfectivo.push(new primeraInfancia("Xilfon", "3200"));
    for(const primeraInfancia of carritoEfectivo) {
        primeraInfancia.descEfect();}
    console.log(carrito)
    console.log(carritoEfectivo)
}
/*
let camionDidactico = prompt("Deseas comprar éste Camión Didáctico (SI - NO) ¡Está en Promo!")

if (camionDidactico == "SI" || camionDidactico == "Si" ) {
    carrito.push(new primeraInfancia("camion didactico promo", "3200"));
    carritoEfectivo.push(new primeraInfancia("camion didactico", "3200"));
}

let cuboDidactico = prompt("Deseas comprar éste Cubo Didáctico (SI - NO)")

if (cuboDidactico == "SI" || cuboDidactico == "Si" ) {
    carrito.push(new primeraInfancia("Cubo Didactico", "2800"));
    carritoEfectivo.push(new primeraInfancia("Cubo Didactico", "2800"));
}

let muñecoApego = prompt("Deseas comprar éste Muñeco de Apego (SI - NO)¡Está en Promo!")

if (muñecoApego == "SI" || muñecoApego == "Si" ) {
    carrito.push(new primeraInfancia("Muñeco de Apego promo", "3000"));
    carritoEfectivo.push(new primeraInfancia("Muñeco de Apego", "3000"));
}

let pelotero = prompt("Deseas comprar éste Pelotero (SI - NO)")

if (pelotero == "SI" || pelotero == "Si" ) {
    carrito.push(new primeraInfancia("Pelotero", "3300"));
    carritoEfectivo.push(new primeraInfancia("Pelotero", "3300"));
}

let libroSensorial = prompt("Deseas comprar éste Libro Sensorial (SI - NO)")

if (libroSensorial == "SI" || libroSensorial == "Si" ) {
    carrito.push(new primeraInfancia("Libro Sensorial", "1800"));
    carritoEfectivo.push(new primeraInfancia("Libro Sensorial", "1800"));
}

let xilofon = prompt("Deseas comprar éste Xilofón (SI - NO) ¡Está en Promo!")

if (xilofon == "SI" || xilofon == "Si" ) {
    carrito.push(new primeraInfancia("Xilfon Promo", "3200"));
    carritoEfectivo.push(new primeraInfancia("Xilfon", "3200"));
} */

/*

const totalCompra = carrito.reduce((acc, el) => acc + el.precio, 0)
const totalcompraEfect = carritoEfectivo.reduce((acc, el) => acc + el.precio, 0)

const promo = carrito.filter((el)=> el.articulo.includes("PROMO"))

console.log(carrito)
console.log(totalCompra)
console.log(carritoEfectivo)
console.log(totalcompraEfect)
console.log(promo)

alert("El total de tu carrito pagando en la web es : " + totalCompra)
alert("El total de tu carrito pagando en efectivo en nuestra tienda es : " + totalcompraEfect)

let carroCompra = document.getElementById("itemsCompra")
for (const item of carrito){
    let listado = document.createElement ("li");
    listado.innerHTML = item
    carroCompra.appendChild(listado);
}

let total = document.getElementById("totalPrecio")

total.innerHTML = totalCompra

let totalEfect = document.getElementById("totalprecioEfect")

totalEfect.innerHTML = totalcompraEfect */