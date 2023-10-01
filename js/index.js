import { createCardGroup } from './cardGenerator.js';
import { scroll } from './scrollEffect.js';
import { arr, languages } from '../php/info.js';

function loadKnowledgeSection() {
    let infoTable = document.getElementById('infoTable');

    if(infoTable != null){
        let table = createCardGroup(languages);
        table.classList.add("table", "table-dark");
        infoTable.appendChild(table);
    }
    
}

function init() {
    loadKnowledgeSection();
    let tarjetas = document.getElementById('tarjetas');

    if(tarjetas !== null){
        tarjetas.append(createCardGroup(arr));
    }
    
    document.querySelectorAll("article")[0].classList.add("mostrar");

    scroll.setAnimation();

    //fecthUrl("./second.php", (data) => console.log(data))
};

window.addEventListener('load', init);
