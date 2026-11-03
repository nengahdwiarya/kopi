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
let discountPercent = 0;
const ADMIN_SECRET_PASSWORD = "nengahsenja2026";

if (!localStorage.getItem('reviews')) {
    localStorage.setItem('reviews', JSON.stringify([
        { name: "Devi Alfilovita", text: "Kopi Senja Bojongsari is one of the best merchants! Pelayanan cepat.", stars: 5 },
        { name: "Rian Kusuma", text: "Cita rasa kopi lokal kualitas internasional!", stars: 5 }
    ]));
}

if (!localStorage.getItem('orders')) {
    localStorage.setItem('orders', JSON.stringify([]));
}

function formatRupiah(amount) {
    return new Intl.NumberFormat('id-ID', { style: 'currency', currency: 'IDR', minimumFractionDigits: 0 }).format(amount);
}

function switchPage(pageId) {
    const pages = document.querySelectorAll('.page-content');
    const navItems = document.querySelectorAll('.nav-item');

    pages.forEach(page => page.classList.remove('active'));
    navItems.forEach(item => item.classList.remove('active'));

    const activePage = document.getElementById(`page-${pageId}`);
    if (activePage) activePage.classList.add('active');

    const activeNav = document.querySelector(`.nav-item[data-page="${pageId}"]`);
    if (activeNav) activeNav.classList.add('active');

    const navLinksEl = document.getElementById('navLinks');
    if (navLinksEl) navLinksEl.classList.remove('active');
    
    window.scrollTo({ top: 0, behavior: 'smooth' });

    if (pageId === 'admin') {
        checkAdminSession();
    }
}

function verifyAdminPassword() {
    const pass = document.getElementById('adminPasswordInput').value;
    if (pass === ADMIN_SECRET_PASSWORD) {
        localStorage.setItem('isAdminLoggedIn', 'true');
        document.getElementById('adminLoginBox').style.display = 'none';
        document.getElementById('adminDashboardContent').style.display = 'block';
        renderAdminDashboard();
    } else {
        alert('Password admin salah!');
    }
}

function checkAdminSession() {
    const isLogged = localStorage.getItem('isAdminLoggedIn');
    if (isLogged === 'true') {
        document.getElementById('adminLoginBox').style.display = 'none';
        document.getElementById('adminDashboardContent').style.display = 'block';
        renderAdminDashboard();
    } else {
        document.getElementById('adminLoginBox').style.display = 'block';
        document.getElementById('adminDashboardContent').style.display = 'none';
    }
}

function logoutAdmin() {
    localStorage.removeItem('isAdminLoggedIn');
    document.getElementById('adminPasswordInput').value = '';
    checkAdminSession();
}

function renderAdminDashboard() {
    renderAdminOrders();
    renderAdminReviews();
}

function renderAdminOrders() {
    const tbody = document.getElementById('adminOrderList');
    if (!tbody) return;
    const orders = JSON.parse(localStorage.getItem('orders')) || [];
    tbody.innerHTML = '';

    if (orders.length === 0) {
        tbody.innerHTML = `<tr><td colspan="6" style="text-align:center; padding:20px; color:#777;">Belum ada pesanan.</td></tr>`;
        return;
    }

    orders.forEach((ord, idx) => {
        const tr = document.createElement('tr');
        tr.style.borderBottom = '1px solid #ddd';
        tr.innerHTML = `
            <td style="padding:10px;">#${ord.id}</td>
            <td style="padding:10px;">${ord.name}<br><small>${ord.phone}</small></td>
            <td style="padding:10px;">${ord.items}</td>
            <td style="padding:10px;">${formatRupiah(ord.total)}</td>
            <td style="padding:10px;"><span style="padding:3px 8px; border-radius:4px; font-size:0.8rem; background:${ord.status==='Disetujui'?'#28a745':ord.status==='Dibatalkan'?'#dc3545':'#ffc107'}; color:#fff;">${ord.status}</span></td>
            <td style="padding:10px;">
                <button onclick="updateOrderStatus(${idx}, 'Disetujui')" style="background:#28a745; color:#fff; border:none; padding:4px 8px; border-radius:4px; cursor:pointer;">Setuju</button>
                <button onclick="updateOrderStatus(${idx}, 'Selesai')" style="background:#17a2b8; color:#fff; border:none; padding:4px 8px; border-radius:4px; cursor:pointer;">Selesai</button>
                <button onclick="updateOrderStatus(${idx}, 'Dibatalkan')" style="background:#dc3545; color:#fff; border:none; padding:4px 8px; border-radius:4px; cursor:pointer;">Batal</button>
            </td>
        `;
        tbody.appendChild(tr);
    });
}

