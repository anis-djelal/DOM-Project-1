// Shopping Cart Functionality

// Selectors for all interactive elements
const plusBtns = document.querySelectorAll(".fa-plus-circle");
const minusBtns = document.querySelectorAll(".fa-minus-circle");
const trashBtns = document.querySelectorAll(".fa-trash-alt");
const heartBtns = document.querySelectorAll(".fa-heart");
const totalDisplay = document.querySelector(".total");

// Create a dynamic cart badge in the navbar (extra feature)
const cartBadge = document.createElement("span");
cartBadge.className = "badge bg-success ms-2";
document.querySelector(".navbar-brand").appendChild(cartBadge);

// Functions


// Function to calculate and update the total price
function updateTotal() {
  let total = 0;
  const cards = document.querySelectorAll(".card");
  cards.forEach(card => {
    const unitPrice = parseInt(card.querySelector(".unit-price").innerText.replace("$", ""));
    const quantity = parseInt(card.querySelector(".quantity").innerText);
    total += unitPrice * quantity;
  });
  totalDisplay.innerText = total + " $";
  updateItemCount(); // also update navbar badge
}

// Function to update the item count badge
function updateItemCount() {
  let count = 0;
  document.querySelectorAll(".quantity").forEach(q => {
    count += parseInt(q.innerText);
  });
  cartBadge.innerText = count;
}

// Event Listeners


// Increment item quantity
plusBtns.forEach(btn => {
  btn.addEventListener("click", function () {
    const quantitySpan = btn.parentElement.querySelector(".quantity");
    quantitySpan.innerText = parseInt(quantitySpan.innerText) + 1;
    updateTotal();
  });
});

// Decrement item quantity (never below 0)
minusBtns.forEach(btn => {
  btn.addEventListener("click", function () {
    const quantitySpan = btn.parentElement.querySelector(".quantity");
    let current = parseInt(quantitySpan.innerText);
    if (current > 0) {
      quantitySpan.innerText = current - 1;
      updateTotal();
    }
  });
});

// Delete a product card
trashBtns.forEach(btn => {
  btn.addEventListener("click", function () {
    btn.closest(".card-body").remove();
    updateTotal();
  });
});

// Toggle heart color (like/unlike)
heartBtns.forEach(btn => {
  btn.addEventListener("click", function () {
    btn.style.color = btn.style.color === "red" ? "black" : "red";
  });
});

// Initialize total and item count on page load
updateTotal();
