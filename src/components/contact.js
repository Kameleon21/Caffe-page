import "../style/contact.css";

export default function contactUs() {
  // target main container div
  const container = document.querySelector(".container");
  // Create the container for the contact us section
  const contact = document.createElement("div");
  // give values
  contact.innerHTML = `<div class="contact-container">
    <div class="contact-heading">
    <h2>Connect With Us – We're Here to Help!</h2>
    </div>
    <div class="left-contact">
        <p>Have a question, suggestion, or simply want to share your [Cafe Name] experience? We'd love to hear from you! Our team is committed to providing exceptional service and ensuring that every visit to our cafe leaves you with a smile on your face.</p>
        <p>To get in touch, feel free to reach out through any of the following channels:</p>
        <p>📞 Phone: (123) 456-7890
        📧 Email: hello@cafe.com
        📍 Address: [Cafe Street , [City], [State], [Zip Code]</p>
    </div>
    <div class="right-contact">
        <p>Don't forget, you can also connect with us on social media for the latest updates, special offers, and a behind-the-scenes look at life at [Cafe Name]:</p>
        <p>📸 Instagram: @Cafe123
        🐦 Twitter: @Cafe123
        👍 Facebook: @Cafe123</p>
        <p>Our friendly team is available to assist you Monday through Saturday from 9am to 6pm EST. We'll do our best to respond promptly and address your concerns, questions, or feedback with the utmost care and attention.

        We look forward to connecting with you and making your Cafe experience even more delightful. Thank you for being a cherished part of our community!</p>
    </div>
  </div>`;
  // add class to contact div
  contact.classList.add("contact");
  // append contact to container
  container.appendChild(contact);
}
