// Add user name dynamically (feels more real)
const userName = "Premium • Dhatchayani";
document.getElementById("userName").innerText = userName;

// Button click interaction
const startBtn = document.getElementById("startBtn");

startBtn.addEventListener("click", function () {
  startBtn.innerText = "Enjoy Your Music 🎵";
  startBtn.style.backgroundColor = "#191414";
  startBtn.style.color = "#ffffff";
});

// Navbar active link effect
const navLinks = document.querySelectorAll(".nav-link");

navLinks.forEach(function (link) {
  link.addEventListener("click", function () {
    navLinks.forEach(function (item) {
      item.style.color = "#ffffff";
    });
    link.style.color = "#1db954";

    // Optional alert for Download button
    if(link.innerText === "Download") {
      alert("Download feature coming soon!");
    }
  });
});