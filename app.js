
// ==========================================
// KOPI P.L.M - MAIN JAVASCRIPT
// ==========================================

// GANTI NOMOR INI DENGAN NOMOR WHATSAPP KEDAI
const WHATSAPP_NUMBER = "6281234567890";

const products = [
  {
    id: 1,
    name: "Classic Espresso",
    category: "coffee",
    price: 18000,
    label: "BEST SELLER",
    description: "Strong, bold and perfectly balanced.",
    image: "https://images.unsplash.com/photo-1510707577719-ae7c14805e3a?w=600"
  },
  {
    id: 2,
    name: "Cafe Latte",
    category: "coffee",
    price: 25000,
    label: "POPULAR",
    description: "Smooth espresso with silky steamed milk.",
    image: "https://images.unsplash.com/photo-1461023058943-07fcbe16d735?w=600"
  },
  {
    id: 3,
    name: "Caramel Macchiato",
    category: "coffee",
    price: 28000,
    label: "SIGNATURE",
    description: "Espresso, milk and sweet caramel.",
    image: "https://images.unsplash.com/photo-1485808191679-5f86510681a2?w=600"
  },
  {
    id: 4,
    name: "Cappuccino",
    category: "coffee",
    price: 24000,
    label: "CLASSIC",
    description: "Rich espresso topped with creamy foam.",
    image: "https://images.unsplash.com/photo-1572442388796-11668a67e53d?w=600"
  },
  {
    id: 5,
    name: "Matcha Latte",
    category: "noncoffee",
    price: 26000,
    label: "FRESH",
    description: "Japanese-inspired creamy matcha.",
    image: "https://images.unsplash.com/photo-1515823064-d6e0c04616a7?w=600"
  },
  {
    id: 6,
    name: "Chocolate Bliss",
    category: "noncoffee",
    price: 23000,
    label: "FAVORITE",
    description: "Rich chocolate with fresh milk.",
    image: "https://images.unsplash.com/photo-1542990253-0b8be4e5d3f4?w=600"
  },
  {
    id: 7,
    name: "Butter Croissant",
    category: "food",
    price: 19000,
    label: "FRESH BAKED",
    description: "Golden, flaky and buttery pastry.",
    image: "https://images.unsplash.com/photo-1555507036-ab1f4038808a?w=600"
  },
  {
    id: 8,
    name: "Chocolate Cake",
    category: "food",
    price: 27000,
    label: "DESSERT",
    description: "Soft chocolate cake with rich flavor.",
    image: "https://images.unsplash.com/photo-1578985545062-69928b1d9587?w=600"
  }
];

// ==========================================
// STORAGE
// ==========================================

let cart = JSON.parse(localStorage.getItem("plmCart")) || [];
let wishlist = JSON.parse(localStorage.getItem("plmWishlist")) || [];
let reviews = JSON.parse(localStorage.getItem("plmReviews")) || [
  {
    name: "Alex Morgan",
    rating: 5,
    message: "Amazing coffee! The atmosphere is beautiful and the service is excellent."
  },
  {
    name: "Sarah Johnson",
    rating: 5,
    message: "One of my favorite places. Great taste and lovely experience."
  },
  {
    name: "Daniel Lee",
    rating: 4,
    message: "Good coffee, friendly staff and a comfortable place to relax."
  }
];

let currentCategory = "all";
let activeVoucher = false;

// ==========================================
// HELPER
// ==========================================

const $ = id => document.getElementById(id);

function money(amount) {
  return "Rp" + amount.toLocaleString("id-ID");
}

function saveData() {
  localStorage.setItem("plmCart", JSON.stringify(cart));
  localStorage.setItem("plmWishlist", JSON.stringify(wishlist));
  localStorage.setItem("plmReviews", JSON.stringify(reviews));
}

let toastTimer;

function toast(message) {
  const el = $("toast");
  el.textContent = message;
  el.classList.add("show");

  clearTimeout(toastTimer);
  toastTimer = setTimeout(() => {
    el.classList.remove("show");
  }, 2500);
}

// ==========================================
// PRODUCT DISPLAY
// ==========================================

