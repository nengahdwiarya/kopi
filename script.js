// Data 22 Menu Lengkap
const menuItems = [
    { id: 1, name: "Buttercream Latte", category: "coffee", price: 29000, image: "https://images.unsplash.com/photo-1541167760496-1628856ab772?auto=format&fit=crop&w=500&q=80", description: "Lembutnya buttercream dipadu dengan espresso khas." },
    { id: 2, name: "Buttercream Tiramisu", category: "coffee", price: 33000, image: "https://images.unsplash.com/photo-1534778101976-62847782c213?auto=format&fit=crop&w=500&q=80", description: "Sentuhan rasa tiramisu kaya aroma." },
    { id: 3, name: "Espresso Classic", category: "coffee", price: 18000, image: "https://images.unsplash.com/photo-1510591509098-f4fdc6d0ff04?auto=format&fit=crop&w=500&q=80", description: "Ekstrak murni biji kopi pilihan." },
    { id: 4, name: "Kopi Susu Gula Aren", category: "coffee", price: 23000, image: "https://images.unsplash.com/photo-1514432324607-a09d9b4aefdd?auto=format&fit=crop&w=500&q=80", description: "Perpaduan espresso dan gula aren." },
    { id: 5, name: "Cappuccino", category: "coffee", price: 26000, image: "https://images.unsplash.com/photo-1572442388796-11668a67e53d?auto=format&fit=crop&w=500&q=80", description: "Keseimbangan espresso dan busa susu." },
    { id: 6, name: "Cafe Latte", category: "coffee", price: 26000, image: "https://images.unsplash.com/photo-1461023058943-07fcbe16d735?auto=format&fit=crop&w=500&q=80", description: "Espresso lembut dengan susu uap." },
    { id: 7, name: "Caramel Macchiato", category: "coffee", price: 32000, image: "https://images.unsplash.com/photo-1485808191679-edf8637cb6a9?auto=format&fit=crop&w=500&q=80", description: "Vanila berpadu dengan karamel manis." },
    { id: 8, name: "Mocha Latte", category: "coffee", price: 30000, image: "https://images.unsplash.com/photo-1530373239216-42518e6b4025?auto=format&fit=crop&w=500&q=80", description: "Kombinasi cokelat hitam dan espresso." },
    { id: 9, name: "Americano Ice", category: "coffee", price: 20000, image: "https://images.unsplash.com/photo-1517701550927-30cf4ba1dba5?auto=format&fit=crop&w=500&q=80", description: "Kesegaran espresso air dingin." },
    { id: 10, name: "Hazelnut Coffee", category: "coffee", price: 28000, image: "https://images.unsplash.com/photo-1507133750043-495f5cefdf04?auto=format&fit=crop&w=500&q=80", description: "Kopi susu sirup hazelnut panggang." },
    { id: 11, name: "Matcha Cream Latte", category: "non-coffee", price: 28000, image: "https://images.unsplash.com/photo-1536256263959-770b48d82b0a?auto=format&fit=crop&w=500&q=80", description: "Teh hijau matcha Jepang murni." },
    { id: 12, name: "Belgian Chocolate", category: "non-coffee", price: 27000, image: "https://images.unsplash.com/photo-1542990253-0d0f5be5f0ed?auto=format&fit=crop&w=500&q=80", description: "Minuman cokelat Belgia kaya rasa." },
    { id: 13, name: "Red Velvet Latte", category: "non-coffee", price: 27000, image: "https://images.unsplash.com/photo-1543353071-10c8ba85a904?auto=format&fit=crop&w=500&q=80", description: "Kue red velvet cair manis." },
    { id: 14, name: "Taro Milk Tea", category: "non-coffee", price: 26000, image: "https://images.unsplash.com/photo-1556679343-c7306c1976bc?auto=format&fit=crop&w=500&q=80", description: "Minuman rasa talas kelembutan krim." },
    { id: 15, name: "Lychee Tea Fresh", category: "non-coffee", price: 22000, image: "https://images.unsplash.com/photo-1556881286-fc6915169721?auto=format&fit=crop&w=500&q=80", description: "Teh melati segar buah leci." },
    { id: 16, name: "Mango Yakult Blend", category: "non-coffee", price: 25000, image: "https://images.unsplash.com/photo-1621263764928-df1444c5e859?auto=format&fit=crop&w=500&q=80", description: "Jus mangga segar dan Yakult." },
    { id: 17, name: "Fore Donut Sugar", category: "snack", price: 15000, image: "https://images.unsplash.com/photo-1555507036-ab1f4038808a?auto=format&fit=crop&w=500&q=80", description: "Donat empuk bertabur gula halus." },
    { id: 18, name: "Butter Croissant", category: "snack", price: 20000, image: "https://images.unsplash.com/photo-1530610476181-d83430b64d7d?auto=format&fit=crop&w=500&q=80", description: "Pastry renyah aroma mentega." },
    { id: 19, name: "Chocolate Lava Cake", category: "snack", price: 28000, image: "https://images.unsplash.com/photo-1606313564200-e75d5e30476c?auto=format&fit=crop&w=500&q=80", description: "Lelehan cokelat hangat di dalam." },
    { id: 20, name: "French Fries Crispy", category: "snack", price: 18000, image: "https://images.unsplash.com/photo-1573080496219-bb080dd4f877?auto=format&fit=crop&w=500&q=80", description: "Kentang goreng renyah saus sambal." },
    { id: 21, name: "Cheesy Garlic Bread", category: "snack", price: 22000, image: "https://images.unsplash.com/photo-1619096252214-ef05dc45c1ae?auto=format&fit=crop&w=500&q=80", description: "Roti bawang keju mozzarella." },
    { id: 22, name: "Almond Pain Suisse", category: "snack", price: 25000, image: "https://images.unsplash.com/photo-1509440159596-0249088772ff?auto=format&fit=crop&w=500&q=80", description: "Pastry vanila kacang almond." }
];

