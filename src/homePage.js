import background from "./restaurantBackground.jpg";
export default function homePage() {
  //set page size
  document.documentElement.style.height = "100vh";
  document.documentElement.style.width = "100vw";

  // get content div where we will append our content
  const content = document.getElementById("content");
  content.style.display = "flex";

  // clear content div's children
  content.replaceChildren();

  // initialize background image
  const backgroundImg = new Image();
  backgroundImg.src = background;
  backgroundImg.setAttribute("id","backgroundImg");
  backgroundImg.style.opacity = ".7";

  // Title to append to home page
  const title = document.createElement("h1");
  title.style.fontSize = "3vw";
  title.textContent = "Tony's Ramen Shop";

  content.append(backgroundImg, title);
};