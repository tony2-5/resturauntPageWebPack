import background from "./restaurantBackground.jpg";
import phoneIcon from "./infoImages/phoneIcon.svg";
import emailIcon from "./infoImages/emailIcon.svg";
import githubIcon from "./infoImages/githubIcon.svg";
export default function info() {
  //set page size
  document.documentElement.style.height = "100vh";
  document.documentElement.style.width = "100vw";

  const content = document.getElementById("content");
  content.style.display = "flex";
  content.style.columnGap = "5vw";
  content.style.zIndex = "0";
  // clear content div's children
  content.replaceChildren();

  // initialize background image
  const backgroundImg = new Image();
  backgroundImg.src = background;
  backgroundImg.setAttribute("id","backgroundImg");
  backgroundImg.style.opacity = ".7";
  
  // adding our page icons and setting styling
  let contentArr = [];
  for(let i = 0; i<3; i++) {
    const div = document.createElement("div");
    const h2 = document.createElement("h3");
    div.style.alignSelf = "center";
    div.style.backgroundColor = "rgba(255,255,255,.6)";
    div.style.padding = "10px";
    div.style.borderRadius = "10%";
    const image = new Image();
    switch(i) {
      // phone icon
      case 0:
        h2.textContent = "999-999-9999";
        image.src = phoneIcon;
        div.append(image, h2);
        contentArr.push(div);
        break;
      // email icon
      case 1:
        h2.textContent = "placeHolder@fakemail.com";
        image.src = emailIcon;
        div.append(image, h2);
        contentArr.push(div);
        break;
      // github icon
      case 2:
        h2.textContent = "Click me!";
        image.src = githubIcon;
        div.setAttribute("id","github");
        div.addEventListener("click", () => {
          window.location = "https://github.com/tony2-5";
        });
        div.append(image, h2);
        contentArr.push(div);
        break;
    }
  }


  content.append(backgroundImg,...contentArr);
}