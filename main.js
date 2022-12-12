// Listen for click events on the navigation links
const navLinks = document.querySelectorAll("nav a");
navLinks.forEach(link => {
  link.addEventListener("click", function(event) {
    event.preventDefault();

    // Hide the current section
    const currentSection = document.querySelector("main > section:not(.hidden)");
    currentSection.classList.add("hidden");

    // Show the corresponding section
    const targetSection = document.querySelector(this.hash);
    targetSection.classList.remove("hidden");
  });
});
