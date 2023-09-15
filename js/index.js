import { fecthUrl } from './funciones.js';
import { createCardGroup } from './cardGenerator.js';
import { scrollEffect, scrollUpButtonEffect } from './scrollEffect.js';
import { arr, languages } from './info.js';

function loadKnowledgeSection() {

    let infoTable = document.getElementById("infoTable");

    let table = createCardGroup(languages);
    table.classList.add("table", "table-dark");
    infoTable.appendChild(table);
}

function init() {


    loadKnowledgeSection();

    tarjetas.append(createCardGroup(arr));
    document.querySelectorAll("section")[0].classList.add("mostrar");

    scrollEffect();
    scrollUpButtonEffect();
    fecthUrl("https://cleverchristest.github.io/second.html", (data) => console.log(data))
};

window.addEventListener('load', init);
