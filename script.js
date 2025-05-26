let cart = [];
const cartItemsEl = document.getElementById('cart-items');
const cartCountEl = document.getElementById('cart-count');
const totalEl = document.getElementById('total');
const cartEl = document.getElementById('cart');
const cartToggle = document.getElementById('cart-toggle');

function addToCart(item, price) {
  cart.push({ item, price });
  updateCart();
}

function updateCart() {
  cartItemsEl.innerHTML = '';
  let total = 0;
  cart.forEach(({ item, price }) => {
    const li = document.createElement('li');
    li.textContent = `${item} - $${price}`;
    cartItemsEl.appendChild(li);
    total += price;
  });
  totalEl.textContent = total;
  cartCountEl.textContent = cart.length;
}

cartToggle.addEventListener('click', () => {
  cartEl.classList.toggle('hidden');
});
