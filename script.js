let currentSlide = 0;
const slides = document.querySelectorAll('.carousel img');
if (slides.length > 0) {
  slides[0].classList.add('active');
  setInterval(() => {
    slides[currentSlide].classList.remove('active');
    currentSlide = (currentSlide + 1) % slides.length;
    slides[currentSlide].classList.add('active');
  }, 3000);
}

const settingsBtn = document.getElementById('settingsBtn');
const loginModal = document.getElementById('loginModal');
const loginBtn = document.getElementById('loginBtn');
const settingsPanel = document.getElementById('settingsPanel');

let adminUser = "admin";
let adminPass = "latte112233";

settingsBtn.addEventListener('click', () => {
  loginModal.style.display = 'flex';
});

loginBtn.addEventListener('click', () => {
  const user = document.getElementById('username').value;
  const pass = document.getElementById('password').value;
  if (user === adminUser && pass === adminPass) {
    loginModal.style.display = 'none';
    settingsPanel.classList.remove('hidden');
  } else {
    alert('Invalid credentials');
  }
});

document.getElementById('changeCredentialsBtn').addEventListener('click', () => {
  const newUser = prompt("Enter new username:", adminUser);
  const newPass = prompt("Enter new password:", adminPass);
  if (newUser && newPass) {
    adminUser = newUser;
    adminPass = newPass;
    alert("Credentials updated!");
  }
});

document.getElementById('saveBtn').addEventListener('click', () => {
  alert("All changes saved!");
});
