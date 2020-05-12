// ****** select items **********

const form = document.querySelector(".grocery-form");
const alert = document.querySelector(".alert");
const grocery = document.getElementById("grocery"); //input type="text" id="grocery" placeholder="e.g. eggs"
const submitBtn = document.querySelector(".submit-btn");
const container = document.querySelector(".grocery-container"); //list and clear all button
const list = document.querySelector(".grocery-list"); //list of items
const clearBtn = document.querySelector(".clear-btn");
// edit option
let editElement;
let editFlag = false;
let editID = "";
// ****** event listeners **********

// submit form
form.addEventListener("submit", addItem);
// clear list
clearBtn.addEventListener("click", clearItems);
// display items onload
window.addEventListener("DOMContentLoaded", showItems);

// ****** functions **********

// add item
function addItem(e) {
    e.preventDefault(); //no automatic submition to server
    const value = grocery.value; //name of the grocery
    const id = new Date().getTime().toString(); //generate a unuque ID (good for testing only)

    if (value && !editFlag) { //if (value !== "") --> if (value)
        const element = document.createElement("article"); //add a class
        //add ID
        let attr = document.createAttribute("data-id");
        attr.value = id; //assign a unique ID
        element.setAttributeNode(attr);
        //
        element.classList.add("grocery-item");
        //html within the <article? class
        element.innerHTML = `<p class="title">${value}</p>
            <div class="btn-container">
              <!-- edit btn -->
              <button type="button" class="edit-btn">
                <i class="fas fa-edit"></i>
              </button>
              <!-- delete btn -->
              <button type="button" class="delete-btn">
                <i class="fas fa-trash"></i>
              </button>
            </div>
          `;
        // add event listeners to both buttons;
        const deleteBtn = element.querySelector(".delete-btn");
        const editBtn = element.querySelector(".edit-btn");
        deleteBtn.addEventListener("click", deleteItem);
        editBtn.addEventListener("click", editItem);

        // append child
        list.appendChild(element);
        // display alert
        displayAlert("item added to the list", "success");
        // show container
        container.classList.add("show-container"); //was hidden by default
        // set local storage
        addToLocalStorage(id, value);
        // set back to default
        setBackToDefault();
    } else if (value && editFlag) {
        editElement.innerHTML = value;
        displayAlert("value changed", "success");

        // edit  local storage
        editLocalStorage(editID, value);
        setBackToDefault(); //reset control and texts after save
    } else {
        displayAlert("please enter value", "danger");
    }
}
// display alert
function displayAlert(text, action) {
    alert.textContent = text;
    alert.classList.add(`alert-${action}`);
    // remove alert
    setTimeout(function() {
        alert.textContent = "";
        alert.classList.remove(`alert-${action}`);
    }, 1000); //how long 1 sec
}

// clear items
function clearItems() {
    const items = document.querySelectorAll(".grocery-item");
    if (items.length > 0) {
        items.forEach(function(item) {
            list.removeChild(item);
        });
    }
    container.classList.remove("show-container");
    displayAlert("empty list", "danger");
    setBackToDefault();
    localStorage.removeItem("list");
}

// delete item

function deleteItem(e) {
    const element = e.currentTarget.parentElement.parentElement; //get actual parent - grocery item
    const id = element.dataset.id;

    list.removeChild(element);

    if (list.children.length === 0) {
        container.classList.remove("show-container"); //hide an empty container
    }
    displayAlert("item removed", "danger");

    setBackToDefault();
    // remove from local storage
    removeFromLocalStorage(id);
}
// edit item
function editItem(e) {
    const element = e.currentTarget.parentElement.parentElement; //grocery item element
    // set edit item
    editElement = e.currentTarget.parentElement.previousElementSibling; //acess the Value of the item
    // set form value
    grocery.value = editElement.innerHTML; //show initial value in the edit box
    editFlag = true;
    editID = element.dataset.id;
    //
    submitBtn.textContent = "update";
}
// set backt to defaults
function setBackToDefault() {
    grocery.value = "";
    editFlag = false;
    editID = "";
    submitBtn.textContent = "submit";
}

// ****** local storage **********

// add to local storage
function addToLocalStorage(id, value) {
    const grocery = { id, value }; //old style = { id:id, value:value };
    let items = getLocalStorage();
    items.push(grocery); //add to array
    localStorage.setItem("list", JSON.stringify(items)); //save it
}

function getLocalStorage() {
    return localStorage.getItem("list") ? //if 'list' is present in the localStorage
        JSON.parse(localStorage.getItem("list")) : [];
}

function removeFromLocalStorage(id) {
    let items = getLocalStorage();

    items = items.filter(function(item) { //only items do not match the ID
        if (item.id !== id) {
            return item;
        }
    });

    localStorage.setItem("list", JSON.stringify(items));
}

function editLocalStorage(id, value) {
    let items = getLocalStorage();

    items = items.map(function(item) { //update value by ID in the array
        if (item.id === id) {
            item.value = value;
        }
        return item;
    });
    localStorage.setItem("list", JSON.stringify(items)); //save i t
}

// SETUP LOCALSTORAGE.REMOVEITEM('LIST');
//Local storage API of the Browser:
// setItem
// getItem
// removeItem
// save as strings
// ****** setup items **********

function showItems() {
    let items = getLocalStorage();

    if (items.length > 0) {
        items.forEach(function(item) {
            createListItem(item.id, item.value);
        });
        container.classList.add("show-container");
    }
}

function createListItem(id, value) {
    const element = document.createElement("article");
    let attr = document.createAttribute("data-id");
    attr.value = id;
    element.setAttributeNode(attr);
    element.classList.add("grocery-item");
    element.innerHTML = `<p class="title">${value}</p>
            <div class="btn-container">
              <!-- edit btn -->
              <button type="button" class="edit-btn">
                <i class="fas fa-edit"></i>
              </button>
              <!-- delete btn -->
              <button type="button" class="delete-btn">
                <i class="fas fa-trash"></i>
              </button>
            </div>
          `;
    // add event listeners to both buttons;
    const deleteBtn = element.querySelector(".delete-btn");
    deleteBtn.addEventListener("click", deleteItem);
    const editBtn = element.querySelector(".edit-btn");
    editBtn.addEventListener("click", editItem);

    // append child
    list.appendChild(element);
}