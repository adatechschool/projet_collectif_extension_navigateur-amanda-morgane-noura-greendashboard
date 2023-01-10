//----------------------------------------------------API PEXEL
const apikeyPhotos = "563492ad6f91700001000001c4a853b4152a42a790a3ff6e397969e6"

let page_num = Math.floor(Math.random() * 100)
let photo_num = 1
const query = 'Nature';

async function fetchPhotos(photo_num){
  // fetch the data from api
  const dataPhotos=await fetch(`https://api.pexels.com/v1/search?query=${query}&page=${page_num}&per_page=${photo_num}`, 
  {
      method: "GET",
      headers: {
          Accept: "application/json",
          Authorization: apikeyPhotos,
      },
  });
  const response = await dataPhotos.json();   //convert the response to json 

  displayPhotos(response);   // call the display_images method to display the images on page
}

function displayPhotos(response){
  //use forEach loop to iterate on each item
  response.photos.forEach((image) => {
      const photo = document.createElement("div");
      photo.innerHTML = `<img src=${image.src.large}>
      <figcaption> Photo by: ${image.photographer}📸</figcaption>`;
      document.querySelector(".display_images").appendChild(photo);
  });
}

fetchPhotos(photo_num)

//------------------------------------------------------ API JOURNAUX
const apikeyNews = "cd932fbd09cd7e778caef748eff02208";

const article = 1;
async function fetchNews(){
const dataNews=await fetch(`http://api.mediastack.com/v1/news?access_key=cd932fbd09cd7e778caef748eff02208`,
  {
      method: "GET",
      headers: {
          Accept: "application/json",
          Authorization: apikeyNews,
      },
  });
  const responseNews = await dataNews.json();
  console.log(responseNews);
  
}
fetchNews();