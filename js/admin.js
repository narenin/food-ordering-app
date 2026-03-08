// js/admin.js
let foods = JSON.parse(localStorage.getItem("foods")) || [];

function adminLogin(e){
  e.preventDefault();
  let email = document.getElementById("adminEmail").value;
  let password = document.getElementById("adminPassword").value;
  if(email==="admin@gmail.com" && password==="1234"){
    document.getElementById("login-section").style.display="none";
    document.getElementById("dashboard").style.display="block";
    loadFoods();
  } else { alert("Invalid credentials"); }
}

function addFood(e){
  e.preventDefault();
  let name=document.getElementById("foodName").value;
  let price=document.getElementById("foodPrice").value;
  let image=document.getElementById("foodImage").value;
  foods.push({name,price,image});
  localStorage.setItem("foods",JSON.stringify(foods));
  loadFoods();
  alert("Food item added!");
  e.target.reset();
}

function loadFoods(){
  let list = document.getElementById("foodList");
  list.innerHTML = "";
  foods.forEach((food,index)=>{
    list.innerHTML += `
      <li class="list-group-item d-flex justify-content-between align-items-center">
        ${food.name} - ₹${food.price}
        <div>
          <button class="btn btn-sm btn-danger" onclick="removeFood(${index})">Remove</button>
        </div>
      </li>`;
  });
}

function removeFood(index){
  if(confirm("Are you sure you want to remove this item?")){
    foods.splice(index,1);
    localStorage.setItem("foods",JSON.stringify(foods));
    loadFoods();
  }
}