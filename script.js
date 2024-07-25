// Add click event listeners to the links
const links = document.querySelectorAll(".link");

links.forEach((link) => {
  link.addEventListener("click", () => {
    // Get the URL of the link
    const url = link.getAttribute("href");

    // Open the URL in a new tab
    window.open(url, "_blank");
  });
});

const titleText = "Software & Web Developer |"; // First line text
const subtitleText = "Game Developer |"; // Second line text
const typingElement = document.querySelector(".typing-title");
const subtitleElement = document.querySelector(".typing-subtitle");
let index = 0;
let isSubtitle = false; // Flag to track if we are typing the subtitle

const normalDelay = 100; // Normal typing speed (100ms)
const specialDelay = 1000; // Delay after the first line (1 seconds)

function type() {
  if (!isSubtitle) {
    if (index < titleText.length) {
      typingElement.textContent += titleText.charAt(index); // Add one character at a time
      index++;
      setTimeout(type, normalDelay); // Use normal delay
    } else {
      // Move to typing the subtitle after the first line is done
      isSubtitle = true; // Set the flag to true
      index = 0; // Reset index for subtitle
      setTimeout(type, specialDelay); // Wait before starting subtitle
    }
  } else {
    if (index < subtitleText.length) {
      subtitleElement.textContent += subtitleText.charAt(index); // Add one character at a time
      index++;
      setTimeout(type, normalDelay); // Use normal delay
    }
  }
}

// Start typing effect after page loads
window.onload = type;
