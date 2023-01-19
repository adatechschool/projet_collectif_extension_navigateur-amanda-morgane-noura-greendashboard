//----------------------------------------------------API PEXEL
/*
const apikeyPhoto = "563492ad6f91700001000001c4a853b4152a42a790a3ff6e397969e6"

let page_num = Math.floor(Math.random() * 100)
let photo_num = 1
const query = 'Nature';
const size = "large"

async function fetchPhoto(){
  const dataPhoto = await fetch(`https://api.pexels.com/v1/search?query=${query}&page=${page_num}&per_page=${photo_num}&orientation=landscape&size=${size}`, 
  {
      method: "GET",
      headers: {
          Accept: "application/json",
          Authorization: apikeyPhoto,
      },
  });
  const response = await dataPhoto.json();   //convert the response to json 

  //Afficher la photo et le photographe dans le HTML
  
  //const photo = document.querySelector("#imagePexels");
  //photo.src = response.photos[0].src.large;
  
  
  //const photographer = document.querySelector("#photographer");
  //photographer.innerHTML = response.photos[0].photographer;


   const photo = response.photos[0].src.large;
   document.body.style.backgroundImage = "url('" + photo + "')";
   document.body.style.backgroundRepeat = "no-repeat";
   document.body.style.backgroundSize = "cover";
   document.body.style.backgroundAttachment= "scroll";

}
fetchPhoto()
*/

//------------------------------------------------------API PLANTE

const apikeyPlant = "6z_Y4D8lb_dc3cgXBPzhCHMIcCyA-wSpO6qHQQgb7CA";

let page_num2 = Math.floor(Math.random() * 100);

const urlPlant = `https://trefle.io/api/v1/plants?token=${apikeyPlant}&page=${page_num2}`;

function fetchPlant() {
  fetch(urlPlant)
    .then((response) => {
      return response.json();
    })
    .then((data) => {
      const name = document.querySelector("#name");
      name.innerHTML = data.data[0].common_name;
      const scientific_name = document.querySelector("#scientific_name");
      scientific_name.innerHTML = `Scientific name : ${data.data[0].scientific_name}`;
      //const image = document.querySelector("#image");
      //image.src = data.data[0].image_url;
      const image = document.querySelector("#img");
      const img = data.data[0].image_url;
      image.style.backgroundImage = "url('" + img + "')";
      image.style.backgroundRepeat = "no-repeat";
      image.style.backgroundSize = "cover";
    });
}
fetchPlant()


//----------------------------------------------------API QUOTE

const urlQuotes = "https://zenquotes.io/api/random"

async function fetchQuote()
{
  console.log("test")
  const dataQuotes = await fetch(urlQuotes);
  const response = await dataQuotes.json();

  const quote = document.querySelector("#quote");
  quote.innerHTML = response[0].q;
  const author = document.querySelector("#author");
  author.innerHTML = response[0].a;

}
fetchQuote();


//----------------------------------------------------API FACT

const apikeyFact = "dwkBdeqrwnHNb0PVn8RbNQ==bxIqpCyZAbv3Nun0";
const urlFact = "https://api.api-ninjas.com/v1/facts?limit=1"

async function fetchFact(){
  const dataFact = await fetch(urlFact, 
  {
      method: "GET",
      headers: {
        'X-Api-Key': apikeyFact
      },
  });
  const response = await dataFact.json();   //convert the response to json 

  const fact = document.querySelector("#fact");
  fact.innerHTML = response[0].fact;

}
fetchFact()


//------------------------------------------------------BOUTON EFFACER BLOC

let togg1 = document.getElementById("togg1");
let togg2 = document.getElementById("togg2");
let togg3 = document.getElementById("togg3");
let togg4 = document.getElementById("togg4");
let togg5 = document.getElementById("togg5");
let togg6 = document.getElementById("togg6");
let togg7 = document.getElementById("togg7");
let togg8 = document.getElementById("togg8");
let d1 = document.getElementById("fluxRSSPodcast");
let d2 = document.getElementById("fluxRSSInfos");
let d3 = document.getElementById("radio");
let d4 = document.getElementById("trefle");
let d5 = document.getElementById("quoteOfTheDay");
let d6 = document.getElementById("factOfTheDay");
let d7 = document.getElementById("numberOfTheDay");
let d8 = document.getElementById("blocNote");

