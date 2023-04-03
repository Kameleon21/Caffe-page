import { loadMenu, loadHome } from "../index";

// header on all pages
export function top() {
  // get the container
  const contain = document.querySelector(".container");
  // creating the header where three links will be
  const header = document.createElement("header");
  // create five links
  const divOne = document.createElement("div");
  const divTwo = document.createElement("div");
  const divThree = document.createElement("div");
  const divFour = document.createElement("div");
  const divFive = document.createElement("div");
  // assign values the three links
  divOne.innerText = "Home";
  divTwo.innerText = "Menu";
  divFour.innerText = "About";
  divFive.innerText = "Contact";
  //assign class to divThree for img
  divThree.classList.add("logo");
  // adding the four div's to header
  header.appendChild(divOne);
  header.appendChild(divTwo);
  header.appendChild(divThree);
  header.appendChild(divFour);
  header.appendChild(divFive);
  //adding styles to header
  header.classList.add("header");
  // adding to main container
  contain.appendChild(header);

  //add event handler for Menu
  loadMenu(divTwo, contain);
  loadHome(divOne, contain);
}

// footer on all pages
export function bottom() {
  // get the container
  const contain = document.querySelector(".container");
  // create the footer
  const footer = document.createElement("footer");
  // create elements
  const footHeading = document.createElement("h3");
  // assign values
  footHeading.innerHTML = "Developed by Kamil&#129323;";
  // append element to parent
  footer.appendChild(footHeading);
  // add class
  footer.classList.add("footer");
  contain.appendChild(footer);
}
