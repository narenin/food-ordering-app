function searchFood(){

let search=document
.getElementById("search")
.value
.toLowerCase();

let filtered=foodItems.filter(item=>

item.name.toLowerCase().includes(search)

);

displayFood(filtered);

}