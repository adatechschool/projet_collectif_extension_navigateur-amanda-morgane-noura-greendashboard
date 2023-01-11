//----------------------------------------------------API PEXEL

const apikeyPhoto = "563492ad6f91700001000001c4a853b4152a42a790a3ff6e397969e6"

let page_num = Math.floor(Math.random() * 100)
let photo_num = 1
const query = 'Nature';

async function fetchPhoto(){
  const dataPhoto = await fetch(`https://api.pexels.com/v1/search?query=${query}&page=${page_num}&per_page=${photo_num}`, 
  {
      method: "GET",
      headers: {
          Accept: "application/json",
          Authorization: apikeyPhoto,
      },
  });
  const response = await dataPhoto.json();   //convert the response to json 

  // displayPhoto(response);   // call the displayPhoto method to display the images on page

  //Afficher la photo et le photographe dans le HTML
  const photo = document.querySelector("#imagePexels");
  photo.src = response.photos[0].src.large;
  const photographer = document.querySelector("#photographer");
  photographer.innerHTML = response.photos[0].photographer;

}
fetchPhoto()

/* function displayPhoto(response){
  //use forEach loop to iterate on each item
  response.photos.forEach((image) => {
      const photo = document.createElement("div");
      photo.innerHTML = `<img src=${image.src.large}>
      <figcaption> Photo by: ${image.photographer}📸</figcaption>`;
      document.querySelector(".display_images").appendChild(photo);
  });
} */


//------------------------------------------------------ API JOURNAUX

const apikeyNews = "cd932fbd09cd7e778caef748eff02208"
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
fetchNews()

//Même article qu'hier soir >>> pouvoir avoir le dernier article publié


//----------------------------------------------------API NYT

/*
const urlNYT = "https://api.nytimes.com/svc/search/v2/articlesearch.json?fq=news_desk:(%22Environment%22)&api-key=COaEiJPyeXNsj63Tg69fU0QuU4AH0a8F";
//catégorie = Environnement  // Ajouter un filtre au niveau de la date pour avoir les derniers articles ?

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