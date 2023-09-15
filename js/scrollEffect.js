export function scrollEffect(){
    window.addEventListener("scroll", () => {
        const pos = document.querySelector("header").getBoundingClientRect().top;
        let start = document.getElementById("scrollUpButton");

        const contenido = document.querySelectorAll("article");

        contenido.forEach(element => {
            const contenidoPos = element.getBoundingClientRect().top;
            const pantallaAltura = window.innerHeight / 1.3;
            if (contenidoPos < pantallaAltura) {
                element.classList.add("mostrar");
            }
            if(contenidoPos > pantallaAltura){
                element.classList.remove("mostrar");
            }
        });
    });
}

export function scrollUpButtonEffect(){
    window.addEventListener("scroll", () => {
        const pos = document.querySelector("header").getBoundingClientRect().top;
        let start = document.getElementById("scrollUpButton");

        if(pos <= -684){
            start.style.opacity = 1;
        } else {
            start.style.opacity = 0;
        }
    });
}