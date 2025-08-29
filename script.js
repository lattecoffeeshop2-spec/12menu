const settingsBtn = document.getElementById('settings-btn');
const settingsPanel = document.getElementById('settings-panel');
const saveBtn = document.getElementById('save-settings');
const closeBtn = document.getElementById('close-settings');
const aboutText = document.getElementById('about-text');
const editAbout = document.getElementById('edit-about');
const menuItemsDiv = document.getElementById('menu-items');
const editMenuDiv = document.getElementById('edit-menu-items');

let menu = JSON.parse(localStorage.getItem('menuData')) || [
  {category:'Hot', name:'Espresso', price:2},
  {category:'Iced', name:'Iced Latte', price:3},
  {category:'Smoothie', name:'Mango Smoothie', price:4},
  {category:'Milkshake', name:'Vanilla Milkshake', price:4},
  {category:'Boba', name:'Brown Sugar Boba', price:5},
  {category:'Frappe', name:'Mocha Frappe', price:4.5},
  {category:'Shisha', name:'Double Apple Shisha', price:6}
];

function renderMenu() {
  menuItemsDiv.innerHTML = '';
  menu.forEach((item, index) => {
    let div = document.createElement('div');
    div.textContent = `${item.category}: ${item.name} - $${item.price}`;
    menuItemsDiv.appendChild(div);
  });
}

function renderEditMenu() {
  editMenuDiv.innerHTML = '';
  menu.forEach((item, index) => {
    let wrapper = document.createElement('div');
    wrapper.innerHTML = `
      <input value="${item.category}" placeholder="Category">
      <input value="${item.name}" placeholder="Name">
      <input type="number" value="${item.price}" step="0.1">
    `;
    editMenuDiv.appendChild(wrapper);
  });
}

settingsBtn.addEventListener('click', () => {
  editAbout.value = aboutText.textContent.trim();
  renderEditMenu();
  settingsPanel.classList.remove('hidden');
});

closeBtn.addEventListener('click', () => {
  settingsPanel.classList.add('hidden');
});

saveBtn.addEventListener('click', () => {
  aboutText.textContent = editAbout.value;
  let updated = [];
  [...editMenuDiv.children].forEach(child => {
    let [cat, name, price] = child.querySelectorAll('input');
    updated.push({category:cat.value, name:name.value, price:parseFloat(price.value)});
  });
  menu = updated;
  localStorage.setItem('menuData', JSON.stringify(menu));
  renderMenu();
  settingsPanel.classList.add('hidden');
});

renderMenu();
