//----------------------------------------------------API PEXEL

const apikeyPhoto = "563492ad6f91700001000001c4a853b4152a42a790a3ff6e397969e6"

let page_num = Math.floor(Math.random() * 100)
let photo_num = 1
const query = 'Nature';

async function fetchPhoto(){
  const dataPhoto = await fetch(`https://api.pexels.com/v1/search?query=${query}&page=${page_num}&per_page=${photo_num}&orientation=landscape&size=medium`, 
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
   document.body.style.backgroundAttachment= "fixed";


  

}
fetchPhoto()


//------------------------------------------------------API PLANTE

const apikeyPlant = "6z_Y4D8lb_dc3cgXBPzhCHMIcCyA-wSpO6qHQQgb7CA";

const urlPlant = `https://trefle.io/api/v1/plants?token=${apikeyPlant}`;

function fetchPlant() {
  fetch(urlPlant)
    .then((response) => {
      return response.json();
    })
    .then((data) => {
      const name = document.querySelector("#name");
      name.innerHTML = data.data[0].common_name;
      const scientific_name = document.querySelector("#scientific_name");
      scientific_name.innerHTML = data.data[0].scientific_name;
      const image = document.querySelector("#image");
      image.src = data.data[0].image_url;
    });
}
fetchPlant()


//----------------------------------------------------API QUOTE

const urlQuotes = "https://zenquotes.io/api/random"

async function fetchQuote()
{
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