// Data 22 Menu Kopi, Non-Kopi, dan Cemilan Beserta Gambar
const menuItems = [
    // --- KOPI (1-10) ---
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
        name: "Espresso Classic",
        category: "coffee",
        price: 18000,
        image: "https://images.unsplash.com/photo-1510591509098-f4fdc6d0ff04?auto=format&fit=crop&w=500&q=80",
        description: "Ekstrak murni biji kopi pilihan dengan krema pekat sempurna."
    },
    {
        id: 4,
        name: "Kopi Susu Gula Aren",
        category: "coffee",
        price: 23000,
        image: "https://images.unsplash.com/photo-1514432324607-a09d9b4aefdd?auto=format&fit=crop&w=500&q=80",
        description: "Perpaduan espresso, susu segar, dan manisnya gula aren murni."
    },
    {
        id: 5,
        name: "Cappuccino",
        category: "coffee",
        price: 26000,
        image: "https://images.unsplash.com/photo-1572442388796-11668a67e53d?auto=format&fit=crop&w=500&q=80",
        description: "Keseimbangan sempurna antara espresso, susu panas, dan busa susu."
    },
    {
        id: 6,
        name: "Cafe Latte",
        category: "coffee",
        price: 26000,
        image: "https://images.unsplash.com/photo-1461023058943-07fcbe16d735?auto=format&fit=crop&w=500&q=80",
        description: "Espresso lembut dengan takaran susu uap hangat yang melimpah."
    },
    {
        id: 7,
        name: "Caramel Macchiato",
        category: "coffee",
        price: 32000,
        image: "https://images.unsplash.com/photo-1485808191679-edf8637cb6a9?auto=format&fit=crop&w=500&q=80",
        description: "Vanila berpadu dengan karamel manis di atas espresso dan susu."
    },
    {
        id: 8,
        name: "Mocha Latte",
        category: "coffee",
        price: 30000,
        image: "https://images.unsplash.com/photo-1530373239216-42518e6b4025?auto=format&fit=crop&w=500&q=80",
        description: "Kombinasi nikmat antara cokelat hitam premium dan espresso."
    },
    {
        id: 9,
        name: "Americano Ice",
        category: "coffee",
        price: 20000,
        image: "https://images.unsplash.com/photo-1517701550927-30cf4ba1dba5?auto=format&fit=crop&w=500&q=80",
        description: "Kesegaran espresso yang disiram dengan air dingin dan es batu."
    },
    {
        id: 10,
        name: "Hazelnut Coffee",
        category: "coffee",
        price: 28000,
        image: "https://images.unsplash.com/photo-1507133750043-495f5cefdf04?auto=format&fit=crop&w=500&q=80",
        description: "Kopi susu dengan tambahan sirup hazelnut panggang yang harum."
    },

    // --- NON-KOPI (11-16) ---
    {
        id: 11,
        name: "Matcha Cream Latte",
        category: "non-coffee",
        price: 28000,
        image: "https://images.unsplash.com/photo-1536256263959-770b48d82b0a?auto=format&fit=crop&w=500&q=80",
        description: "Teh hijau matcha Jepang murni dengan susu segar bertekstur lembut."
    },
    {
        id: 12,
        name: "Belgian Chocolate",
        category: "non-coffee",
        price: 27000,
        image: "https://images.unsplash.com/photo-1542990253-0d0f5be5f0ed?auto=format&fit=crop&w=500&q=80",
        description: "Minuman cokelat Belgia kaya rasa yang hangat dan menenangkan."
    },
    {
        id: 13,
        name: "Red Velvet Latte",
        category: "non-coffee",
        price: 27000,
        image: "https://images.unsplash.com/photo-1543353071-10c8ba85a904?auto=format&fit=crop&w=500&q=80",
        description: "Kue red velvet cair yang disajikan dalam bentuk minuman susu manis."
    },
    {
        id: 14,
        name: "Taro Milk Tea",
        category: "non-coffee",
        price: 26000,
        image: "https://images.unsplash.com/photo-1556679343-c7306c1976bc?auto=format&fit=crop&w=500&q=80",
        description: "Minuman rasa talas khas dengan kelembutan krim susu di setiap tegukan."
    },
    {
        id: 15,
        name: "Lychee Tea Fresh",
        category: "non-coffee",
        price: 22000,
        image: "https://images.unsplash.com/photo-1556881286-fc6915169721?auto=format&fit=crop&w=500&q=80",
        description: "Teh melati segar dilengkapi buah leci utuh pilihan yang manis."
    },
    {
        id: 16,
        name: "Mango Yakult Blend",
        category: "non-coffee",
        price: 25000,
        image: "https://images.unsplash.com/photo-1621263764928-df1444c5e859?auto=format&fit=crop&w=500&q=80",
        description: "Campuran jus mangga segar dan minuman probiotik Yakult yang menyegarkan."
    },

    // --- CEMILAN & PASTRY (17-22) ---
    {
        id: 17,
        name: "Fore Donut Sugar",
        category: "snack",
        price: 15000,
        image: "https://images.unsplash.com/photo-1555507036-ab1f4038808a?auto=format&fit=crop&w=500&q=80",
        description: "Donat empuk dan lembut bertabur gula halus manis yang klasik."
    },
    {
        id: 18,
        name: "Butter Croissant",
        category: "snack",
        price: 20000,
        image: "https://images.unsplash.com/photo-1530610476181-d83430b64d7d?auto=format&fit=crop&w=500&q=80",
        description: "Pastry renyah berlapis dengan aroma mentega gurih berlimpah."
    },
    {
        id: 19,
        name: "Chocolate Lava Cake",
        category: "snack",
        price: 28000,
        image: "https://images.unsplash.com/photo-1606313564200-e75d5e30476c?auto=format&fit=crop&w=500&q=80",
        description: "Kue cokelat lembut dengan lelehan cokelat hangat di bagian dalamnya."
    },
    {
        id: 20,
        name: "French Fries Crispy",
        category: "snack",
        price: 18000,
        image: "https://images.unsplash.com/photo-1573080496219-bb080dd4f877?auto=format&fit=crop&w=500&q=80",
        description: "Kentang goreng renyah disajikan dengan saus sambal spesial."
    },
    {
        id: 21,
        name: "Cheesy Garlic Bread",
        category: "snack",
        price: 22000,
        image: "https://images.unsplash.com/photo-1619096252214-ef05dc45c1ae?auto=format&fit=crop&w=500&q=80",
        description: "Roti panggang bawang putih dengan lumuran keju mozzarella meleleh."
    },
    {
        id: 22,
        name: "Almond Pain Suisse",
        category: "snack",
        price: 25000,
        image: "https://images.unsplash.com/photo-1509440159596-0249088772ff?auto=format&fit=crop&w=500&q=80",
        description: "Pastry renyah isi krim vanila dengan taburan kacang almond panggang."
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

// Render 22 Menu
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
                    <h3 style="font-size: 1.1rem; margin-bottom: 5px;">${item.name}</h3>
                    <p style="font-size:0.82rem; color:#666;">${item.description}</p>
                </div>
                <div class="menu-card-bottom">
                    <strong>${formatRupiah(item.price)}</strong>
                    <button class="btn btn-primary" style="padding: 6px 14px; border-radius: 20px;" onclick="addToCart(${item.id})">+ Tambah</button>
                </div>
            </div>
        `;
        menuGrid.appendChild(div);
    });
}

// Filter Event Listener
document.addEventListener('click', (e) => {
    if (e.target.classList.contains('filter-btn')) {
        document.querySelectorAll('.filter-btn').forEach(btn => btn.classList.remove('active'));
        e.target.classList.add('active');
        renderMenu(e.target.getAttribute('data-filter'));
    }
});

// Cart Functionality
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
            div.style.marginBottom = '10px';
            div.style.borderBottom = '1px solid #eee';
            div.style.paddingBottom = '8px';
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
