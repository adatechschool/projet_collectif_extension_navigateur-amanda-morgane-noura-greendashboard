//----------------------------------------------------------- Emoji en début de titre
let article = document.querySelector("h1");
let badge = document.createElement("p");
badge.textContent = "Et on n'oublie pas sa pensée écolo du jour 🌿☘️ ! ";
badge.style.fontSize = "17px";
badge.style.fontStyle= "italic";
badge.style.color = "#86d72f";
(article ?? heading).insertAdjacentElement("beforeend", badge);