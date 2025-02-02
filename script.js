function toggleMenu() {
  const menu = document.querySelector(".menu-links");
  const icon = document.querySelector(".hamburger-icon");
  menu.classList.toggle("open");
  icon.classList.toggle("open");
}

const logoElement = document.getElementById("logo-text");
const nameText = logoElement.innerText; // Get existing text from HTML
let i = 0;

function typeEffect() {
  if (i < nameText.length) {
    logoElement.innerHTML += nameText.charAt(i);
    i++;
    setTimeout(typeEffect, 100);
  }
}

window.onload = function () {
  if (logoElement) {
    logoElement.innerHTML = ""; // Clear the existing text before animation
    typeEffect();
  }
};


window.addEventListener("scroll", function() {
  const picContainer = document.querySelector(".section__pic-container");
  const rect = picContainer.getBoundingClientRect();
  
  if (rect.top >= 0 && rect.bottom <= window.innerHeight) {
    picContainer.classList.add("visible");  // Add visible class when in view
  } else {
    picContainer.classList.remove("visible");  // Optionally remove visible class when out of view
  }
});