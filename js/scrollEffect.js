export let scroll = {
    addRestartButton: function () {
        return window.addEventListener("scroll", () => {
            const pos = document.querySelector("header").getBoundingClientRect().top;
            let start = document.getElementById("scrollUpButton");

            if (pos <= -684) {
                start.style.opacity = 1;
            } else {
                start.style.opacity = 0;
            }
        });
    },
    setAnimation: function() {
        const content = document.querySelectorAll("article");
        content.item(0).classList.add("mostrar");

        this.addRestartButton();

        window.addEventListener("scroll", () => {
            

            content.forEach(element => {
                const contenidoPos = element.getBoundingClientRect().top;
                const pantallaAltura = window.innerHeight / 1.2;
    
                if (contenidoPos < pantallaAltura) {
                    element.classList.add("mostrar");
                }
                if (contenidoPos > pantallaAltura) {
                    element.classList.remove("mostrar");
                }
            });
        });
    }
}