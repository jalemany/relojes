console.log("programa7.js");

// Reloj OBJETO con clase de ES6 que lanza el evento 'timeGoesBy'

class Reloj {

    nombre = undefined;
    estado = "STOPPED";
    totalSeconds = 0;
    intervalID = 0;
    sentido = 1;

    constructor(nombre) {
        this.nombre = nombre;
    }

    start() {
        this.totalSeconds = 0;
        this.resume();
    }

    pause() {
        this.estado = "PAUSED";
        clearInterval(this.intervalID);
        this.lanzaEvento();
    }

    resume() {
        clearInterval(this.intervalID);
        this.estado = "RUNNING";
        this.intervalID = setInterval(() => {
            //console.log(`${nombre} ${display(totalSeconds)}`);
            this.lanzaEvento();
            this.totalSeconds += this.sentido;
        }, 1000);
    }

    reset() {
        clearInterval(this.intervalID);
        this.estado = "STOPPED";
        this.totalSeconds = 0;
        this.sentido = 1;
        this.lanzaEvento();
    }

    invert() {
        this.sentido *= -1;
        this.lanzaEvento();
    }

    lanzaEvento(){

        let event = new CustomEvent('timeGoesBy', {
            detail: {
                horas: Math.floor(this.totalSeconds / 3600),
                minutos: Math.floor(this.totalSeconds / 60 % 60),
                segundos: Math.floor(this.totalSeconds % 60),
                sentido: this.sentido,
                estado: this.estado,
                nombre:this.nombre
            }
        });

        window.dispatchEvent(event);
    }
  
}

