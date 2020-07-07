//vars
const cartBtn = document.querySelector(".cart-btn");
const closeCartBtn = document.querySelector(".close-cart");
const clearCartBtn = document.querySelector(".clear-cart");
const CartDOM = document.querySelector(".cart"); //cart with elements
const cartOverlay = document.querySelector(".cart-overlay"); //overly for the page when cart viewed
const cartItems = document.querySelector(".cart-items"); //number of items in the cart
const cartTotal = document.querySelector(".cart-total"); //sum of the cart items
const cartContent = document.querySelector(".cart-content");
const cactiDOM = document.querySelector(".cacti-center");

//main cart object
let cart = [];

//bullons
let buttonsDOM = [];

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

    getCartButtons() {
        const buttons = [...document.querySelectorAll(".add-to-cart-btn")]; //[...] spread operator - turns the result into an array, not nodes list
        buttonsDOM = buttons;
        //console.log(buttons);

        buttons.forEach(button => {
            let id = button.dataset.id;
            //console.log(id);
            let inCart = cart.find(item => item.id === id);
            if (inCart) {
                button.innerText = "In Cart";
                button.disabled = true;
            }
            button.addEventListener("click", event => {
                event.target.innerText = "In Cart";
                event.target.disabled = true;
                //console.log(event.target);

                //get cactus from the cacti
                let cartCactus = {...StorageLocal.getCactus(id), qty: 1 };
                //{...} to return an array of properties and new field "amount". 
                //The spread operator is a useful and quick syntax for adding items to arrays, combining arrays or objects, and spreading an array out into a function’s arguments
                //When ...arr is used in the function call, it ‘expands’ an iterable object arr into the list of arguments
                //console.log(cartCactus);

                //add cactus to cart
                cart = [...cart, cartCactus];

                //save cart i nlocal storage
                StorageLocal.saveCart(cart);

                //set cart value
                this.setCartValues(cart);

                //display cart item
                this.addItemToCart(cartCactus);

                //show the cart
                this.showCartContent();

            })

        })
    }

    setCartValues(cart) {
        let amountTotal = 0;
        let qtyTotal = 0;

        cart.map(item => {
            amountTotal += item.price * item.qty;
            qtyTotal += item.qty;
        });
        //console.log(tempTotal, qtyTotal);
        cartTotal.innerText = parseFloat(amountTotal.toFixed(2)); //2 dec points
        cartItems.innerText = qtyTotal;
    }

    addItemToCart(item) {
        const div = document.createElement("div");
        div.classList.add("cart-item");
        div.innerHTML = `<img src=${item.image}>
                        <div>
                            <h4>${item.species}</h4>
                            <h5>$${item.price}</h5>
                            <span class="remove_item" data-id=${item.id}>remove</span>
                        </div>
                        <div>
                            <i class="fas fa-chevron-up" data-id=${item.id}> </i>
                            <p class="item-qty" data-id=${item.id}>${item.qty}</p>
                            <i class="fas fa-chevron-down" data-id=${item.id}> </i>
                        </div>`;
        cartContent.appendChild(div); //add to content container
        //console.log(cartContent);
    }

    showCartContent() {
        cartOverlay.classList.add("transparentBackground");
        CartDOM.classList.add("showCartContent");
    }

    setupAPP() {
        cart = StorageLocal.getCartFromSL(); //load previously saved items if present
        this.setCartValues(cart); //show saved items
        this.populateCartContent(cart);

        cartBtn.addEventListener("click", this.showCartContent);
        closeCartBtn.addEventListener("click", this.HideCartContent);
    }

    populateCartContent(cart) {
        cart.forEach(item => this.addItemToCart(item));
    }

    HideCartContent() {
        cartOverlay.classList.remove("transparentBackground");
        CartDOM.classList.remove("showCartContent");
    }

}

//local storage
class StorageLocal {
    static saveCacti(cacti) {
        localStorage.setItem("cacti", JSON.stringify(cacti));
    }

    static getCactus(id) {
        let cacti = JSON.parse(localStorage.getItem("cacti"));
        return cacti.find(cactus => cactus.id === id);
    }

    static saveCart(cart) {
        localStorage.setItem("cart", JSON.stringify(cart));
    }

    static getCartFromSL() {
        return localStorage.getItem("cart") ? JSON.parse(localStorage.getItem("cart")) : [];
    }
}

document.addEventListener("DOMContentLoaded", () => {
    const cactiList = new CactiList();
    //console.log(cactiList);
    const cactiPage = new CactiPage();

    //setup app
    cactiPage.setupAPP();

    //get all cacti
    //cactiList.getCacti().then(cacti => console.log(cacti));
    cactiList.getCacti().then(cacti => {
        cactiPage.displayCacti(cacti);
        StorageLocal.saveCacti(cacti); //save all cacti in the local storage fro a quick access
    }).then(() => {
        cactiPage.getCartButtons();
    });
});