function renderProducts() {
  const search = $("searchInput").value.toLowerCase();

  const filtered = products.filter(product => {
    const categoryMatch =
      currentCategory === "all" ||
      product.category === currentCategory;

    const searchMatch =
      product.name.toLowerCase().includes(search) ||
      product.description.toLowerCase().includes(search);

    return categoryMatch && searchMatch;
  });

  $("productGrid").innerHTML = filtered.length
    ? filtered.map(product => `
      <article class="product-card">
        <div class="product-image">
          <img src="${product.image}"
            alt="${product.name}"
            loading="lazy">
          <span class="product-label">${product.label}</span>
          <button class="wish-btn ${wishlist.includes(product.id) ? "selected" : ""}"
            onclick="toggleWishlist(${product.id})"
            aria-label="Add ${product.name} to wishlist">
            ${wishlist.includes(product.id) ? "♥" : "♡"}
          </button>
        </div>
        <div class="product-info">
          <small>${product.category.toUpperCase()}</small>
          <h3>${product.name}</h3>
          <p>${product.description}</p>
          <div class="product-bottom">
            <span class="product-price">${money(product.price)}</span>
            <button class="add-btn"
              onclick="addToCart(${product.id})"
              aria-label="Add ${product.name} to cart">+</button>
          </div>
        </div>
      </article>
    `).join("")
    : `<div class="empty-state">No products found. Try another search.</div>`;
}

// ==========================================
// CATEGORY FILTER
// ==========================================

document.querySelectorAll(".filter").forEach(button => {
  button.addEventListener("click", () => {
    document.querySelectorAll(".filter").forEach(btn =>
      btn.classList.remove("active")
    );

    button.classList.add("active");
    currentCategory = button.dataset.category;
    renderProducts();
  });
});

$("searchInput").addEventListener("input", renderProducts);

// ==========================================
// WISHLIST
// ==========================================

function toggleWishlist(id) {
  if (wishlist.includes(id)) {
    wishlist = wishlist.filter(item => item !== id);
    toast("Removed from wishlist");
  } else {
    wishlist.push(id);
    toast("Added to wishlist ♥");
  }

  saveData();
  renderProducts();
  updateCounters();
}

function updateCounters() {
  const totalItems = cart.reduce((sum, item) => sum + item.qty, 0);

  $("cartCount").textContent = totalItems;
  $("wishCount").textContent = wishlist.length;
}

// ==========================================
// CART
// ==========================================

function addToCart(id) {
  const existing = cart.find(item => item.id === id);

  if (existing) {
    existing.qty++;
  } else {
    cart.push({ id, qty: 1 });
  }

  saveData();
  renderCart();
  updateCounters();
  toast("Product added to cart!");
}

function changeQuantity(id, amount) {
  const item = cart.find(item => item.id === id);
  if (!item) return;

  item.qty += amount;

  if (item.qty <= 0) {
    cart = cart.filter(item => item.id !== id);
  }

  activeVoucher = false;
  saveData();
  renderCart();
  updateCounters();
}

function removeFromCart(id) {
  cart = cart.filter(item => item.id !== id);
  activeVoucher = false;
  saveData();
  renderCart();
  updateCounters();
}

function getSubtotal() {
  return cart.reduce((sum, item) => {
    const product = products.find(p => p.id === item.id);
    return sum + (product ? product.price * item.qty : 0);
  }, 0);
}

function renderCart() {
  const container = $("cartItems");

  if (!cart.length) {
    container.innerHTML =
      `<div class="empty-state">Your cart is empty ☕<br>Let's find your coffee.</div>`;
  } else {
    container.innerHTML = cart.map(item => {
      const product = products.find(p => p.id === item.id);
      if (!product) return "";

      return `
        <div class="cart-item">
          <img src="${product.image}" alt="${product.name}">
          <div class="cart-item-info">
            <strong>${product.name}</strong>
            <small>${money(product.price)}</small>
            <div class="quantity">
              <button onclick="changeQuantity(${item.id},-1)">−</button>
              <span>${item.qty}</span>
              <button onclick="changeQuantity(${item.id},1)">+</button>
            </div>
          </div>
          <button class="remove-btn"
            onclick="removeFromCart(${item.id})">✕</button>
        </div>
      `;
    }).join("");
  }

  const subtotal = getSubtotal();
  const discount = activeVoucher ? Math.round(subtotal * 0.1) : 0;

  $("subtotal").textContent = money(subtotal);
  $("discount").textContent = money(discount);
  $("total").textContent = money(subtotal - discount);
}

