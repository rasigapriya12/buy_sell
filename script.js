// Buy product

function buy(product) {
    alert("You selected: " + product);
}


// Start Exploring

function explore() {
    document.getElementById("products").scrollIntoView();
}


// Search product

function searchProduct() {

    let search = document.getElementById("search").value.toLowerCase();

    let cards = document.querySelectorAll(".card");

    cards.forEach(function(card) {

        let name = card.querySelector("h3").innerText.toLowerCase();

        if (name.includes(search)) {
            card.style.display = "block";
        } else {
            card.style.display = "none";
        }

    });
}


// Category filter

function filterProducts() {

    let category = document.getElementById("category").value;

    let cards = document.querySelectorAll(".card");

    cards.forEach(function(card) {

        if (category == "all" ||
            card.dataset.category == category) {

            card.style.display = "block";

        } else {

            card.style.display = "none";

        }

    });
}


// Add new product

document.getElementById("sellForm").addEventListener("submit", function(event) {

    event.preventDefault();

    let name = document.getElementById("name").value;
    let price = document.getElementById("price").value;
    let condition = document.getElementById("condition").value;
    let image = document.getElementById("image").value;

    if (image == "") {
        image = "https://images.unsplash.com/photo-1556742049-0cfed4f6a45d?auto=format&fit=crop&w=600&q=80";
    }

    let card = document.createElement("div");

    card.className = "card";

    card.innerHTML = `
        <img src="${image}">
        <h3>${name}</h3>
        <p>${condition}</p>
        <b>₹${price}</b>
        <button onclick="buy('${name}')">🛒 Buy Now</button>
    `;

    document.getElementById("productList").appendChild(card);

    alert("Product added for sale successfully!");

    document.getElementById("sellForm").reset();

});
