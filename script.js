let cart = JSON.parse(localStorage.getItem("cart")) || [];

/* ADD TO CART */
function addToCart(name, price) {
    cart.push({ name, price });

    localStorage.setItem("cart", JSON.stringify(cart));

    updateCart();
}

/* REMOVE ITEM */
function removeItem(index) {
    cart.splice(index, 1);

    localStorage.setItem("cart", JSON.stringify(cart));

    updateCart();
}

/* UPDATE CART UI */
function updateCart() {
    const cartItems = document.getElementById("cartItems");
    const totalEl = document.getElementById("total");
    const countEl = document.getElementById("cartCount");

    if (!cartItems) return;

    cartItems.innerHTML = "";

    let total = 0;

    cart.forEach((item, index) => {
        total += item.price;

        cartItems.innerHTML += `
            <div class="cart-item">
                <div>
                    <h4>${item.name}</h4>
                    <p>R${item.price}</p>
                </div>
                <button onclick="removeItem(${index})">✖</button>
            </div>
        `;
    });

    if (totalEl) totalEl.innerText = total;
    if (countEl) countEl.innerText = cart.length;
}

/* LOAD ON START */
updateCart();