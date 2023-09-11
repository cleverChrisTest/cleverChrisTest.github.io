import { fecthUrl } from './funciones.js';
import { createTable } from './createTable.js';
import { createCardGroup } from './cardGenerator.js';
import { scrollEffect, scrollUpButtonEffect } from './scrollEffect.js';

function loadKnowledgeSection(){
    let infoTable = document.getElementById("infoTable");

    fecthUrl(url, (data) => {
        console.log("conocimientos:", data);
        let table = createCardGroup(data);
        table.classList.add("table", "table-dark");
        infoTable.appendChild(table);
    });
}

function init() {
    let url = "https://raw.githubusercontent.com/cleverChrisTest/Portfolio/main/Web_php/php/info.json";

    let img1 = "https://images.pexels.com/photos/3888151/pexels-photo-3888151.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1";
    let img2 = "https://images.pexels.com/photos/1181263/pexels-photo-1181263.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1";

    let arr = [
        {
            title: "Próxima posición", 
            img: [img1, "Nombre de tu empresa"], 
            description: "En esta sección irá el nombre de tu empresa, con un link a tu web y una breve descripción de las tareas desempeñadas.", 
            button: ["www.google.es", "Link a la web"], 
            footer_text: "text" 
        },
        {
            title: "Próxima posición", 
            img: [img2, "Nombre de la siguiente empresa"], 
            description: "En esta sección irá la posición que ocupe en tu empresa", 
            button: ["www.google.es", "Link a la web"], 
            footer_text: "text" 
        }

    ];

    loadKnowledgeSection();
    
    console.log("experiencia:");
    tarjetas.append(createCardGroup(arr));
    document.querySelectorAll("section")[0].classList.add("mostrar");

    scrollEffect();
    scrollUpButtonEffect();

};

window.addEventListener('load', init);
