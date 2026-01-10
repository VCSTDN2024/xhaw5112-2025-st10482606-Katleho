// Add course to cart
function addCourse(name, price) {
  let cart = JSON.parse(localStorage.getItem("cart")) || [];
  cart.push({ name, price });
  localStorage.setItem("cart", JSON.stringify(cart));
  alert(name + " has been added to your courses.");
}

// Render checkout
window.onload = function () {
  if (document.getElementById("checkout-list")) {
    renderCheckout();
  }
  if (document.getElementById("pay-total")) {
    renderPayment();
  }
};

// Show checkout list
function renderCheckout() {
  let cart = JSON.parse(localStorage.getItem("cart")) || [];
  let checkoutDiv = document.getElementById("checkout-list");
  checkoutDiv.innerHTML = "";

  let subtotal = 0;
  cart.forEach((item) => {
    subtotal += item.price;
    checkoutDiv.innerHTML += `<p>${item.name} - R${item.price}</p>`;
  });

  let discount = subtotal >= 3000 ? subtotal * 0.1 : 0; // 10% discount if total >= R3000
  let total = subtotal - discount;

  document.getElementById("subtotal").innerText = subtotal;
  document.getElementById("discount").innerText = discount.toFixed(2);
  document.getElementById("total").innerText = total.toFixed(2);

  localStorage.setItem("totalAmount", total);
}

// Show payment total
function renderPayment() {
  let total = localStorage.getItem("totalAmount") || 0;
  document.getElementById("pay-total").innerText = total;
}

// Process payment
function processPayment() {
  alert("Payment processed successfully!");
  localStorage.removeItem("cart");
  window.location.href = "response.html";
  return false;
}

// Logout function
function logout() {
  localStorage.removeItem("loggedInUser");
  alert("You have been signed out.");
}

