import "../style/menu.css";

// menu card
export default function menuTable() {
  // target main container div
  const container = document.querySelector(".container");
  // Create Home menu div
  const menu = document.createElement("div");
  // give values
  menu.innerHTML = `<div class="menu-grid">
  <div class="menu-item">Item</div>
  <div class="menu-price">Price</div>
  
  <div class="menu-item">Espresso</div>
  <div class="menu-price">$3.00</div>

  <div class="menu-item">Latte</div>
  <div class="menu-price">$4.50</div>

  <div class="menu-item">Cappuccino</div>
  <div class="menu-price">$4.00</div>

  <div class="menu-item">Americano</div>
  <div class="menu-price">$3.50</div>

  <div class="menu-item">Mocha</div>
  <div class="menu-price">$4.75</div>

  <div class="menu-item">Macchiato</div>
  <div class="menu-price">$3.75</div>

  <div class="menu-item">Tea</div>
  <div class="menu-price">$2.50</div>

  <div class="menu-item">Hot Chocolate</div>
  <div class="menu-price">$3.50</div>

  <div class="menu-item">Ham and Cheese Croissant</div>
  <div class="menu-price">$5.50</div>

  <div class="menu-item">Bagel with Cream Cheese</div>
  <div class="menu-price">$4.00</div>

  <div class="menu-item">Muffin</div>
  <div class="menu-price">$2.75</div>

  <div class="menu-item">Chocolate Chip Cookie</div>
  <div class="menu-price">$2.25</div>
</div>

`;
  // add class
  menu.classList.add("menu");
  // append to container
  container.appendChild(menu);
}
