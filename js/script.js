const plusButtons = document.querySelectorAll(".fa-plus-circle");

plusButtons.forEach(function(button) {

    button.addEventListener("click", function() {

        let quantity = button.parentElement.querySelector(".quantity");

        let number = parseInt(quantity.textContent);

        number++;

        quantity.textContent = number;

    });

});

const minusButtons = document.querySelectorAll(".fa-minus-circle");

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

const deleteButtons = document.querySelectorAll(".fa-trash-alt");

deleteButtons.forEach(function(button) {

    button.addEventListener("click", function() {

        let product = button.closest(".list-products > .card-body");

        product.remove();

    });

});

const heartButtons = document.querySelectorAll(".fa-heart");

heartButtons.forEach(function(button) {

    button.addEventListener("click", function() {

        if (button.style.color === "red") {
            button.style.color = "black";
        } else {
            button.style.color = "red";
        }

    });

});

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
