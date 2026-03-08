// js/menu.js
function loadMenu(){
  // load default menu.json first
  fetch("data/menu.json")
    .then(res => res.json())
    .then(defaultMenu => {
        // load admin-added menu from LocalStorage
        let adminMenu = JSON.parse(localStorage.getItem("foods")) || [];
        let combinedMenu = [...defaultMenu, ...adminMenu];
        window.foodItems = combinedMenu;
        displayFood(combinedMenu);
    })
    .catch(err => console.log("Error loading menu:", err));
}

function displayFood(items){
  let menu = document.getElementById("menu");
  menu.innerHTML = "";
  items.forEach(item => {
    menu.innerHTML += `
      <div class="col-md-3">
        <div class="card mb-4">
          <img src="${item.image}" class="card-img-top" style="height:200px; object-fit:cover;">
          <div class="card-body text-center">
            <h5>${item.name}</h5>
            <p class="price">₹${item.price}</p>
            <button class="btn btn-success" onclick="addToCart('${item.name}',${item.price})">Add to Cart</button>
          </div>
        </div>
      </div>`;
  });
}