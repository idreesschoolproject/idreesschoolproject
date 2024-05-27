const cartButton = document.getElementById('cart-button');

const shopButtons = document.querySelectorAll('.shop-button');

function updateCartCount() {
    let currentCount = parseInt(cartButton.textContent.slice(6, -1), 10);

    currentCount++;

    cartButton.textContent = `Cart (${currentCount})`;
}

shopButtons.forEach(button => {
    button.addEventListener('click', updateCartCount);
});