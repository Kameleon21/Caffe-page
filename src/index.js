import { top, bottom } from "./page.load";
import "./style/main.css";

// gets rid of margin and padding on body
const body = document.querySelector("body");
body.classList.add("body");

// load header on load of page
top();

//Home content
function mainHome() {
  // target main container div
  const container = document.querySelector(".container");
  // Create Home menu div
  const mainInfoTop = document.createElement("div");
  // create content for mainInfoTop
  const mainHeading = document.createElement("h1");
  const secondHeading = document.createElement("h3");
  const mainBtn = document.createElement("button");
  // assign values
  mainHeading.innerText = "Welcome To Cafe Restaurant";
  secondHeading.innerText = "Where fast and quality meet";
  mainBtn.innerText = "Order Now!";
  // assign classes
  mainBtn.classList.add("main-btn");
  mainInfoTop.classList.add("main-info");
  // append to mainInfoTop
  mainInfoTop.appendChild(mainHeading);
  mainInfoTop.appendChild(secondHeading);
  mainInfoTop.appendChild(mainBtn);
  // append to container
  container.appendChild(mainInfoTop);
  // add eventListener
  mainBtn.addEventListener("click", () => {
    container.innerHTML = "";
    top();
  });
}
mainHome();

