console.log("programa1.js");

// Función que muestra segundos en formato 00:00:00

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