function updateOrderStatus(index, status) {
    let orders = JSON.parse(localStorage.getItem('orders'));
    orders[index].status = status;
    localStorage.setItem('orders', JSON.stringify(orders));
    renderAdminOrders();
}

function renderAdminReviews() {
    const tbody = document.getElementById('adminReviewList');
    if (!tbody) return;
    const reviews = JSON.parse(localStorage.getItem('reviews')) || [];
    tbody.innerHTML = '';

    if (reviews.length === 0) {
        tbody.innerHTML = `<tr><td colspan="4" style="text-align:center; padding:15px; color:#777;">Belum ada ulasan.</td></tr>`;
        return;
    }

    reviews.forEach((rev, idx) => {
        const tr = document.createElement('tr');
        tr.style.borderBottom = '1px solid #ddd';
        tr.innerHTML = `
            <td style="padding:10px;">${rev.name}</td>
            <td style="padding:10px;">⭐ ${rev.stars}</td>
            <td style="padding:10px;">${rev.text}</td>
            <td style="padding:10px;"><button onclick="deleteReview(${idx})" style="background:#dc3545; color:#fff; border:none; padding:5px 10px; border-radius:4px; cursor:pointer;">Hapus</button></td>
        `;
        tbody.appendChild(tr);
    });
}

function deleteReview(index) {
    let reviews = JSON.parse(localStorage.getItem('reviews'));
    reviews.splice(index, 1);
    localStorage.setItem('reviews', JSON.stringify(reviews));
    renderAdminReviews();
    renderReviews();
    alert('Ulasan berhasil dihapus.');
}

function renderReviews() {
    const slider = document.getElementById('testimonialSlider');
    const dotsContainer = document.getElementById('sliderDots');
    const totalCountEl = document.getElementById('totalReviewsCount');
    if (!slider) return;

    const reviews = JSON.parse(localStorage.getItem('reviews'));
    if (totalCountEl) totalCountEl.textContent = reviews.length;

    slider.innerHTML = '';
    dotsContainer.innerHTML = '';

    reviews.forEach((rev, index) => {
        const starHTML = '<i class="fa-solid fa-star" style="color:#ffc107;"></i>'.repeat(rev.stars);
        const card = document.createElement('div');
        card.className = `testi-card ${index === currentSlide ? 'active' : ''}`;
        card.innerHTML = `
            <i class="fa-solid fa-quote-left quote-icon"></i>
            <div style="margin-bottom:5px;">${starHTML}</div>
            <p class="testi-text">"${rev.text}"</p>
            <div class="testi-author">
                <strong>${rev.name}</strong>
                <span>Warga Bojongsari, Depok</span>
            </div>
        `;
        slider.appendChild(card);

        const dot = document.createElement('span');
        dot.className = `dot ${index === currentSlide ? 'active' : ''}`;
        dot.onclick = () => goToSlide(index);
        dotsContainer.appendChild(dot);
    });
}

function showSlide(index) {
    const slides = document.querySelectorAll('.testi-card');
    const dots = document.querySelectorAll('.dot');
    if (slides.length === 0) return;

    if (index >= slides.length) currentSlide = 0;
    else if (index < 0) currentSlide = slides.length - 1;
    else currentSlide = index;

    slides.forEach((slide, i) => slide.classList.toggle('active', i === currentSlide));
    dots.forEach((dot, i) => dot.classList.toggle('active', i === currentSlide));
}

function goToSlide(index) { currentSlide = index; showSlide(currentSlide); }

