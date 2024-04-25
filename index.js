const shoppingCartIcon = document.getElementById("icon-shopping-cart");
const shoppingCartContainer = document.getElementById(
    "icon-shopping-cart-container"
);
const shoppingCart = document.getElementById("shopping-cart");
const products = document.getElementById("products-section");
const iconExit = document.getElementById("icon-exit");
const selectedProducts = document.getElementsByClassName("product-container");
const buyButton = document.getElementById("buy-button");

shoppingCartIcon.addEventListener("click", function () {
    shoppingCart.style.display = "flex";
    products.style.display = "none";
    shoppingCartContainer.style.display = "none";
    iconExit.style.display = "block";
    fillCart();
});

iconExit.addEventListener("click", function () {
    shoppingCart.style.display = "none";
    products.style.display = "flex";
    iconExit.style.display = "none";
    shoppingCartContainer.style.display = "flex";
    getProductsNumber();
});