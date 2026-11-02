// Data Menu Kopi & Makanan
const menuItems = [
    {
        id: 1,
        name: "Buttercream Latte",
        category: "coffee",
        price: 29000,
        image: "https://images.unsplash.com/photo-1541167760496-1628856ab772?auto=format&fit=crop&w=500&q=80",
        description: "Lembutnya buttercream dipadu dengan espresso khas Kopi Senja."
    },
    {
        id: 2,
        name: "Buttercream Tiramisu",
        category: "coffee",
        price: 33000,
        image: "https://images.unsplash.com/photo-1534778101976-62847782c213?auto=format&fit=crop&w=500&q=80",
        description: "Sentuhan rasa tiramisu kaya aroma dengan topping istimewa."
    },
    {
        id: 3,
        name: "Matcha Cream Latte",
        category: "non-coffee",
        price: 28000,
        image: "https://images.unsplash.com/photo-1536256263959-770b48d82b0a?auto=format&fit=crop&w=500&q=80",
        description: "Teh hijau matcha Jepang murni dengan susu kental manis."
    },
    {
        id: 4,
        name: "Fore Donut Sugar",
        category: "snack",
        price: 15000,
        image: "https://images.unsplash.com/photo-1555507036-ab1f4038808a?auto=format&fit=crop&w=500&q=80",
        description: "Donat lembut bertabur gula halus manis yang sempurna."
    }
];

let cart = [];
let currentSlide = 0;
let selectedStar = 0;

// Format Rupiah
function formatRupiah(amount) {
    return new Intl.NumberFormat('id-ID', { style: 'currency', currency: 'IDR', minimumFractionDigits: 0 }).format(amount);
}

// Navigasi Pindah Halaman
function switchPage(pageId) {
    const pages = document.querySelectorAll('.page-content');
    const navItems = document.querySelectorAll('.nav-item');

    pages.forEach(page => page.classList.remove('active'));
    navItems.forEach(item => item.classList.remove('active'));

    const activePage = document.getElementById(`page-${pageId}`);
    if (activePage) {
        activePage.classList.add('active');
    }

    const activeNav = document.querySelector(`.nav-item[data-page="${pageId}"]`);
    if (activeNav) {
        activeNav.classList.add('active');
    }

    // Tutup menu mobile jika terbuka
    document.getElementById('navLinks').classList.remove('active');
    window.scrollTo({ top: 0, behavior: 'smooth' });
}

// Testimonial Slider Controls
function showSlide(index) {
    const slides = document.querySelectorAll('.testi-card');
    const dots = document.querySelectorAll('.dot');

    if (index >= slides.length) currentSlide = 0;
    else if (index < 0) currentSlide = slides.length - 1;
    else currentSlide = index;

    slides.forEach((slide, i) => {
        slide.classList.toggle('active', i === currentSlide);
    });

    dots.forEach((dot, i) => {
        dot.classList.toggle('active', i === currentSlide);
    });
}

function goToSlide(index) {
    showSlide(index);
}

// Rating Bintang Interaktif
document.querySelectorAll('#starRating i').forEach(star => {
    star.addEventListener('click', function() {
        selectedStar = parseInt(this.getAttribute('data-value'));
        updateStarUI(selectedStar);
    });
});

function updateStarUI(rating) {
    const stars = document.querySelectorAll('#starRating i');
    stars.forEach((star, index) => {
        if (index < rating) {
            star.classList.remove('fa-regular');
            star.classList.add('fa-solid');
        } else {
            star.classList.remove('fa-solid');
            star.classList.add('fa-regular');
        }
    });
}

function submitReview() {
    const reviewText = document.getElementById('userReviewText').value;
    if (selectedStar === 0) {
        alert('Silakan pilih rating bintang terlebih dahulu!');
        return;
    }
    if (!reviewText.trim()) {
        alert('Silakan isi ulasan Anda!');
        return;
    }

    alert(`Terima kasih! Ulasan ${selectedStar} bintang Anda telah terkirim.`);
    document.getElementById('userReviewText').value = '';
    selectedStar = 0;
    updateStarUI(0);
}