togg1.addEventListener("click", () => {
  if(getComputedStyle(d1).display != "none"){
    d1.style.display = "none";
  } else {
    d1.style.display = "block";
  }
})
function togg(){
  if(getComputedStyle(d2).display != "none"){
    d2.style.display = "none";
  } else {
    d2.style.display = "block";
  }
};
togg2.onclick = togg;
function toggc(){
  if(getComputedStyle(d3).display != "none"){
    d3.style.display = "none";
  } else {
    d3.style.display = "block";
  }
};
togg3.onclick = toggc;
function toggd(){
  if(getComputedStyle(d4).display != "none"){
    d4.style.display = "none";
  } else {
    d4.style.display = "block";
  }
};
togg4.onclick = toggd;

function togge(){
  if(getComputedStyle(d5).display != "none"){
    d5.style.display = "none";
  } else {
    d5.style.display = "block";
  }
};
togg5.onclick = togge;
function toggf(){
  if(getComputedStyle(d6).display != "none"){
    d6.style.display = "none";
  } else {
    d6.style.display = "block";
  }
};
togg6.onclick = toggf;
function toggg(){
  if(getComputedStyle(d7).display != "none"){
    d7.style.display = "none";
  } else {
    d7.style.display = "block";
  }
};
togg7.onclick = toggg;
function toggh(){
  if(getComputedStyle(d8).display != "none"){
    d8.style.display = "none";
  } else {
    d8.style.display = "block";
  }
};
togg8.onclick = toggh;

const refreshButton = document.querySelector('.refresh-button');
const refreshPage = () => {
  location.reload();
}
refreshButton.addEventListener('click', refreshPage);


//------------------------------------------------------GENERER NOUVELLES INFOS

document.getElementById("buttonQuote").addEventListener("click", modifyQuote);
function modifyQuote(){
  fetchQuote();
  document.getElementById('buttonQuote').innerHTML = "C'est fait : retourne la carte !";
}

document.getElementById("buttonFact").addEventListener("click", modifyFact);
function modifyFact(){
  fetchFact();
  document.getElementById('buttonFact').innerHTML = "C'est fait : retourne la carte !";
}

document.getElementById("buttonPlant").addEventListener("click", modifyPlant);
function modifyPlant(){
  fetchPlant(); //Ne fonctionne pas
  document.getElementById('buttonPlant').innerHTML = "C'est fait : retourne la carte !";
}

document.getElementById("buttonNumber").addEventListener("click", modifyNumber);
function modifyNumber(){
  randomNumber();
  document.getElementById('buttonNumber').innerHTML = "C'est fait : retourne la carte !";
}



//------------------------------------------------------BACKGROUND ALEATOIRE

function randomBackground(){
  let random = Math.floor(Math.random() * 23) + 0;
  let backgroundImage = ["url('images/background/automne.jpg')",
                    "url('images/background/auvergne.jpg')",
                    "url('images/background/bois.jpg')",
                    "url('images/background/brouillard.jpg')",
                    "url('images/background/champ.jpg')",
                    "url('images/background/coquelicot.jpg')",
                    "url('images/background/desert.jpg')",
                    "url('images/background/dunes.jpg')",
                    "url('images/background/ecureuil.jpg')",
                    "url('images/background/espace.jpg')",
                    "url('images/background/feuilles.jpg')",
                    "url('images/background/foret.jpg')",
                    "url('images/background/lac.jpg')",
                    "url('images/background/mer.jpg')",
                    "url('images/background/montagnes.jpg')",
                    "url('images/background/neige.jpg')",
                    "url('images/background/noir.jpg')",
                    "url('images/background/nuage.jpg')",
                    "url('images/background/orange.jpg')",
                    "url('images/background/plage.jpg')",
                    "url('images/background/roses.jpg')",
                    "url('images/background/savane.jpg')",
                    "url('images/background/violettes.jpg')"]
  document.body.style.backgroundImage = backgroundImage[random];
  document.body.style.backgroundSize = "cover";
  document.body.style.backgroundAttachment= "scroll";
}
randomBackground()

