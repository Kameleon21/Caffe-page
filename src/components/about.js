import "../style/about.css";

// main frame for the about section
export default function aboutUs() {
  // target main container div
  const container = document.querySelector(".container");
  // Create about div
  const about = document.createElement("div");
  // give values
  about.innerHTML = `<div class="about-contain">
  <h2>Quick Introduction</h2>
  <p>At Cafe, we believe in more than just serving you a cup of coffee or a delectable treat. Our mission is to create a warm, inviting, and memorable experience that celebrates the simple joys of life. Since our humble beginnings in [Year Established], we've been dedicated to crafting the finest beverages, mouthwatering pastries, and savory bites, all while embracing our local community's unique spirit.</p>

  <p>Our story began with a passion for creating a space where people could gather, connect, and unwind over a delicious meal or a comforting cup of coffee. We take pride in our carefully curated menu, which features the freshest, locally-sourced ingredients and a touch of our culinary team's creativity. Our diverse selection is designed to satisfy every palate, from our signature [Cafe Specialty] to the heartwarming, homemade soups, artisanal sandwiches, and sinfully delightful pastries.</p>

  <p>At [Cafe Name], we are more than just a cafe; we are a family. Our team of skilled baristas, talented chefs, and attentive staff are the backbone of our success, and their commitment to providing exceptional service is what sets us apart. We believe in fostering a culture that values personal growth, creativity, and collaboration, ensuring that we continue to be a beacon of excellence for our patrons.</p>

  <p>Community is at the heart of everything we do. We are proud to support local artists, farmers, and suppliers who share our vision for a sustainable, vibrant, and thriving community. By hosting events, fundraisers, and showcases, we aim to be a hub for creative expression and a platform for meaningful connections.</p>
  
  <p>So, come on in, pull up a chair, and let us treat you to the irresistible flavors, enchanting aromas, and heartfelt hospitality that make Cafe your home away from home. We can't wait to share our love for food, coffee, and community with you.</p>

  </div>`;
  // add class
  about.classList.add("main-frame");
  // append about to parent
  container.appendChild(about);
}
