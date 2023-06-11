import './styles.css';
import homePage from './homePage.js';
import menu from './menu.js';
import info from './info.js';

homePage();
const tabs = (() => {
  let tabArr = [];
  const tabFunctions = [homePage,menu,info];
  const content = document.getElementById("content");
  for(let i = 0; i<3; i++) {
    tabArr.push(document.createElement('div'));
    tabArr[i].setAttribute("class","tab");
    tabArr[i].addEventListener("click",tabFunctions[i]);
  }
  tabArr[0].textContent = "Home"
  tabArr[1].textContent = "Menu"
  tabArr[2].textContent = "Info"
  document.body.append(...tabArr);
})();
