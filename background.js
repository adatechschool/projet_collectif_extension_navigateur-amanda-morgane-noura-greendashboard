//Rafraichir la page
function refreshPage(){
    location.reload();
}


//Remplacer les images de la page par l'image de la forêt
function replaceImages(){
    let urlImage = chrome.runtime.getURL("images/foret.jpg");
    let images = document.getElementsByTagName("img")
    for (img of images){
        img.src = urlImage;
        img.className = "imageForet";
    }
}


//Ajoute une icône "OFF" sur le bouton de l'extension
chrome.runtime.onInstalled.addListener(() => {
    chrome.action.setBadgeText({
      text: "OFF",
    });
});


//Mettre à jour la page en fonction du statut ON ou OFF
chrome.action.onClicked.addListener(async (tab) => {
    const prevState = await chrome.action.getBadgeText({ tabId: tab.id });
    const nextState = prevState === 'ON' ? 'OFF' : 'ON'

    // Set the action badge to the next state
    await chrome.action.setBadgeText({
        tabId: tab.id,
        text: nextState,
    });

    if (nextState === "ON") {
        // Remplacer les images de la page lorsque user clique sur ON
        await chrome.scripting.executeScript({
            func: replaceImages,
            //files: ['content-script.js'],
            target: { tabId: tab.id },
        });
    } else if (nextState === "OFF") {
        // Rafraichir la page lorsque user clique sur OFF
        await chrome.scripting.executeScript({
            func: refreshPage,
            target: { tabId: tab.id },
        });
    }
});