import initialPageLoad from "./initialPageLoad";
import menuPageLoad from "./menuPageLoad";
import contactPageLoad from "./contactPageLoad";
import './navbar.css'

let PRESSED = false


const content = document.getElementById("content");
const container = document.createElement("div")
container.classList.add("container")
content.appendChild(container)



const createNavbar = () => {
  const navbarItems = [
    { 
      "name" : "Home", 
      "function" : () => { initialPageLoad(container) ; PRESSED = true }
    }, 
    { 
      "name" : "Menu", 
      "function" : () => { menuPageLoad(container); PRESSED = true }
    }, 
    { 
      "name" : "Contact Us", 
      "function" : () => { contactPageLoad(container) ; PRESSED = true }
    }, 
  ]


  const navbar = document.createElement("nav");
  navbar.classList.add("navbar")
  const navbarList = document.createElement("ul");
  navbar.appendChild(navbarList);

  for (let item in navbarItems) {
    createNavbarItem(navbarItems[item], navbarList);
  }
  content.appendChild(navbar);
};

const createNavbarItem = (navItem, container) => {
  const itemContainer = document.createElement("li");
  itemContainer.classList.add("navbar-item")
  const item = document.createElement("a");
  item.addEventListener("click", navItem.function)
  item.textContent = `${navItem.name}`;
  itemContainer.appendChild(item);
  container.appendChild(itemContainer);
};

createNavbar();
if (!PRESSED) {
  initialPageLoad(container)
}
