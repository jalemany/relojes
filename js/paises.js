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
    tabla.classList.add("customTable");

    let filaHeaders = document.createElement("tr");

    let header1 = document.createElement("th");
    let header2 = document.createElement("th");
    let header3 = document.createElement("th");
    let header4 = document.createElement("th");
    let header5 = document.createElement("th");

    header1.innerHTML = "NOMBRE";
    header2.innerHTML = "CAPITAL";
    header3.innerHTML = "NÚMERO DE HABITANTES";
    header4.innerHTML = "BANDERA";
    header5.innerHTML = "CÓDIGO DE PAISES FRONTERIZOS";

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
        columna2.innerHTML = capital; 
        columna3.innerHTML = population;

        let bandera = document.createElement("img");
        bandera.setAttribute("src", banderaPNG);
        bandera.setAttribute("alt", banderaALT);
        bandera.style.height = '40px';
        bandera.style.width = '60px';

        columna4.appendChild(bandera);

        let listaFronteras = document.createElement("ul");
        for(let frontera of fronteras){
            let elemento = document.createElement("li");
            elemento.innerHTML = frontera;
            listaFronteras.appendChild(elemento);
        }

        columna5.appendChild(listaFronteras);

        fila.appendChild(columna1);
        fila.appendChild(columna2);
        fila.appendChild(columna3);
        fila.appendChild(columna4);
        fila.appendChild(columna5);

        tabla.appendChild(fila);

    }
}

solicitarPaises();