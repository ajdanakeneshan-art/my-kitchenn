const recipes = [
{
id:1,
name:"Круассан",
calories:406,
image:"images/croissant.jpg",
recipe:"Ұн 250г, сары май 150г, сүт 120мл, қант 40г. 180°С 20 минут."
},
{
id:2,
name:"Паста",
calories:350,
image:"images/pasta.jpg",
recipe:"Паста 200г, тұз 5г, зәйтүн майы 15мл. 8-10 минут қайнату."
},
{
id:3,
name:"Салат",
calories:180,
image:"images/salad.jpg",
recipe:"Қияр 100г, қызанақ 150г, зәйтүн майы 10мл."
},
{
id:4,
name:"Торт",
calories:450,
image:"images/cake.jpg",
recipe:"Ұн 300г, жұмыртқа 3 дана, қант 200г. 170°С 40 минут."
},
{
id:5,
name:"Гирос",
calories:520,
image:"images/gyros.jpg",
recipe:"Тауық 200г, лаваш 1 дана, соус 50г."
},
{
id:6,
name:"Сорпа",
calories:220,
image:"images/soup.jpg",
recipe:"Картоп 200г, сәбіз 100г, тауық сорпасы 1л."
}
];

function displayRecipes(list){
const container=document.getElementById("recipes");
if(!container) return;
container.innerHTML="";
list.forEach(r=>{
container.innerHTML+=`
<div class="recipe-card">
<img src="${r.image}">
<h3>${r.name}</h3>
<p><strong>${r.calories} ккал</strong></p>
<p>${r.recipe}</p>
<button onclick="addToMenu(${r.id})">Мәзірге қосу</button>
</div>`;
});
}

if(document.getElementById("recipes")){
displayRecipes(recipes);
document.getElementById("searchInput").addEventListener("input",function(){
let value=this.value.toLowerCase();
let filtered=recipes.filter(r=>r.name.toLowerCase().includes(value));
displayRecipes(filtered);
});
}

function addToMenu(id){
let menu=JSON.parse(localStorage.getItem("menu"))||[];
menu.push(id);
localStorage.setItem("menu",JSON.stringify(menu));
alert("Қосылды!");
}

if(document.getElementById("menuList")){
let menu=JSON.parse(localStorage.getItem("menu"))||[];
let total=0;
menu.forEach((id,index)=>{
let r=recipes.find(x=>x.id==id);
total+=r.calories;
document.getElementById("menuList").innerHTML+=`
<div class="recipe-card">
<img src="${r.image}">
<h3>${r.name}</h3>
<p>${r.calories} ккал</p>
<button onclick="removeItem(${index})">Өшіру</button>
</div>`;
});
document.getElementById("totalCalories").innerText=total;
}

function removeItem(index){
let menu=JSON.parse(localStorage.getItem("menu"))||[];
menu.splice(index,1);
localStorage.setItem("menu",JSON.stringify(menu));
location.reload();
}

function clearMenu(){
localStorage.removeItem("menu");
location.reload();
}