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

  // iterate through each item in the item list
  _itemList.forEach(item => {
    // setup all of the different elements that are needed
    // itemContainer - the container for the whole item, this will be used to remove items where needed
    // textContainer - the container for the item text such as the item name and description
    // menuItem - the list object for the menu item's name
    // menuDesc - item description
    // itemPrice - for the price of the item that will be set to the right of the flex box
    let itemContainer = document.createElement("div");
    let textContainer = document.createElement("div");
    let menuItem = document.createElement("li");
    let menuDesc = document.createElement("p");
    let itemPrice = document.createElement("p");

    // checks if an item is spicy, if so set the class names appropriately
    if (item.spicy) {
      // filter will be used to filter spicy options and remove them later
      itemContainer.className = "info_container filter";
      // adds the spicy icon
      menuDesc.className = "item_desc spicy";
    } else {
      itemContainer.className = "info_container";
      menuDesc.className = "item_desc";
    }

    textContainer.className = `text_container`;
    
    // sets the item name and element classname
    menuItem.innerText = item.name;
    menuItem.className = "item_name";

    // sets the item description and element classname
    menuDesc.innerHTML = item.description;

    // sets the price elements class and text
    itemPrice.className = "price_text";
    itemPrice.innerHTML = " $" + item.price.toFixed(2);

    //appened each element to a parent appropriately
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
  // find all elements with the class "filter" to filter
  let spicyItems = document.getElementsByClassName("filter")

  // iterates through all elements with class "filter"
  for(let i = 0; i < spicyItems.length; i++){
    // if the input check box is checked, set the display of the element to "flex"
    // else if the check box is unchecked, remove the element by setting the display to "none"
    if(document.getElementById('filter_spicy').checked){
      spicyItems[i].style.display = "flex";
    } else {
      spicyItems[i].style.display = "none";
    }
  }
});

// commented out the console log of the information as it is not needed in the final product
// console.log(menuItems, menuStarters, menuPasta, menuPizza);
