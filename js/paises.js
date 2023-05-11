console.log("paises.js");

const URL = "https://restcountries.com/v3.1/all";

let idContenido = document.getElementById("idContenido");

function solicitarPaises(){
    let xhr = new XMLHttpRequest();
    xhr.onreadystatechange = function(){
        if (xhr.readyState === 4){
            let paises = JSON.parse(xhr.responseText);
            populateData(paises);
        }
    }
    xhr.open("GET", URL);
    xhr.send();
}

function populateData(paises){

    let tabla = document.createElement("table");

    let filaHeaders = document.createElement("tr");

    let header1 = document.createElement("th");
    let header2 = document.createElement("th");
    let header3 = document.createElement("th");
    let header4 = document.createElement("th");
    let header5 = document.createElement("th");

    header1.innerHTML = "Nombre";
    header2.innerHTML = "Capital";
    header3.innerHTML = "Número de habitantes";
    header4.innerHTML = "Bandera";
    header5.innerHTML = "Código de paises fronterizos";

    filaHeaders.appendChild(header1);
    filaHeaders.appendChild(header2);
    filaHeaders.appendChild(header3);
    filaHeaders.appendChild(header4);
    filaHeaders.appendChild(header5);

    tabla.appendChild(filaHeaders);

    idContenido.appendChild(tabla);

    for(let pais of paises){

        let nombre = pais.name.common;
        let capital = pais.capital ? pais.capital[0] : "";
        let population = pais.population; 
        let banderaPNG = pais.flags.png;
        let banderaALT = pais.flags.alt;
        let fronteras = pais.borders ? pais.borders : [];

        let fila = document.createElement("tr");

        let columna1 = document.createElement("td");
        let columna2 = document.createElement("td");
        let columna3 = document.createElement("td");
        let columna4 = document.createElement("td");
        let columna5 = document.createElement("td");

        columna1.innerHTML = nombre;
        columna2.innerHTML = capital; // *****************************************************
        columna3.innerHTML = population;
        columna4.innerHTML = nombre;
        columna5.innerHTML = nombre;


        


        //console.log(nombre + " - " + capital + " - " + population + " - " + banderaPNG + " - " + banderaALT);
        //console.log(fronteras);
    }
}

solicitarPaises();