function openCart() {
  $("cartSidebar").classList.add("show");
  $("overlay").classList.add("show");
}

function closeCart() {
  $("cartSidebar").classList.remove("show");
  $("overlay").classList.remove("show");
}

$("cartBtn").addEventListener("click", openCart);
$("closeCart").addEventListener("click", closeCart);
$("overlay").addEventListener("click", closeCart);

// ==========================================
// VOUCHER
// ==========================================

$("applyVoucher").addEventListener("click", () => {
  const code = $("voucherInput").value.trim().toUpperCase();
  const subtotal = getSubtotal();

  if (code === "PLM10" && subtotal >= 50000) {
    activeVoucher = true;
    $("voucherMessage").textContent = "Voucher applied! 10% discount.";
    toast("Voucher successfully applied!");
  } else if (code === "PLM10") {
    activeVoucher = false;
    $("voucherMessage").textContent =
      "Minimum purchase is Rp50.000.";
  } else {
    activeVoucher = false;
    $("voucherMessage").textContent = "Invalid voucher code.";
  }

  renderCart();
});

$("copyVoucher").addEventListener("click", async () => {
  try {
    await navigator.clipboard.writeText("PLM10");
    toast("Voucher PLM10 copied!");
  } catch {
    toast("Your voucher code is PLM10");
  }
});

// ==========================================
// CHECKOUT
// ==========================================

$("checkoutBtn").addEventListener("click", () => {
  if (!cart.length) {
    toast("Your cart is still empty!");
    return;
  }

  closeCart();
  $("checkoutModal").classList.add("show");
});

$("closeCheckout").addEventListener("click", () => {
  $("checkoutModal").classList.remove("show");
});

$("checkoutForm").addEventListener("submit", event => {
  event.preventDefault();

  if (!cart.length) return;

  const name = $("customerName").value.trim();
  const phone = $("customerPhone").value.trim();
  const orderType = $("orderType").value;
  const notes = $("orderNotes").value.trim();

  const subtotal = getSubtotal();
  const discount = activeVoucher ? Math.round(subtotal * 0.1) : 0;
  const total = subtotal - discount;

  let message = `*NEW ORDER - KOPI P.L.M*\n\n`;
  message += `Name: ${name}\n`;
  message += `Phone: ${phone}\n`;
  message += `Order Type: ${orderType}\n\n`;
  message += `*ORDER DETAILS*\n`;

  cart.forEach(item => {
    const product = products.find(p => p.id === item.id);
    message += `${product.name} x${item.qty} = ${money(product.price * item.qty)}\n`;
  });

  message += `\nSubtotal: ${money(subtotal)}`;
  message += `\nDiscount: ${money(discount)}`;
  message += `\n*TOTAL: ${money(total)}*`;
  message += `\n\nNotes: ${notes || "-"}`;
  message += `\n\nThank you for choosing KOPI P.L.M!`;

  window.open(
    `https://wa.me/${WHATSAPP_NUMBER}?text=${encodeURIComponent(message)}`,
    "_blank"
  );

  $("checkoutModal").classList.remove("show");
  $("checkoutForm").reset();

  // Cart dikosongkan setelah WhatsApp dibuka.
  cart = [];
  activeVoucher = false;
  saveData();
  renderCart();
  updateCounters();
});

// ==========================================
// TABLE RESERVATION
// ==========================================

const today = new Date();
const localToday = new Date(
  today.getTime() - today.getTimezoneOffset() * 60000
).toISOString().split("T")[0];

$("resDate").min = localToday;

