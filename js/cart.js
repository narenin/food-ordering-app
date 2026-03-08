let cart=JSON.parse(localStorage.getItem("cart"))||[];

function addToCart(name,price){

let item=cart.find(i=>i.name===name);

if(item){

item.qty++;

}

else{

cart.push({name,price,qty:1});

}

localStorage.setItem("cart",JSON.stringify(cart));

updateCartCount();

alert("Item added to cart");

}

function updateCartCount(){

let total=0;

cart.forEach(i=>total+=i.qty);

let count=document.getElementById("cart-count");

if(count) count.innerText=total;

}

function displayCart(){

let table=document.getElementById("cart-items");

let total=0;

cart.forEach(item=>{

table.innerHTML+=`

<tr>

<td>${item.name}</td>

<td>${item.qty}</td>

<td>${item.price*item.qty}</td>

</tr>

`;

total+=item.price*item.qty;

});

document.getElementById("total").innerText=total;

}

function checkout(){

localStorage.removeItem("cart");

window.location="order-success.html";

}