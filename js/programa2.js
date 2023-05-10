console.log("programa2.js");

// Reloj NO OBJETO 

var totalSeconds = 0;
var sentido = 1;
var intervalID = undefined;

function start(){
    intervalID = setInterval(function(){
        console.log(display(totalSeconds));
        totalSeconds += sentido;
    },1000);
}

function pause(){
    clearInterval(intervalID);
}

function resume(){
    start();
}

function reset(){
    clearInterval(intervalID);
    totalSeconds = 0;
    sentido = 1;
}

function invert(){
    sentido *= -1;
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



/*

start()   00:00:00

pause()

resume()

reset()  // ponerlo a 0 y pararlo

invert() // 


*/