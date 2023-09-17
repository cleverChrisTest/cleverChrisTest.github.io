let confirm = document.getElementById("confirm");
let decline = document.getElementById("decline");

function removeBanner(event) {
    event.stopPropagation();
    let cookiesConsentBanner = document.querySelector("div.cookie-consent-banner");
    if (cookiesConsentBanner !== null) {
        cookiesConsentBanner.remove();
    }

    ["header", "main", "footer"].forEach(element => {
        document.getElementsByTagName(element)[0].classList.remove("blur");
    });
}

[confirm, decline].forEach(element =>{
    element.addEventListener("click", removeBanner);
});