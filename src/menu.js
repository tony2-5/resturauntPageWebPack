// importing images
import background from "./restaurantBackground.jpg";
import tonkostuRamen from "./menuImages/tonkostuRamen.jpg";
import spicyMiso from "./menuImages/spicyMiso.jpg";
import shoyuRamen from "./menuImages/shoyuRamen.jpg";
import shioRamen from "./menuImages/shioRamen.jpg";
import baoBuns from "./menuImages/baoBuns.jpg";
import takoyaki from "./menuImages/takoyaki.jpg";

export default function menu() {
  //set page size
  document.documentElement.style.height = "2200px";

  const content = document.getElementById("content");
  content.style.columnGap = "30vw";

  // clear content div's children
  content.replaceChildren();

  // initialize background image
  const backgroundImg = new Image();
  backgroundImg.src = background;
  backgroundImg.setAttribute("id","backgroundImg");
  backgroundImg.style.opacity = ".4";

  //initialize menu items using grid
  content.style.display = "grid";
  const menuItems = []
  const appTitle = document.createElement("h1");
  const foodTitle = document.createElement("h1");
  // array holding objects we will be adding to content div 
  const menuStuff = [foodTitle, new Image(),new Image(),new Image(),new Image(), appTitle, new Image(),new Image()];
  // initalizing objects
  menuStuff[0].textContent = "Main Soups";
  menuStuff[1].src = tonkostuRamen;
  menuStuff[2].src = spicyMiso;
  menuStuff[3].src = shoyuRamen;
  menuStuff[4].src = shioRamen;
  menuStuff[5].textContent = "Appetizers";
  menuStuff[6].src = baoBuns;
  menuStuff[7].src = takoyaki;
  // adding text and styling to different page objects
  for(let i = 0; i<8; i++) {
    const foodItem = document.createElement("div");
    const para = document.createElement("p");
    const h2 = document.createElement("h2");
    foodItem.style.marginBottom = "10vh";
    switch(i) {
      case 0:
        foodItem.style.marginTop = "20vh";
        break;
      case 1:
        h2.textContent = "Tonkostu Ramen - $13";
        para.textContent = "Pork based ramen broth topped with braised pork belly, soft boiled soy marinated egg, green onions, and nori.";
        foodItem.appendChild(h2);
        menuStuff[i].style.border = "5px solid black";
        break;
      case 2:
        h2.textContent = "Spicy Miso Ramen - $13"
        para.textContent = "Miso based ramen broth topped with braised pork belly, soft boiled soy marinated egg, green onions, and nori.";
        foodItem.appendChild(h2);
        menuStuff[i].style.border = "5px solid black";
        break;
      case 3:
        h2.textContent = "Shoyu Ramen - $11";
        para.textContent = "Soy sauce based ramen broth topped with braised pork belly, soft boiled soy marinated egg, green onions, and nori.";
        foodItem.appendChild(h2);
        menuStuff[i].style.border = "5px solid black";
        break;
      case 4:
        h2.textContent = "Shio Ramen - $11";
        para.textContent = "Chicken based ramen broth topped with braised chicken thigh, soft boiled soy marinated egg, green onions, and nori.";
        foodItem.appendChild(h2);
        menuStuff[i].style.border = "5px solid black";
        break;
      case 6:
        h2.textContent = "Bao Buns (2pc) - $8";
        para.textContent = "Soft steamed buns filled with braised pork belly.";
        foodItem.appendChild(h2);
        menuStuff[i].style.border = "5px solid black";
        break;
      case 7:
        h2.textContent = "Takoyaki (4pc) - $8";
        para.textContent = "Fried dough balls with a squid filling, topped with a sweet and savory sauce.";
        foodItem.appendChild(h2);
        menuStuff[i].style.border = "5px solid black";
        break;
    }
    // grid area to be able to use grid-template-area
    foodItem.style.gridArea = String.fromCharCode(97+i);
    if(menuStuff[i].nodeName === "IMG") {
      foodItem.append(menuStuff[i], para)
    } else {
      foodItem.appendChild(menuStuff[i]);
    }
    menuItems.push(foodItem);
  }

  content.append(backgroundImg, ...menuItems);
}