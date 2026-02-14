let cart = [];
let total = 0;

function addToCart(name, price) {
    cart.push({ name: name, price: price });
    total += price;

    updateCart();
}

function updateCart() {
    const cartItems = document.getElementById("cart-items");
    const cartCount = document.getElementById("cart-count");
    const cartTotal = document.getElementById("cart-total");

    cartItems.innerHTML = "";

    cart.forEach(function(item) {
        const li = document.createElement("li");
        li.textContent = item.name + " - " + item.price + "€";
        cartItems.appendChild(li);
    });

    cartCount.textContent = cart.length;
    cartTotal.textContent = total.toFixed(2);
}

function toggleCart() {
    const cartDiv = document.getElementById("cart");
    cartDiv.classList.toggle("show");
}

function checkout() {
    if (cart.length === 0) {
        alert("Ostukorv on tühi!");
    } else {
        alert("Aitäh ostu eest!");
    }
}
