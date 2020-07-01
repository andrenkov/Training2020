//vars
const cartBtn = document.querySelector(".cart-btn");
const closeCartBtn = document.querySelector(".close-cart");
const clearCartBtn = document.querySelector(".clear-cart");
const CartDOM = document.querySelector(".cart"); //cart with elements
const cartOverlay = document.querySelector(".cart-overlay"); //overly for the page when cart viewed
const cartItems = document.querySelector(".cart-items"); //list
const cartTotal = document.querySelector(".cart-total");
const cartContent = document.querySelector(".cart-content");
const cactiDOM = document.querySelector(".cacti-center");
//main cart object
let cart = [];
//getting cacti
class CactiList {
    async getCacti() { //async for Ajax request    
        try {
            let result = await fetch("cacti.json"); //old way
            let data = await result.json();
            let cacti = data.items;
            cacti = cacti.map(item => {
                const { species, price } = item.fields;
                const { id } = item.sys;
                const image = item.fields.image.fields.file.url;
                return { species, price, id, image }
            })
            return cacti;
        } finally {}
    } catch (error) {
        console.log(error);
    }
}

//ui class
class CactiPage {
    displayCacti(cacti) {
        //console.log(cacti);
        let result = "";
        cacti.forEach(cacti => {
            result += `
            <article class="cactus">
                <div class="img-container">
                    <img class="cactus-img" src=${cacti.image} alt="cactus">
                    <button class="add-to-cart-btn" data-id=${cacti.id} >
                        <i class="fas fa-shopping-cart"></i>
                        add to cart
                    </button>
                </div>
                <h3>${cacti.species} </h3>
                <h4>$${cacti.price} </h4>
            </article>            
            `;
        })
        cactiDOM.innerHTML = result;
    }
}

//local storage
class StorageLocal {}

document.addEventListener("DOMContentLoaded", () => {
    const cactiList = new CactiList();
    //console.log(cactiList);
    const cactiPage = new CactiPage();

    //get all cacti
    //cactiList.getCacti().then(cacti => console.log(cacti));
    cactiList.getCacti().then(cacti => cactiPage.displayCacti(cacti));
});