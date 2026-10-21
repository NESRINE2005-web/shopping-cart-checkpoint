// Select all plus buttons
const plusButtons = document.querySelectorAll(".fa-plus-circle");

// Increase quantity when clicking +
plusButtons.forEach(function(button) {

    button.addEventListener("click", function() {

        let quantity = button.parentElement.querySelector(".quantity");

        let number = parseInt(quantity.textContent);

        number++;

        quantity.textContent = number;

    });

});

// Select all minus buttons
const minusButtons = document.querySelectorAll(".fa-minus-circle");

// Decrease quantity when clicking -
minusButtons.forEach(function(button) {

    button.addEventListener("click", function() {

        let quantity = button.parentElement.querySelector(".quantity");

        let number = parseInt(quantity.textContent);

        if (number > 0) {
            number--;
            quantity.textContent = number;
        }

    });

});

// Select all delete buttons
const deleteButtons = document.querySelectorAll(".fa-trash-alt");

// Delete product when clicking the trash icon
deleteButtons.forEach(function(button) {

    button.addEventListener("click", function() {

        let product = button.closest(".list-products > .card-body");

        product.remove();

    });

});

// Select all heart buttons
const heartButtons = document.querySelectorAll(".fa-heart");

// Like or unlike a product
heartButtons.forEach(function(button) {

    button.addEventListener("click", function() {

        if (button.style.color === "red") {
            button.style.color = "black";
        } else {
            button.style.color = "red";
        }

    });

});

// Calculate total price
function calculateTotal() {
    let total = 0;

    const products = document.querySelectorAll(".list-products > .card-body");

    products.forEach(function(product) {
        let price = parseFloat(product.querySelector(".unit-price").textContent);
        let quantity = parseInt(product.querySelector(".quantity").textContent);

        total += price * quantity;
    });

    document.querySelector(".total").textContent = total + " $";
}