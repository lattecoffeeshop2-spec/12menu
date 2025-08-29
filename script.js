let menuItems = JSON.parse(localStorage.getItem('menuItems')) || [];
if(menuItems.length === 0){
  for(let i=1;i<=34;i++){
    menuItems.push({name:`Item ${i}`, price: Math.floor(Math.random()*5)+2, img:"https://via.placeholder.com/150"});
  }
}
function renderMenu(){
  const menuDiv=document.getElementById('menu-items');
  menuDiv.innerHTML='';
  menuItems.forEach((item,i)=>{
    let div=document.createElement('div');
    div.className='menu-item';
    div.innerHTML=`<img src="${item.img}" alt="${item.name}" style="width:100%;border-radius:8px;">
                   <h4>${item.name}</h4><p>$${item.price}</p>`;
    menuDiv.appendChild(div);
  });
}
renderMenu();

document.getElementById('settings-btn').addEventListener('click',()=>{
  document.getElementById('login-screen').classList.remove('hidden');
});

document.getElementById('login-submit').addEventListener('click',()=>{
  const user=document.getElementById('login-username').value;
  const pass=document.getElementById('login-password').value;
  if(user==='admin' && pass==='latte112233'){
    document.getElementById('login-screen').classList.add('hidden');
    document.getElementById('admin-panel').classList.remove('hidden');
    loadAdminPanel();
  }else{
    document.getElementById('login-error').innerText='Invalid login';
  }
});

function loadAdminPanel(){
  document.getElementById('edit-about').value=document.getElementById('about-text').innerText;
  const editMenu=document.getElementById('edit-menu');
  editMenu.innerHTML='';
  menuItems.forEach((item,i)=>{
    let div=document.createElement('div');
    div.innerHTML=`<input type="text" value="${item.name}" id="name-${i}"/>
                   <input type="number" value="${item.price}" id="price-${i}"/>
                   <input type="text" value="${item.img}" id="img-${i}" style="width:60%"/>`;
    editMenu.appendChild(div);
  });
}

document.getElementById('save-changes').addEventListener('click',()=>{
  document.getElementById('about-text').innerText=document.getElementById('edit-about').value;
  menuItems=menuItems.map((item,i)=>{
    return {
      name:document.getElementById('name-'+i).value,
      price:document.getElementById('price-'+i).value,
      img:document.getElementById('img-'+i).value
    };
  });
  localStorage.setItem('menuItems',JSON.stringify(menuItems));
  renderMenu();
  document.getElementById('admin-panel').classList.add('hidden');
});

document.getElementById('cancel-changes').addEventListener('click',()=>{
  document.getElementById('admin-panel').classList.add('hidden');
});