let cart = [];
let currentSlide = 0;
let selectedStar = 0;

function formatRupiah(amount) {
    return new Intl.NumberFormat('id-ID', { style: 'currency', currency: 'IDR', minimumFractionDigits: 0 }).format(amount);
}

// Fungsi Pindah Halaman Aman
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

    const navLinksEl = document.getElementById('navLinks');
    if (navLinksEl) navLinksEl.classList.remove('active');
    
    window.scrollTo({ top: 0, behavior: 'smooth' });
}

// Testimonial Slider
function showSlide(index) {
    const slides = document.querySelectorAll('.testi-card');
    const dots = document.querySelectorAll('.dot');
    if (slides.length === 0) return;

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
                <div>
                    <h3 style="font-size: 1rem; margin-bottom: 4px;">${item.name}</h3>
                    <p style="font-size:0.8rem; color:#666;">${item.description}</p>
                </div>
                <div class="menu-card-bottom">
                    <strong>${formatRupiah(item.price)}</strong>
                    <button class="btn btn-primary" style="padding: 5px 12px; border-radius: 20px; font-size:0.8rem;" onclick="addToCart(${item.id})">+ Tambah</button>
                </div>
            </div>
        `;
        menuGrid.appendChild(div);
    });
}

// Cart Logic
function addToCart(id) {
    const product = menuItems.find(p => p.id === id);
    const exist = cart.find(c => c.id === id);

    if (exist) exist.qty += 1;
    else cart.push({ ...product, qty: 1 });

    updateCartUI();
    alert(`${product.name} telah dimasukkan ke keranjang!`);
}

function updateCartUI() {
    const cartBadge = document.getElementById('cartBadge');
    const cartItemsContainer = document.getElementById('cartItems');
    const cartTotalAmount = document.getElementById('cartTotalAmount');
    if (!cartBadge) return;

    const totalQty = cart.reduce((acc, i) => acc + i.qty, 0);
    cartBadge.textContent = totalQty;

    cartItemsContainer.innerHTML = '';
    if (cart.length === 0) {
        cartItemsContainer.innerHTML = '<p style="text-align:center; color:#888;">Keranjang belanja kosong.</p>';
    } else {
        cart.forEach(item => {
            const div = document.createElement('div');
            div.style.display = 'flex';
            div.style.justifyContent = 'space-between';
            div.style.marginBottom = '8px';
            div.style.borderBottom = '1px solid #eee';
            div.style.paddingBottom = '6px';
            div.innerHTML = `
                <div>
                    <strong>${item.name}</strong><br>
                    <small>${item.qty} x ${formatRupiah(item.price)}</small>
                </div>
                <div><strong>${formatRupiah(item.qty * item.price)}</strong></div>
            `;
            cartItemsContainer.appendChild(div);
        });
    }

    const totalSum = cart.reduce((acc, i) => acc + (i.price * i.qty), 0);
    cartTotalAmount.textContent = formatRupiah(totalSum);
}

// Event Listeners setelah DOM siap
document.addEventListener('DOMContentLoaded', () => {
    renderMenu();

    // Navigasi Klik Event
    document.querySelectorAll('[data-page]').forEach(el => {
        el.addEventListener('click', (e) => {
            e.preventDefault();
            const pageId = el.getAttribute('data-page');
            switchPage(pageId);
        });
    });

    // Filter Tombol Menu Event
    document.querySelectorAll('.filter-btn').forEach(btn => {
        btn.addEventListener('click', (e) => {
            document.querySelectorAll('.filter-btn').forEach(b => b.classList.remove('active'));
            e.target.classList.add('active');
            renderMenu(e.target.getAttribute('data-filter'));
        });
    });

    // Rating Bintang Interaktif
    document.querySelectorAll('#starRating i').forEach(star => {
        star.addEventListener('click', function() {
            selectedStar = parseInt(this.getAttribute('data-value'));
            const stars = document.querySelectorAll('#starRating i');
            stars.forEach((s, index) => {
                if (index < selectedStar) {
                    s.classList.remove('fa-regular');
                    s.classList.add('fa-solid');
                } else {
                    s.classList.remove('fa-solid');
                    s.classList.add('fa-regular');
                }
            });
        });
    });

    // Slider Listeners
    document.getElementById('prevSlide')?.addEventListener('click', () => showSlide(currentSlide - 1));
    document.getElementById('nextSlide')?.addEventListener('click', () => showSlide(currentSlide + 1));

    // Cart Modal Listeners
    const cartModal = document.getElementById('cartModal');
    document.getElementById('cartBtn')?.addEventListener('click', () => cartModal.classList.add('active'));
    document.getElementById('closeCart')?.addEventListener('click', () => cartModal.classList.remove('active'));

    // Mobile Menu Toggle
    document.getElementById('menuToggle')?.addEventListener('click', () => {
        document.getElementById('navLinks')?.classList.toggle('active');
    });

    // Form Komplain Event
    document.getElementById('complaintForm')?.addEventListener('submit', (e) => {
        e.preventDefault();
        alert('Komplain/Pesan Anda telah berhasil dikirim ke sekolahmail588@gmail.com dan tim kami akan segera menghubungi nomor 0881025467022.');
        e.target.reset();
    });

    // Checkout Event
    document.getElementById('checkoutBtn')?.addEventListener('click', () => {
        if (cart.length === 0) return alert('Keranjang masih kosong!');
        const payment = document.getElementById('paymentMethod').value;
        alert(`Pesanan berhasil dibuat! Silakan selesaikan pembayaran menggunakan ${payment}.`);
        cart = [];
        updateCartUI();
        cartModal.classList.remove('active');
    });
});
