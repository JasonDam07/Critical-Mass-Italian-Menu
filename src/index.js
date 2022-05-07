import "./styles.css";
import menu from "./menu";

// set menu items
const menuItems = menu.items;

// creates a menu array for each section
// also stores te element information in a variable for each section
let menuStarters = [];
let starterElem = document.getElementById("starters");

let menuPasta = [];
let pastaElem = document.getElementById("pasta");

let menuPizza = [];
let pizzaElem = document.getElementById("pizza");

// divide the menu items into seperate arrays
menuItems.forEach(data => {
  switch (data.type) {
    case "starters":
      menuStarters.push(data);
      break;
    case "pasta":
      menuPasta.push(data);
      break;
    case "pizza":
      menuPizza.push(data);
      break;
  }
})

// function created to sort each array using the "menuOrder" attribute of each menu item
function sortMenu(_itemList) {
  _itemList.sort((a, b) => {
    return (a.menuOrder - b.menuOrder)
  })
}

//run sort function for each menu array
sortMenu(menuStarters);
sortMenu(menuPasta);
sortMenu(menuPizza);

// function created to display the information on the html page
function listItems(_itemList, _element) {

  _itemList.forEach(item => {
    let itemContainer = document.createElement("div");
    let textContainer = document.createElement("div");
    let menuItem = document.createElement("li");
    let menuDesc = document.createElement("p");
    let itemPrice = document.createElement("p");

    if (item.spicy) {
      itemContainer.className = "info_container filter";
      menuDesc.className = "item_desc spicy";
    } else {
      itemContainer.className = "info_container";
      menuDesc.className = "item_desc";
    }

    textContainer.className = `text_container`;
    
    menuItem.innerText = item.name;
    menuItem.className = "item_name";

    menuDesc.innerHTML = item.description;

    itemPrice.className = "price_text";
    itemPrice.innerHTML = " $" + item.price.toFixed(2);

    textContainer.appendChild(menuItem);
    textContainer.appendChild(menuDesc);

    itemContainer.appendChild(textContainer);
    itemContainer.appendChild(itemPrice);

    _element.appendChild(itemContainer);
  })
}

// use listItems function for each menu section to display the information on the html page
listItems(menuStarters, starterElem);
listItems(menuPasta, pastaElem);
listItems(menuPizza, pizzaElem);

// uses an event listener to see if the check box for the spicy filer is checked
// if the checkbox is checked, set display style for every class "filter" to none
document.getElementById('filter_spicy').addEventListener("change", function() {
  let spicyItems = document.getElementsByClassName("filter")
  for(let i = 0; i < spicyItems.length; i++){
    if(document.getElementById('filter_spicy').checked){
      spicyItems[i].style.display = "flex";
    } else {
      spicyItems[i].style.display = "none";
    }
  }
});

console.log(menuItems, menuStarters, menuPasta, menuPizza);
