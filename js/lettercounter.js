
        /**
         * Select the textarea element.
         */
        const textAreaElement = document.querySelector("#message");

        /**
         * Select the character counter element.
         */
        const characterCounterElement = document.querySelector("#character-counter");
        /**
         * Select the element that shows the number of characters typed in the textarea.
         */
        const typedCharactersElement = document.querySelector("#typed-characters");
        /**
         * Define the maximum number of characters allowed.
         */
        const maximumCharacters = 300;
        /**
         * Set attribute maxLength on textarea element
        */
        textAreaElement.setAttribute("maxLength", maximumCharacters);
        textAreaElement.setAttribute("placeholder", `Máximo ${maximumCharacters} caracteres.`);
        /**
         * Set inner information on element with id maximumCharacters.
         * */
        const maxElement = document.getElementById("maximum-characters");
        maxElement.innerHTML = maximumCharacters;
        /**
         * Add a "keyup" event listener on the textarea element.
         */
        textAreaElement.addEventListener("keyup", (event) => {
            /**
             * Count the number of characters typed.
             */
            const typedCharacters = textAreaElement.value.length;
            /**
             * Check if the typed characters is more than allowed characters limit.
             * If yes, then return false.
             */
            if (typedCharacters > maximumCharacters) {
                return false;
            }
            /**
             * Display the number of characters typed.
             */
            typedCharactersElement.textContent = typedCharacters;
            /**
             * Change the character counter text colour to "orange" if the typed
             * characters number is between 200 to 250. If more, then change the colour to "red".
             */
            if (typedCharacters >= 200 && typedCharacters < 250) {
                characterCounterElement.classList = "text-warning";
            } else if (typedCharacters >= 250) {
                characterCounterElement.classList = "text-danger";
            }
        });