//------------------------------------------------------ASTUCES
function randomNumber(){
  let random = Math.floor(Math.random() * 31) + 0;
  let chiffreEcolo = ["Le visionnage en ligne d’une vidéo en haute définition de 10 minutes sur un smartphone équivaut à utiliser à pleine puissance un four électrique de 2000W pendant 5 minutes.",
    "Selon le CNRS, 20% de la biodiversité guyanaise n’aurait ainsi pas été remplacée en raison du réchauffement climatique.",
    "50% du territoire français serait pollué par les nitrates.",
    "En 30 ans, 30% de la superficie des prairies et 60% des zones humides ont disparus en France.",
    "En France, le nombre d’oiseaux communs en milieu agricole a diminué de 30% entre 1989 et 2007.",
    "La vie d’une abeille est relativement courte, 6 semaines. Pour polliniser les fleurs qu’elle rencontre dans un périmètre de 2 km, elle peut parcourir 800 km dans sa vie.",
    "17% : c'est le pourcentage d'espèces éteintes ou menacées dans les listes rouges nationales en 2020.",
    "Les émissions mondiales de CO2 fossile ont augmenté de + 68% entre 1990 et 2019. Elles représentent 3/4 des émissions mondiales de gaz à effet de serre liées aux activités humaines.",
    "En 2019, la Chine représente 30% des émissions mondiales de CO2 fossile, les États-Unis 13% et l’Union européenne 8%.",
    "En moyenne mondiale, les émissions mondiales de CO2 fossile ramenées à la population sont de 5 tonnes de CO2 par an et par habitant, soit 15% de plus qu’en 1990.",
    "Dans l’UE, le premier secteur émetteur est l’industrie de l’énergie, tandis que le secteur des transports est le principal contributeur aux émissions françaises.",
    "Évolution des émissions mondiales de gaz à effet de serre (1990-2020) : + 51%.",
    "L’extraction des ressources a plus que triplé depuis 1970, avec notamment une augmentation de 45% de la consommation de combustibles fossiles.",
    "Nous utilisons l'équivalent de 1,6 planète Terre pour maintenir notre mode de vie actuel.",
    "Dans les pays à revenu élevé, l’empreinte matérielle par habitant est plus de dix fois supérieure à celle des pays à faible revenu.",
    "Le groupe des 20 principales économies (G20) est responsable de 78% des émissions mondiales de gaz à effet de serre.",
    "À l'échelle mondiale, les bâtiments résidentiels et commerciaux consomment plus de la moitié de l'électricité.",
    "Les émissions provenant de la climatisation et de la réfrigération devraient augmenter de 90% d’ici 2050 par rapport aux niveaux de 2017.",
    "Les émissions de gaz à effet de serre du secteur des transports ont plus que doublé depuis 1970, environ 80% de cette augmentation provenant des véhicules routiers.",
    "Avec une douche d’environ 10 minutes par jour, une personne moyenne consomme l’équivalent de plus de 100 000 verres d’eau potable chaque année.",
    "Un tiers de toute la nourriture produite est perdue, gaspillée ou gâchée.",
    "Le monde devra produire environ 50% de nourriture en plus d’ici 2050 pour nourrir une population mondiale croissante.",
    "L’industrie de la mode (vêtements et chaussures) produit annuellement plus de 8% des gaz à effet de serre et 20% des eaux usées mondiales.",
    "Il faut environ 7500 litres d’eau pour fabriquer une seule paire de jeans, de la production du coton à la livraison du produit final au magasin.",
    "85% des textiles finissent dans des décharges ou sont incinérés, bien que la plupart de ces matériaux puissent être réutilisés.",
    "Chaque seconde, l’équivalent d’un camion poubelle rempli de textiles est mis en décharge ou brûlé.",
    "Quelque 93 milliards de mètres cubes d’eau, assez pour répondre aux besoins de consommation de cinq millions de personnes, sont utilisés chaque année par l’industrie de la mode.",
    "Chaque année, on estime à 11,2 milliards de tonnes la quantité de déchets solides collectés dans le monde.",
    "Le recyclage crée des emplois : le secteur du recyclage emploie 12 millions de personnes rien qu’au Brésil, en Chine et aux États-Unis.",
    "Seuls 9% des déchets plastiques produits ont été recyclés. Environ 12% ont été incinérés, tandis que le reste s’est accumulé dans des décharges, des dépotoirs ou dans le milieu naturel.",
    "De 2010 à 2019, les déchets électroniques produits dans le monde sont passés de 5,3 à 7,3 kilogrammes par habitant par an."]
    
    document.getElementById('chiffreDuJour').innerHTML = chiffreEcolo[random];
}
randomNumber()

