import { top, bottom } from "./components/page.load";
import menuTable from "./components/menu";
import aboutUs from "./components/about";
import "./style/main.css";

// gets rid of margin and padding on body
const body = document.querySelector("body");
body.classList.add("body");

//Home content
function mainHome() {
  // target main container div
  const container = document.querySelector(".container");
  // Create Home menu div
  const mainInfoTop = document.createElement("div");
  // create content for mainInfoTop
  mainInfoTop.innerHTML = `<h1>Welcome To Cafe Restaurant</h1>
  <h3>Where fast and quality meet</h3>
  <button class="main-btn">Order Now!</button>`;
  // Get the button element and add an event listener to it
  const mainBtn = mainInfoTop.querySelector(".main-btn");
  loadMenu(mainBtn, container);
  // add class to mainInfoTop
  mainInfoTop.classList.add("main-info");
  container.appendChild(mainInfoTop);
  // add eventListener
}

// order of how the page will load
top();
mainHome();
bottom();

// loaders functions
// load the menu page
export function loadMenu(div, contain) {
  div.addEventListener("click", () => {
    contain.innerHTML = "";
    top();
    menuTable();
    bottom();
  });
}

// load home page
export function loadHome(div, contain) {
  div.addEventListener("click", () => {
    contain.innerHTML = "";
    top();
    mainHome();
    bottom();
  });
}
// load about page
export function loadAbout(div, contain) {
  div.addEventListener("click", () => {
    contain.innerHTML = "";
    top();
    aboutUs();
    bottom();
  });
}
// load contact page
export function loadContact(div, contain) {
  div.addEventListener("click", () => {
    contain.innerHTML = "";
    top();
    bottom();
  });
}
