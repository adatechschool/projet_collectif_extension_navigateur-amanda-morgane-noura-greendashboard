//----------------------------------------------------------- Emoji en début de titre
let article = document.querySelector("h1");
let badge = document.createElement("p");
badge.textContent = "Et on n'oublie pas sa pensée écolo du jour 🌿☘️ ! ";
badge.style.fontSize = "17px";
badge.style.fontStyle= "italic";
badge.style.color = "#86d72f";
(article ?? heading).insertAdjacentElement("beforeend", badge);


//----------------------------------------------------------- Remplacer les images de la page par l'image de la forêt

/*
let idExtension = chrome.runtime.id
console.log(idExtension)
let urlExtension = "chrome-extension://" + idExtension
console.log(urlImage)
let urlImage = urlExtension + "/foret.jpg"
console.log(urlImage)

function replaceImages(){
    let images = document.getElementsByTagName("img")
    for (img of images){
        //img.setAttribute("src", `url(${"chrome-extension://" + idExtension + "/images/foret.jpg"})`);
        img.setAttribute("src", `url(${urlImage})`);
        //img.setAttribute("src", "foret.jpg");
        img.className = "image";
    }
}
replaceImages()
*/