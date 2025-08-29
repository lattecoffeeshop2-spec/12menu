let settingsBtn = document.getElementById("settingsBtn");
let settingsPanel = document.getElementById("settingsPanel");
let loginDiv = settingsPanel.querySelector(".login");
let settingsContent = settingsPanel.querySelector(".settingsContent");
let loginBtn = document.getElementById("loginBtn");
let saveBtn = document.getElementById("saveBtn");
let closeBtn = document.getElementById("closeBtn");
let changeCredsBtn = document.getElementById("changeCreds");

let adminUser = localStorage.getItem("adminUser") || "admin";
let adminPass = localStorage.getItem("adminPass") || "latte112233";

settingsBtn.onclick = () => {
  settingsPanel.classList.remove("hidden");
  loginDiv.classList.remove("hidden");
  settingsContent.classList.add("hidden");
};

loginBtn.onclick = () => {
  let u = document.getElementById("username").value;
  let p = document.getElementById("password").value;
  if (u === adminUser && p === adminPass) {
    loginDiv.classList.add("hidden");
    settingsContent.classList.remove("hidden");
  } else {
    alert("Wrong username or password");
  }
};

changeCredsBtn.onclick = () => {
  let newUser = prompt("Enter new username:");
  let newPass = prompt("Enter new password:");
  if(newUser && newPass){
    localStorage.setItem("adminUser", newUser);
    localStorage.setItem("adminPass", newPass);
    adminUser = newUser; adminPass = newPass;
    alert("Credentials updated!");
  }
};

saveBtn.onclick = () => {
  let aboutText = document.getElementById("aboutText").value;
  if(aboutText) localStorage.setItem("aboutText", aboutText);
  alert("Saved all changes!");
};

closeBtn.onclick = () => {
  settingsPanel.classList.add("hidden");
};

// About carousel
let carouselImages = document.querySelectorAll(".about-carousel img");
let current = 0;
setInterval(() => {
  carouselImages[current].classList.remove("active");
  current = (current + 1) % carouselImages.length;
  carouselImages[current].classList.add("active");
}, 3000);
