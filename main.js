menu_list_array = ["Peppy Paneer","Mexican Green Wave","Deluxe Veggie","Farmers Park","Pizza Pasta"];
function getmenu(){
var htmldata;
htmldata="<ol class='menulist'>";
menu_list_array.sort();
for(var i=0;i<menu_list_array.length;i++){
    htmldata=htmldata+'<li>' + menu_list_array[i] + '</li>';
}
htmldata=htmldata+"</ol>"
document.getElementById("display_menu").innerHTML = htmldata;
}

function add_item(){
var htmldata;
var item=document.getElementById("add_item").value;
menu_list_array.sort();
htmldata="<section class='cards'>";
for(var i=0;i<menu_list_array.length;i++){
    htmldata=htmldata+'<div class="card">'+'<img src="pizza.png" style="width: 100px; height:80px;"/>'+menu_list_array[i]+'</div>';
}
htmldata=htmldata+"</section>"
document.getElementById("display_addedmenu").innerHTML = htmldata;
}

function add_top(){
    var item=document.getElementById("add_item").value;
    menu_list_array.push(item);
    add_item();
}

function order1(){
    window.open("https://pizzaonline.dominos.co.in/?src=google_sem_brand&utm_source=google&utm_medium=cpc&utm_campaign=Brand%20-%20Pan%20India%20-%20Desktop%20-%20Exact%20-%202016%20-%20[S]&utm_term=[dominos]&gclid=CjwKCAjw2vOLBhBPEiwAjEeK9ul5tlf5yAQKluqeMOKMdd7D-ub1uqw9bZQ6PENxZc1m5Z6U2XupXRoCCTUQAvD_BwE")
}

function order3(){
    window.open("https://www.pizzahut.co.in/?utm_source=google&utm_medium=cpc&utm_campaign=iP_Sapphire_Search_PR_Brand_Exact&utm_content=Brand&gclid=CjwKCAjw2vOLBhBPEiwAjEeK9m76-ec-xZ8nDWUQR12ojhi8J3YhcclQduO48ZxvpjZWUkqf1HxXCxoCHsUQAvD_BwE")
}

function order4(){
    window.open("https://oyalo.in/")
}

function order2(){
    window.open("https://www.ovenstory.in/?gclsrc=aw.ds&gclid=CjwKCAjw2vOLBhBPEiwAjEeK9sNZQWAYO02N091WQEyrV2cefGrWcgzu_Q6wLbWIXwYX1J-CU8PdfhoCZTcQAvD_BwE")
}