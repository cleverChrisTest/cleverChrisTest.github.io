
decline.addEventListener("click", () => {
    let cookiesConsentBanner = document.querySelector("div.cookie-consent-banner");
    cookiesConsentBanner.remove();
    ["header", "main", "footer"].forEach(element => {
        document.getElementsByTagName(element)[0].classList.remove("blur");
    })
    

});