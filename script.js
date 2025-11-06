// Navbar Toggle Menu for Mobile View
const navtoggle = document.getElementById('navtoggle');
const navbar = document.getElementById('navbar');

// Add event listener for click
navtoggle.addEventListener('click', function () {
  navbar.classList.toggle('active');
});
// 🛒 Add to Cart system using localStorage

let cart = JSON.parse(localStorage.getItem("cart")) || [];

// Update cart count
function updateCartCount() {
  const cartCount = document.getElementById("cart-count");
  if (cartCount) cartCount.textContent = cart.length;
}

// Add to cart button click event
document.querySelectorAll(".add-to-cart").forEach((btn) => {
  btn.addEventListener("click", () => {
    const name = btn.getAttribute("data-name");
    const price = parseInt(btn.getAttribute("data-price"));
    const img = btn.getAttribute("data-img");

    const existing = cart.find((item) => item.name === name);

    if (existing) {
      existing.qty += 1;
    } else {
      cart.push({ name, price, img, qty: 1 });
    }

    localStorage.setItem("cart", JSON.stringify(cart));
    updateCartCount();

    alert(`${name} added to cart!`);
  });
});

updateCartCount();
