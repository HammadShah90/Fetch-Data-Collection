// =========Get Variable Data in HTML============>>>>>>

let cardImage = document.querySelector('#cardImage');
// console.log(cardImage);

let cardTitle = document.querySelector('.card-title')
// console.log(cardTitle);

let cardDescription = document.querySelector('.card-text')
// console.log(cardDescription);

let cardPrice = document.querySelector('.cardPrice')
// console.log(cardPrice);

let cartButtons = document.querySelector(".cartButtons");
// console.log(cardButtons);


let cartButtonContent = [];


const cartBtns = ["All", "Men's Clothing", "Women's clothing", "Jewelery", "Electronics",]
// console.log(cardBtns);

cartBtns.forEach((btns) => {
    let categoryBtns = `<button class="cartBtn text-warning" onmouseover="colorChange()">${btns}</button>`;
    // console.log(categoryBtns);
    
    cartButtonContent.push(categoryBtns);
    // console.log(cartButtonContent);
});

cartButtons.innerHTML = cartButtonContent.join("");
// console.log(menuButtons);


let cartBtn = document.querySelector(".cartBtn");
console.log(cartBtn);

const cartItems = document.querySelector(".itemsSection");
// console.log(menuItems); 

let cartItemListContent = [];

let cartDataArray;

const cardCollections = (cartData) => {

    // console.log(cartData);

    cartData.forEach((data) => {

        // console.log(data);

        let cartList = `<div class="cartBox p-3">
                            <div class="cartImg">
                                <img src="${data.image}" alt="" style="width: 150px; height: 150px; padding: 5px;">
                            </div>
                            <div class="cartText">
                                <div class="upperText">
                                    <h4>${data.title}</h4>
                                    <h6>US $${data.price}</h6>
                                </div>
                                <div class="lowerText">
                                    <p>${data.description}</p>
                                </div>
                            </div>
                        </div>`;
        // console.log(cartList);

        cartItemListContent.push(cartList);
        // console.log(cartItemListContent);
    })

    cartDataArray = cartItemListContent.join("");

    cartItems.innerHTML = cartDataArray;
    // console.log(cartItems);

    changeCategory(cartData)
}


function colorChange() {
    // console.log(cartBtn);
    // cartBtn.classList.toggle("text-warning")
}

// console.log(cartDataArray);

// ---------------Menu Categery List---------------------------------------------------------------------------------------

const changeCategory = (find) => {
    console.log(find);


    if (find == "All") {

        cartButtons.innerHTML = cartButtonContent.join("");
        // console.log(menuButtons);

    } else {

        const findCategory = find.filter((cart) => cart.category.toLowerCase() === find.toLowerCase()).map((cart) => {
            return `<div class="cartBox">
                        <div class="cartImg">
                            <img src="${cart.image}" alt="">
                        </div>
                        <div class="cartText">
                            <div class="upperText">
                                <h4>${cart.title}</h4>
                                <h5>US $${cart.price}</h5>
                            </div>
                            <div class="lowerText">
                                <p>${cart.description}</p>
                            </div>
                        </div>
                    </div>`;
        })
        // console.log(findCategory)
        cartItems.innerHTML = findCategory.join("");

    }
}


// ---------------Fetch Categery Data---------------------------------------------------------------------------------------


const getCategoryData = () => {
    fetch(`https://fakestoreapi.com/products/`)
        .then(function (response) {
            // console.log(response, "==>> response of fetchData")
            return response.json()
        }).then(function (data) {
            // console.log(data, "==>> Data as jsonFile")
            cardCollections(data)
        })
}

getCategoryData();