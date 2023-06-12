// importing other files to index file
import './styles.css';
import homePage from './homePage.js';
import menu from './menu.js';
import info from './info.js';

//initialize homepage
homePage();
//initialize tabs to swap to other pages
const tabs = (() => {
  let tabArr = [];
  const tabFunctions = [homePage,menu,info];
  // initialize different tabs calling the other page initialize functions onclick
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
