import { loadMenu, loadHome, loadAbout, loadContact } from "../index";

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
  // assign values the three links
  divOne.innerText = "Home";
  divTwo.innerText = "Menu";
  divThree.innerText = "About";
  divFour.innerText = "Contact";
  //assign class to divThree for img
  // adding the four div's to header
  header.appendChild(divOne);
  header.appendChild(divTwo);
  header.appendChild(divThree);
  header.appendChild(divFour);
  //adding styles to header
  header.classList.add("header");
  divOne.classList.add("home");
  divTwo.classList.add("Menu");
  divThree.classList.add("about");
  divFour.classList.add("Contact");
  // adding to main container
  contain.appendChild(header);
  //add event handlers
  loadMenu(divTwo, contain);
  loadHome(divOne, contain);
  loadAbout(divThree, contain);
  loadContact(divFour, contain);
}

// footer on all pages
export function bottom() {
  // get the container
  const contain = document.querySelector(".container");
  // create the footer
  const footer = document.createElement("footer");
  // assign values
  footer.innerHTML = `<div class="foot-contain">
  <div class="social">
  <h4>Connect With Us On Socials</h4>
  <p>Instagram: @Cafe123</p>
  <p>Twitter: @Cafe123</p>
  <p>Facebook: @Cafe123</p>
  </div>
  <div class="open-hrs">
  <h4>Opening Hours</h4>
  <p>Monday: 9am - 6pm</p>
  <p>Tuesday: 9am - 6pm</p>
  <p>Wednesday: 9am - 6pm</p>
  <p>Thursday: 9am - 6pm</p>
  <p>Friday: 9am - 6pm</p>
  <p>Saturday: 9am - 6pm</p>
  <p>Sunday: Closed</p>
  </div>
  </div>
  <h5>Developed by <a href="https://github.com/Kameleon21" target="_blank">Kamil</a> &#129323;</h5>`;
  // add class
  footer.classList.add("footer");
  // append element to parent
  contain.appendChild(footer);
}
