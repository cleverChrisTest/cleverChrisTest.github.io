function init() {
    let theme = "";
    if (window.matchMedia && window.matchMedia('(prefers-color-scheme: dark)').matches) {
        theme = "dark";
      } else {
        theme = "light";
      }
      
      theme = "light";
      document.body.setAttribute('data-bs-theme', theme);
}

window.addEventListener('load', init);