//------------------------------------------------------API JOURNAUX
//Ne fonctionne pas à tous les coups

/* const apikeyNews = "cd932fbd09cd7e778caef748eff02208"
//const apikeyNews = "708f4cfa9af5525467482dcaeea94636"
const keywords = "ecologie"
const countries = "fr"

const urlNews = `http://api.mediastack.com/v1/news?access_key=${apikeyNews}&keywords=${keywords}&countries=${countries}`;
//const urlNews = "http://api.mediastack.com/v1/news?access_key=708f4cfa9af5525467482dcaeea94636&keywords=ecologie&countries=fr";

function fetchNews() {
  fetch(urlNews)
    .then((response) => {
      return response.json();
    })
    .then((data) => {
      const titre = document.querySelector("#titre");
      titre.innerHTML = data.data[0].title;
      const auteur = document.querySelector("#auteur");
      auteur.innerHTML = data.data[0].author;
      const source = document.querySelector("#source");
      source.innerHTML = data.data[0].source;
      const image = document.querySelector("#image");
      image.src = data.data[0].image;
      const description = document.querySelector("#description");
      description.innerHTML = data.data[0].description;
    });
}
fetchNews() */

//Même article qu'hier soir >>> pouvoir avoir le dernier article publié


//----------------------------------------------------API NYT
//Articles payants...

/*
const apikeyNYT = "COaEiJPyeXNsj63Tg69fU0QuU4AH0a8F";
const category = "climate" // news_desk:environment
const date = "20230101" // begin_date=20230101

//const urlNYT = "https://api.nytimes.com/svc/search/v2/articlesearch.json?fq=news_desk:climate&begin_date=20230101&api-key=COaEiJPyeXNsj63Tg69fU0QuU4AH0a8F";
const urlNYT = `https://api.nytimes.com/svc/search/v2/articlesearch.json?fq=news_desk:${category}&begin_date=${date}&api-key=${apikeyNYT}`;

function fetchNYT() {
  fetch(urlNYT)
    .then((response) => {
      return response.json();
    })
    .then((data) => {
      const title = document.querySelector("#title");
      title.innerHTML = data.response.docs[0].headline.main; //affiche le titre du premier article
      const abstract = document.querySelector("#abstract");
      abstract.innerHTML = data.response.docs[0].abstract; //affiche le résumé de l'article
      const link = document.querySelector("#link");
      link.innerHTML = data.response.docs[0].web_url; //affiche le lien vers l'article
    });
}
fetchNYT()
*/


/*
function replaceImages(){
  let images = document.getElementsByTagName("img")
  images.src = "/foret.jpg";
  images.className = "image";
  console.log(images)
}

document.getElementById("myButton").addEventListener("click", replaceImages);
*/


let myWindowId;
const contentBox = document.querySelector("#content");

/*
Make the content box editable as soon as the user mouses over the sidebar.
*/
window.addEventListener("mouseover", () => {
  contentBox.setAttribute("contenteditable", true);
});

/*
When the user mouses out, save the current contents of the box.
*/
window.addEventListener("mouseout", () => {
  contentBox.setAttribute("contenteditable", false);
  browser.tabs.query({windowId: myWindowId, active: true}).then((tabs) => {
    let contentToStore = {};
    contentToStore[tabs[0].url] = contentBox.textContent;
    browser.storage.local.set(contentToStore);
  });
});

/*
Update the sidebar's content.
1) Get the active tab in this sidebar's window.
2) Get its stored content.
3) Put it in the content box.
*/
function updateContent() {
  browser.tabs.query({windowId: myWindowId, active: true})
    .then((tabs) => {
      return browser.storage.local.get(tabs[0].url);
    })
    .then((storedInfo) => {
      contentBox.textContent = storedInfo[Object.keys(storedInfo)[0]];
    });
}

/*
Update content when a new tab becomes active.
*/
browser.tabs.onActivated.addListener(updateContent);

/*
Update content when a new page is loaded into a tab.
*/
browser.tabs.onUpdated.addListener(updateContent);

/*
When the sidebar loads, get the ID of its window,
and update its content.
*/
browser.windows.getCurrent({populate: true}).then((windowInfo) => {
  myWindowId = windowInfo.id;
  updateContent();
});