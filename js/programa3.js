console.log("programa3.js");

// Reloj OBJETO con literales

let reloj = {

    totalSeconds: 0,
    sentido: 1,
    intervalID: undefined,

    start: function(){

        var self = this; // Aquí SI que disponemos del this :-)

        this.intervalID = setInterval(function(){

            // Aquí no disponemos del this :-(
            // Sí que disponemos del self

            console.log(display(self.totalSeconds));
            self.totalSeconds += self.sentido;
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
