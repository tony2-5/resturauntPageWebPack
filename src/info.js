import background from "./restaurantBackground.jpg";
export default function info() {
  const content = document.getElementById("content");
  content.replaceChildren();

  const backgroundImg = new Image();
  backgroundImg.src = background;
  backgroundImg.setAttribute("id","backgroundImg");

  content.style.display = "flex";
  content.append(backgroundImg);
}