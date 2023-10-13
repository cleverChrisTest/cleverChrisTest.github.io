
const textAreaElement = document.querySelector("#message");

const characterCounterElement = document.querySelector("#character-counter");
const typedCharactersElement = document.querySelector("#typed-characters");
const maximumCharacters = 300;

textAreaElement.setAttribute("maxLength", maximumCharacters);
textAreaElement.setAttribute("placeholder", `Máximo ${maximumCharacters} caracteres.`);
const maxElement = document.getElementById("maximum-characters");
maxElement.innerHTML = maximumCharacters;

textAreaElement.addEventListener("keyup", (event) => {
    const typedCharacters = textAreaElement.value.length;
    if (typedCharacters > maximumCharacters) {
        return false;
    }
    typedCharactersElement.textContent = typedCharacters;
    if (typedCharacters >= 200 && typedCharacters < 250) {
        characterCounterElement.classList = "text-warning";
    } else if (typedCharacters >= 250) {
        characterCounterElement.classList = "text-danger";
    }
});