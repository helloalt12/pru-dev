alert("Try fullscreen, it’s way more comfy :)")

const htmlEl = document.documentElement;
const themeBtn = document.getElementById("themeBtn");
const icon = themeBtn.querySelector("i");
const bgImage = document.getElementById("bgImage");
const profileImage = document.getElementById("profileImage");
const leftColumn = document.getElementById("leftColumn");
const videoFrame = document.getElementById("videoFrame");

function applyTheme(theme) {
  htmlEl.setAttribute("data-bs-theme", theme);
  icon.className = theme === "dark" ? "bi bi-sun-fill" : "bi bi-moon-fill";
  bgImage.src = theme === "dark" ? "images/dark.png" : "pictures/light.png";
  profileImage.src = theme === "dark" ? "images/profile-dark.png" : "images/profile-light.png";
}

const systemTheme = window.matchMedia("(prefers-color-scheme: dark)").matches ? "dark" : "light";
applyTheme(systemTheme);

themeBtn.addEventListener("click", () => {
  const current = htmlEl.getAttribute("data-bs-theme");
  applyTheme(current === "light" ? "dark" : "light");
});

function matchHeights() {
  videoFrame.style.maxHeight = leftColumn.offsetHeight + "px";
}

window.addEventListener("load", matchHeights);
window.addEventListener("resize", matchHeights);


document.addEventListener('contextmenu', event => event.preventDefault());
