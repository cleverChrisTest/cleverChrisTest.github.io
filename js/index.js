import { createCardGroup } from './cardGenerator.js';
import { scroll } from './scrollEffect.js';

function loadKnowledgeSection() {
    let infoTable = document.getElementById('infoTable');

    if(infoTable != null){
        let table = createCardGroup(languages);
        table.classList.add("table", "table-dark");
        infoTable.appendChild(table);
    }
    
}

function init() {
    /*Sroll effect*/
    document.querySelectorAll("article")[0].classList.add("mostrar");
    scroll.setAnimation();
};

window.addEventListener('load', init);
