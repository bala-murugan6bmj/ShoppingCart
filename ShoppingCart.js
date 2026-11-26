    let products = [
        {
            id: 1,
            name: "Headphones",
            price: 1499,
            image: "headphones.jpg"
        },
        {
            id: 2,
            name: "Smart Watch",
            price: 2499,
            image: "SmartWatch.jpg"
        },
        {
            id: 3,
            name: "Camera",
            price: 4999,
            image: "Camera.jpg"
        },
        {
            id: 4,
            name: "Shoes",
            price: 1999,
            image: "Shoe.jpg"
        }
    ];
    let cart = [];
    function displayProducts() {
        let productContainer = document.getElementById("productContainer");
        productContainer.innerHTML = products.map(product => `
            <div class="card">
                <img src="${product.image}" alt="${product.name}">
                <h3>${product.name}</h3>
                <p class="price">₹${product.price}</p>
                <button class="add-btn" data-id="${product.id}">
                    Add to Cart
                </button>
            </div>
        `).join("");
    }
    function addToCart(id) {
        let existingItem = cart.find(item => item.id === id);

        if (existingItem) {
            existingItem.quantity++;
        } else {
            let product = products.find(item => item.id === id);

            cart.push({
                ...product,
                quantity: 1
            });
        }
        displayCart();
    }
    function displayCart() {
        let cartContainer = document.getElementById("cartContainer");

        if (cart.length === 0) {
            cartContainer.innerHTML = `
                <p class="empty">Your cart is empty!</p>
            `;
        } else {
            cartContainer.innerHTML = cart.map(item => `
                <div class="cart-item">
                    <h3>${item.name}</h3>
                    <p>₹${item.price}</p>
                    <div class="quantity">
                        <button data-action="decrease" data-id="${item.id}">-</button>
                        <span>${item.quantity}</span>
                        <button data-action="increase" data-id="${item.id}">+</button>
                    </div>
                    <p>Subtotal: ₹${item.price * item.quantity}</p>
                    <button class="remove-btn" data-action="remove" data-id="${item.id}">
                        Remove
                    </button>
                </div>
            `).join("");
        }
        let count = cart.reduce((sum, item) => sum + item.quantity, 0);
        document.getElementById("cartCount").innerText = count;
        let total = cart.reduce((sum, item) => sum + item.price * item.quantity, 0);
        document.getElementById("totalPrice").innerText = total.toLocaleString("en-IN");
    }
    function increaseQuantity(id) {
        let item = cart.find(item => item.id === id);

        if (item) {
            item.quantity++;
        }

        displayCart();
    }
    function decreaseQuantity(id) {
        let item = cart.find(item => item.id === id);
        if (item) {
            item.quantity--;
            if (item.quantity <= 0) {
                removeItem(id);
                return;
            }
        }
        displayCart();
    }
    function removeItem(id) {
        cart = cart.filter(item => item.id !== id);

        displayCart();
    }
    document.getElementById("productContainer").addEventListener("click", function(event) {
        let button = event.target.closest("[data-id]");
        if (button) {
            let id = Number(button.dataset.id);
            addToCart(id);
        }
    });
    document.getElementById("cartContainer").addEventListener("click", function(event) {
        let button = event.target.closest("[data-action]");
        if (!button) return;
        let id = Number(button.dataset.id);
        let action = button.dataset.action;
        if (action === "increase") {
            increaseQuantity(id);
        }
        else if (action === "decrease") {
            decreaseQuantity(id);
        }
        else if (action === "remove") {
            removeItem(id);
        }
    });
    displayProducts();
    displayCart();