// Render Menu
function renderMenu(filter = 'all') {
    const menuGrid = document.getElementById('menuGrid');
    if (!menuGrid) return;
    
    menuGrid.innerHTML = '';
    const items = filter === 'all' ? menuItems : menuItems.filter(item => item.category === filter);

    items.forEach(item => {
        const div = document.createElement('div');
        div.className = 'menu-card';
        div.innerHTML = `
            <img src="${item.image}" alt="${item.name}">
            <div class="menu-card-body">
                <h3>${item.name}</h3>
                <p style="font-size:0.85rem; color:#666;">${item.description}</p>
                <div class="menu-card-bottom">
                    <strong>${formatRupiah(item.price)}</strong>
                    <button class="btn btn-primary" onclick="addToCart(${item.id})">+</button>
                </div>
            </div>
        `;
        menuGrid.appendChild(div);
    });
}

// Cart Functionality
function addToCart(id) {
    const product = menuItems.find(p => p.id === id);
    const exist = cart.find(c => c.id === id);

    if (exist) exist.qty += 1;
    else cart.push({ ...product, qty: 1 });

    updateCartUI();
}

function updateCartUI() {
    const cartBadge = document.getElementById('cartBadge');
    const cartItemsContainer = document.getElementById('cartItems');
    const cartTotalAmount = document.getElementById('cartTotalAmount');

    const totalQty = cart.reduce((acc, i) => acc + i.qty, 0);
    cartBadge.textContent = totalQty;

    cartItemsContainer.innerHTML = '';
    if (cart.length === 0) {
        cartItemsContainer.innerHTML = '<p style="text-align:center;">Keranjang belanja kosong.</p>';
    } else {
        cart.forEach(item => {
            const div = document.createElement('div');
            div.style.display = 'flex';
            div.style.justifyContent = 'space-between';
            div.style.marginBottom = '10px';
            div.innerHTML = `
                <div>
                    <strong>${item.name}</strong><br>
                    <small>${item.qty} x ${formatRupiah(item.price)}</small>
                </div>
                <div>${formatRupiah(item.qty * item.price)}</div>
            `;
            cartItemsContainer.appendChild(div);
        });
    }

    const totalSum = cart.reduce((acc, i) => acc + (i.price * i.qty), 0);
    cartTotalAmount.textContent = formatRupiah(totalSum);
}

// DOM Events Initialization
document.addEventListener('DOMContentLoaded', () => {
    renderMenu();

    // Slider Listeners
    document.getElementById('prevSlide')?.addEventListener('click', () => showSlide(currentSlide - 1));
    document.getElementById('nextSlide')?.addEventListener('click', () => showSlide(currentSlide + 1));

    // Cart Modal Listeners
    const cartModal = document.getElementById('cartModal');
    document.getElementById('cartBtn').addEventListener('click', () => cartModal.classList.add('active'));
    document.getElementById('closeCart').addEventListener('click', () => cartModal.classList.remove('active'));

    // Mobile Menu
    document.getElementById('menuToggle').addEventListener('click', () => {
        document.getElementById('navLinks').classList.toggle('active');
    });

    // Form Komplain Event
    document.getElementById('complaintForm')?.addEventListener('submit', (e) => {
        e.preventDefault();
        alert('Komplain/Pesan Anda telah berhasil dikirim ke sekolahmail588@gmail.com dan tim kami akan menghubungi nomor HP Anda.');
        e.target.reset();
    });

    // Checkout Event
    document.getElementById('checkoutBtn')?.addEventListener('click', () => {
        if (cart.length === 0) return alert('Keranjang masih kosong!');
        const payment = document.getElementById('paymentMethod').value;
        alert(`Pesanan berhasil dibuat dengan metode pembayaran: ${payment}`);
        cart = [];
        updateCartUI();
        cartModal.classList.remove('active');
    });
});
