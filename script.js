const apikey = "563492ad6f91700001000001c4a853b4152a42a790a3ff6e397969e6"

let page_num = Math.floor(Math.random() * 100)
let photo_num = 1
let search_text="";
let search=false;
const query = 'Nature';

async function CuratedPhotos(photo_num){
  // fetch the data from api
  const data=await fetch(`https://api.pexels.com/v1/search?query=${query}&page=${page_num}&per_page=${photo_num}`, 
  {
      method: "GET",
      headers: {
          Accept: "application/json",
          Authorization: "563492ad6f91700001000001c4a853b4152a42a790a3ff6e397969e6",
      },
  });
  const response = await data.json();   //convert the response to json 
  console.log(response);

  display_images(response);   // call the display_images method to display the images on page
}

function display_images(response){
  //use forEach loop to iterate on each item
  response.photos.forEach((image) => {
      const photo = document.createElement("div");
      photo.innerHTML = `<img src=${image.src.large}>
      <figcaption> Photo by: ${image.photographer}📸</figcaption>`;
      document.querySelector(".display_images").appendChild(photo);
  });
}

CuratedPhotos(photo_num)