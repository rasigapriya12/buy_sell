// Search products

function searchProducts() {

    let search = document
        .getElementById("searchInput")
        .value
        .toLowerCase();

    let products = document
        .getElementsByClassName("product-card");

    for (let i = 0; i < products.length; i++) {

        let name = products[i]
            .getElementsByTagName("h3")[0]
            .innerText
            .toLowerCase();

        if (name.includes(search)) {
            products[i].style.display = "block";
        } else {
            products[i].style.display = "none";
        }
    }
}


// Category filter

function filterProducts() {

    let category = document
        .getElementById("category")
        .value;

    let products = document
        .getElementsByClassName("product-card");

    for (let i = 0; i < products.length; i++) {

        if (
            category === "all" ||
            products[i].getAttribute("data-category") === category
        ) {
            products[i].style.display = "block";
        } else {
            products[i].style.display = "none";
        }
    }
}


// Add new product

function addProduct() {

    let name = document.getElementById("productName").value;
    let price = document.getElementById("productPrice").value;
    let condition = document.getElementById("productCondition").value;
    let image = document.getElementById("productImage").value;

    if (name === "" || price === "" || condition === "") {
        alert("Please fill all required fields");
        return;
    }

    if (image === "") {
        image = "https://images.unsplash.com/photo-1494438639946-1ebd1d20bf85?auto=format&fit=crop&w=600&q=80";
    }

    let container = document.getElementById("productContainer");

    let product = document.createElement("div");

    product.className = "product-card";

    product.setAttribute("data-category", "all");

    product.innerHTML = `
        <img src="${image}">
        <h3>${name}</h3>
        <p>${condition}</p>
        <h4>₹${price}</h4>
        <button onclick="buyProduct('${name}')">
            🛒 Buy Now
        </button>
    `;

    container.appendChild(product);

    showMessage("Product added for sale successfully!");

    document.getElementById("productName").value = "";
    document.getElementById("productPrice").value = "";
    document.getElementById("productCondition").value = "";
    document.getElementById("productImage").value = "";
}


// Buy product

function buyProduct(name) {

    showMessage(name + " added to your cart!");
}


// Success message

function showMessage(text) {

    let message = document.getElementById("message");

    message.innerText = "✓ " + text;

    message.style.display = "block";

    setTimeout(function() {
        message.style.display = "none";
    }, 3000);
}


// Scroll to products

function scrollToProducts() {

    document.getElementById("products")
        .scrollIntoView({
            behavior: "smooth"
        });
}