function submitReview() {
    const name = document.getElementById('reviewerName').value.trim();
    const text = document.getElementById('userReviewText').value.trim();

    if (selectedStar === 0) return alert('Silakan pilih rating bintang terlebih dahulu!');
    if (!name || !text) return alert('Silakan isi nama dan ulasan Anda!');

    const reviews = JSON.parse(localStorage.getItem('reviews'));
    reviews.push({ name, text, stars: selectedStar });
    localStorage.setItem('reviews', JSON.stringify(reviews));

    alert('Terima kasih! Ulasan Anda berhasil ditambahkan.');
    document.getElementById('reviewerName').value = '';
    document.getElementById('userReviewText').value = '';
    selectedStar = 0;
    updateStarUI(0);
    currentSlide = reviews.length - 1;
    renderReviews();
    showSlide(currentSlide);
}

function updateStarUI(rating) {
    const stars = document.querySelectorAll('#starRating i');
    stars.forEach((star, index) => {
        if (index < rating) {
            star.classList.remove('fa-regular'); star.classList.add('fa-solid');
        } else {
            star.classList.remove('fa-solid'); star.classList.add('fa-regular');
        }
    });
}

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
                    <p style="font-size:0.8rem; color:var(--text-muted);">${item.description}</p>
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

function applyVoucher() {
    const code = document.getElementById('voucherCodeInput').value.trim().toUpperCase();
    const msg = document.getElementById('voucherMessage');

    if (code === 'KOPIZENJA' || code === 'BOJONGSARI') {
        discountPercent = 15;
        msg.textContent = 'Voucher Berhasil! Diskon 15%';
    } else if (code === 'SENJADAMAI') {
        discountPercent = 10;
        msg.textContent = 'Voucher Berhasil! Diskon 10%';
    } else {
        discountPercent = 0;
        msg.textContent = 'Kode voucher salah!';
        msg.style.color = 'red';
        return;
    }
    msg.style.color = 'green';
    updateCartUI();
}

function addToCart(id) {
    const product = menuItems.find(p => p.id === id);
    const exist = cart.find(c => c.id === id);
    if (exist) exist.qty += 1;
    else cart.push({ ...product, qty: 1 });
    updateCartUI();
    alert(`${product.name} dimasukkan ke keranjang!`);
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
        cartItemsContainer.innerHTML = '<p style="text-align:center; color:#888;">Keranjang kosong.</p>';
    } else {
        cart.forEach(item => {
            const div = document.createElement('div');
            div.style.display = 'flex';
            div.style.justifyContent = 'space-between';
            div.style.marginBottom = '8px';
            div.style.borderBottom = '1px solid #eee';
            div.style.paddingBottom = '6px';
            div.innerHTML = `<div><strong>${item.name}</strong><br><small>${item.qty} x ${formatRupiah(item.price)}</small></div><div><strong>${formatRupiah(item.qty * item.price)}</strong></div>`;
            cartItemsContainer.appendChild(div);
        });
    }

    let totalSum = cart.reduce((acc, i) => acc + (i.price * i.qty), 0);
    if (discountPercent > 0) totalSum = totalSum - (totalSum * discountPercent / 100);
    cartTotalAmount.textContent = formatRupiah(totalSum);
}

function checkStoreStatus() {
    const badge = document.getElementById('storeStatusBadge');
    if (!badge) return;
    const currentHour = new Date().getHours();
    if (currentHour >= 8 && currentHour < 23) {
        badge.textContent = "Buka (08:00 - 23:00)";
        badge.style.background = "#28a745";
    } else {
        badge.textContent = "Tutup";
        badge.style.background = "#dc3545";
    }
}

