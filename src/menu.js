import background from "./restaurantBackground.jpg";
import tonkostuRamen from "./menuImages/tonkostuRamen.jpg";
import spicyMiso from "./menuImages/spicyMiso.jpg";
import shoyuRamen from "./menuImages/shoyuRamen.jpg";
import shioRamen from "./menuImages/shioRamen.jpg";
import baoBuns from "./menuImages/baoBuns.jpg";
import takoyaki from "./menuImages/takoyaki.jpg";
export default function menu() {
  document.documentElement.style.height = "1250px";
  const content = document.getElementById("content");
  content.replaceChildren();

  const backgroundImg = new Image();
  backgroundImg.src = background;
  backgroundImg.setAttribute("id","backgroundImg");
  backgroundImg.style.opacity = ".4";

  content.style.display = "grid";
  const menuItems = []
  const appTitle = document.createElement("h1");
  const foodTitle = document.createElement("h1");
  const menuStuff = [foodTitle, new Image(),new Image(),new Image(),new Image(), appTitle, new Image(),new Image()];
  menuStuff[0].textContent = "Main Soups";
  menuStuff[1].src = tonkostuRamen;
  menuStuff[2].src = spicyMiso;
  menuStuff[3].src = shoyuRamen;
  menuStuff[4].src = shioRamen;
  menuStuff[5].textContent = "Appetizers";
  menuStuff[6].src = baoBuns;
  menuStuff[7].src = takoyaki;
  for(let i = 0; i<8; i++) {
    const foodItem = document.createElement("div");
    foodItem.style.gridArea = String.fromCharCode(97+i);
    foodItem.appendChild(menuStuff[i]);
    menuItems.push(foodItem);
  }

  content.append(backgroundImg, ...menuItems);
}