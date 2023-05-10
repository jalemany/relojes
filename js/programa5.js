console.log("programa5.js");

// Reloj a partir de una función constructora
// Otra modificación es que el reloj tendrá nombre y mostrará su nombre cada vez que haga un console.log()

/*
let reloj1 = new Reloj("Rolex");
let reloj2 = new Reloj("CASIO");

*/

// Ejemplo de función constructora de Producto

function Producto(codigo, nombre){

    this.codigo = codigo;
    this.nombre = nombre;
    this.precio = undefined;
    this.descatalogdo = false;

    this.getFicha = () => {
        return `${this.nombre} [${this.precio}]`
    }
}

let producto1 = new Producto(10223, "Impresora Epson D45");
let producto2 = new Producto(20300, "Cartucho tinta");

producto1.precio = 670.70;
producto2.precio = 23.50;
producto2.descatalogado = true;

// ********************************************************************

function Reloj(nombre){
    // TODO
}

let reloj = {

    totalSeconds: 0,
    sentido: 1,
    intervalID: undefined,

    start: function() {

        intervalID = setInterval(() => {

            // Aquí SI disponemos del this :-)
            
            console.log(display(this.totalSeconds));
            this.totalSeconds += this.sentido;
        },1000);
    },

    pause: function(){
        clearInterval(this.intervalID);
    },

    resume: function(){
        this.start();
    },

    reset: function(){
        clearInterval(this.intervalID);
        this.totalSeconds = 0;
        this.sentido = 1;
    },

    invert: function(){
        this.sentido *= -1;
    }
};

function display(numeroSegundos){
    
    if(isNaN(numeroSegundos)){
        throw {
            error:`[${numeroSegundos}] no es un número`
        }
    }

    if(numeroSegundos > 359999){
        throw {
            error:`El número de segundos [${numeroSegundos}] no puede ser superior a 359999`
        }
    }

    let horas =  String(Math.floor(Math.abs(numeroSegundos) / 3600)).padStart(2, '0'); 
    let minutos = String(Math.floor(Math.abs(numeroSegundos) / 60 % 60)).padStart(2, '0'); 
    let segundos = String(Math.floor(Math.abs(numeroSegundos) % 60)).padStart(2, '0'); 

    let indicadorNegativo = numeroSegundos < 0 ? " *" : "";
    
    return `${horas}:${minutos}:${segundos}${indicadorNegativo}`;

}
