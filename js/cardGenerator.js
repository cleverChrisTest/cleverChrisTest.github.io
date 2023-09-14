/**
 * Data must be an array of objects, every object contains information about the following card content:
 *  * Card title
 *  * Card image url
 *  * Card description text
 *  * Card button text
 *  * Card footer text
 * If you ommit some information the card will be generated without that element. 
 * For every object in the array a card will be generated. The pattern of the object have to be like this:
 * 
 * { title: "text", img: ["url", "alt"], description: "text", button: ["url", "text"], footer_text:"text"}
 * 
 * @param {*} data 
 * @return HTMLElment
 */
export function createCardGroup(arrayOfObjects){
    let cardgroup = document.createElement("div");
    cardgroup.classList.add("card-group");
    

    arrayOfObjects.forEach(item => cardgroup.appendChild(document.createRange().createContextualFragment(createCard(item))));
    return cardgroup;
}

function createCard(item){
    let card = 
        `<div class="card">
            ${addImage(item)}
            <div class="card-body">
                <h5 class="card-title">${item.title}</h5>
                <p class="card-text">${item.description}</p>
            </div>
            ${addFooter(item)}
        </div>`;
    return card;
}

function addImage(item){
    if(item.img !== undefined){
        return `<div class="card-img-top" style="background-image: url(${item.img[0]})" alt="${item.img[1]}"></div>`;
    } else {
        return `<div class="card-img-top" style="background-image: url()" alt="not found"></div>`;
    }
}

function addFooter(item){
    if(item.button !== undefined){
        return `
        <div class="card-footer">
            <a href="${item.button[0]}" class="btn btn-primary">${item.button[1]}</a>
        </div>`;
    } else {
        return "";
    }
    
}