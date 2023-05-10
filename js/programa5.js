console.log("programa5.js");

// Reloj OBJETO a partir de una función constructora

function Reloj(nombre){
    
    this.nombre = nombre;
    this.estado = "STOPPED";
    this.totalSeconds = 0;
    this.intervalID = 0;
    this.sentido = 1;

    this.start = function(){
        this.totalSeconds = 0;
        this.resume();
    }

    this.pause = function(){
        this.estado = "PAUSED";
        clearInterval(this.intervalID);
    }

    this.resume = function(){
        clearInterval(this.intervalID);
        this.estado = "RUNNING";
        this.intervalID = setInterval(() => {
            console.log(`${this.nombre} ${display(this.totalSeconds)}`);
            this.totalSeconds += this.sentido;
        }, 1000);
    }

    this.reset = function(){
        clearInterval(this.intervalID);
        this.estado = "STOPPED";
        this.totalSeconds = 0;
        this.sentido = 1;
    }

    this.invert = function(){
        this.totalSeconds *= -1;
    }

}

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