document.addEventListener('DOMContentLoaded', () => {
    renderMenu();
    renderReviews();
    checkStoreStatus();

    const themeBtn = document.getElementById('themeToggleBtn');
    const currentTheme = localStorage.getItem('theme');
    if (currentTheme === 'dark') {
        document.body.classList.add('dark-mode');
        themeBtn.innerHTML = '<i class="fa-solid fa-sun"></i>';
    }

    themeBtn?.addEventListener('click', () => {
        document.body.classList.toggle('dark-mode');
        let theme = 'light';
        if (document.body.classList.contains('dark-mode')) {
            theme = 'dark';
            themeBtn.innerHTML = '<i class="fa-solid fa-sun"></i>';
        } else {
            themeBtn.innerHTML = '<i class="fa-solid fa-moon"></i>';
        }
        localStorage.setItem('theme', theme);
    });

    const scrollBtn = document.getElementById('scrollToTopBtn');
    window.addEventListener('scroll', () => {
        if (window.scrollY > 300) scrollBtn.classList.add('show');
        else scrollBtn.classList.remove('show');
    });
    scrollBtn?.addEventListener('click', () => window.scrollTo({ top: 0, behavior: 'smooth' }));

    document.querySelectorAll('[data-page]').forEach(el => {
        el.addEventListener('click', (e) => {
            e.preventDefault();
            switchPage(el.getAttribute('data-page'));
        });
    });

    document.querySelectorAll('.filter-btn').forEach(btn => {
        btn.addEventListener('click', (e) => {
            document.querySelectorAll('.filter-btn').forEach(b => b.classList.remove('active'));
            e.target.classList.add('active');
            renderMenu(e.target.getAttribute('data-filter'));
        });
    });

    document.querySelectorAll('#starRating i').forEach(star => {
        star.addEventListener('click', function() {
            selectedStar = parseInt(this.getAttribute('data-value'));
            updateStarUI(selectedStar);
        });
    });

    document.getElementById('prevSlide')?.addEventListener('click', () => showSlide(currentSlide - 1));
    document.getElementById('nextSlide')?.addEventListener('click', () => showSlide(currentSlide + 1));

    const cartModal = document.getElementById('cartModal');
    document.getElementById('cartBtn')?.addEventListener('click', () => cartModal.classList.add('active'));
    document.getElementById('closeCart')?.addEventListener('click', () => cartModal.classList.remove('active'));

    document.getElementById('menuToggle')?.addEventListener('click', () => {
        document.getElementById('navLinks')?.classList.toggle('active');
    });

    document.getElementById('complaintForm')?.addEventListener('submit', (e) => {
        e.preventDefault();
        alert('Komplain/Pesan Anda telah dikirim ke email sekolahmail588@gmail.com dan WhatsApp 0881025467022.');
        e.target.reset();
    });

    document.getElementById('checkoutWaBtn')?.addEventListener('click', () => {
        if (cart.length === 0) return alert('Keranjang masih kosong!');
        const name = document.getElementById('buyerName').value.trim();
        const phone = document.getElementById('buyerPhone').value.trim();
        const payment = document.getElementById('paymentMethod').value;

        if (!name || !phone) return alert('Masukkan Nama dan Nomor WhatsApp!');

        let totalSum = cart.reduce((acc, i) => acc + (i.price * i.qty), 0);
        if (discountPercent > 0) totalSum = totalSum - (totalSum * discountPercent / 100);

        let itemsSummary = cart.map(i => `${i.qty}x ${i.name}`).join(', ');

        let orders = JSON.parse(localStorage.getItem('orders')) || [];
        const newOrder = {
            id: Math.floor(1000 + Math.random() * 9000),
            name, phone,
            items: itemsSummary,
            total: totalSum,
            payment,
            status: 'Menunggu Persetujuan'
        };
        orders.push(newOrder);
        localStorage.setItem('orders', JSON.stringify(orders));

        const waNumber = "62881025467022";
        const message = `Halo Kopi Senja Bojongsari, saya ingin memesan:%0A%0A*Nama:* ${name}%0A*No HP/WA:* ${phone}%0A*Pesanan:* ${itemsSummary}%0A*Total Harga:* ${formatRupiah(totalSum)}%0A*Metode Pembayaran:* ${payment}%0A*Diskon Voucher:* ${discountPercent}%25`;

        cart = [];
        discountPercent = 0;
        updateCartUI();
        cartModal.classList.remove('active');

        window.open(`https://wa.me/${waNumber}?text=${message}`, '_blank');
    });
});
