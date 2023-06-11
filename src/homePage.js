import background from "./restaurantBackground.jpg";
export default function homePage() {
  const content = document.getElementById("content");
  content.replaceChildren();
  const backgroundImg = new Image();
  backgroundImg.setAttribute("id","backgroundImg");
  backgroundImg.style.opacity = ".7";
  const title = document.createElement("h1");

  content.style.display = "flex";
  title.textContent = "Tony's Ramen Shop";
  backgroundImg.src = background;
  content.append(backgroundImg, title);
};