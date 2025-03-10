const themes = ["light-theme", "dark-theme", "blue-theme"];
let currentTheme = 0;

document.getElementById("theme-toggle").addEventListener("click", function() {
    document.body.classList.remove(themes[currentTheme]);
    currentTheme = (currentTheme + 1) % themes.length;
    document.body.classList.add(themes[currentTheme]);
});