$("reservationForm").addEventListener("submit", event => {
  event.preventDefault();

  const name = $("resName").value.trim();
  const email = $("resEmail").value.trim();
  const date = $("resDate").value;
  const time = $("resTime").value;
  const guests = $("resGuests").value;
  const note = $("resNote").value.trim();

  if (date < localToday) {
    toast("Please select a valid reservation date.");
    return;
  }

  if (time < "09:00" || time > "22:00") {
    toast("Opening hours: 09:00 - 22:00.");
    return;
  }

  const message =
    `*TABLE RESERVATION - KOPI P.L.M*\n\n` +
    `Name: ${name}\n` +
    `Email: ${email}\n` +
    `Date: ${date}\n` +
    `Time: ${time}\n` +
    `Guests: ${guests}\n` +
    `Special Request: ${note || "-"}\n\n` +
    `Please confirm my reservation. Thank you!`;

  window.open(
    `https://wa.me/${WHATSAPP_NUMBER}?text=${encodeURIComponent(message)}`,
    "_blank"
  );

  toast("Reservation request prepared!");
  $("reservationForm").reset();
  $("resDate").min = localToday;
});

// ==========================================
// REVIEWS
// ==========================================

function renderReviews() {
  $("reviewList").innerHTML = reviews.map(review => `
    <div class="review-card">
      <div class="review-stars">${"★".repeat(review.rating)}${"☆".repeat(5-review.rating)}</div>
      <p>"${escapeHTML(review.message)}"</p>
      <strong>${escapeHTML(review.name)}</strong>
    </div>
  `).join("");
}

function escapeHTML(value) {
  return String(value).replace(/[&<>"']/g, char => ({
    "&": "&amp;",
    "<": "&lt;",
    ">": "&gt;",
    '"': "&quot;",
    "'": "&#39;"
  })[char]);
}

$("reviewForm").addEventListener("submit", event => {
  event.preventDefault();

  const name = $("reviewName").value.trim();
  const rating = Number($("reviewRating").value);
  const message = $("reviewMessage").value.trim();

  if (!name || !message || !rating) return;

  reviews.unshift({ name, rating, message });

  saveData();
  renderReviews();

  $("reviewForm").reset();
  toast("Thank you for your review!");
});

// ==========================================
// DARK MODE
// ==========================================

const savedTheme = localStorage.getItem("plmTheme");

if (savedTheme === "dark") {
  document.body.classList.add("dark");
}

function updateThemeIcon() {
  $("themeBtn").textContent =
    document.body.classList.contains("dark") ? "☀" : "☾";
}

updateThemeIcon();

$("themeBtn").addEventListener("click", () => {
  document.body.classList.toggle("dark");

  const theme = document.body.classList.contains("dark")
    ? "dark"
    : "light";

  localStorage.setItem("plmTheme", theme);
  updateThemeIcon();
});

// ==========================================
// LANGUAGE SWITCH
// ==========================================

let currentLanguage = "id";

$("languageBtn").addEventListener("click", () => {
  currentLanguage = currentLanguage === "id" ? "en" : "id";

  const translations = {
    id: {
      home: "Beranda",
      menu: "Menu Kami",
      story: "Cerita Kami",
      reservation: "Reservasi",
      reviews: "Ulasan",
      explore: "Jelajahi Menu ↗"
    },
    en: {
      home: "Home",
      menu: "Our Menu",
      story: "Our Story",
      reservation: "Reservation",
      reviews: "Reviews",
      explore: "Explore Our Menu ↗"
    }
  };

  const t = translations[currentLanguage];

  const links = document.querySelectorAll("#navMenu a");
  const labels = [t.home, t.menu, t.story, t.reservation, t.reviews];

  links.forEach((link, index) => {
    link.textContent = labels[index];
  });

  document.querySelector(".hero-buttons .btn-primary").textContent = t.explore;

  $("languageBtn").textContent = currentLanguage.toUpperCase();
});

// ==========================================
// MOBILE NAVIGATION
// ==========================================

$("menuToggle").addEventListener("click", () => {
  $("navMenu").classList.toggle("open");
});

document.querySelectorAll("#navMenu a").forEach(link => {
  link.addEventListener("click", () => {
    $("navMenu").classList.remove("open");
  });
});

// ==========================================
// INITIALIZATION
// ==========================================

renderProducts();
renderCart();
renderReviews();
updateCounters();

console.log("KOPI P.L.M website successfully loaded!");
