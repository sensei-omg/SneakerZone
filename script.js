(function(){
  'use strict';

  // === PRODUCTS DATA ===
  const products = [
    {id:1,brand:'Nike',name:'Air Force 1 \'07',price:12990,oldPrice:14990,rating:4.9,emoji:'👟',tag:'hot',
      images:[
        'https://images.unsplash.com/photo-1600185365483-26d7a4cc7519?w=600&h=600&fit=crop',
        'https://images.unsplash.com/photo-1600267185393-e158a98703de?w=600&h=600&fit=crop',
        'https://images.unsplash.com/photo-1595950653106-6c9ebd614d3a?w=600&h=600&fit=crop'
      ],
      desc:'Классические Nike Air Force 1 — легенда уличной моды. Кожаный верх, амортизация Air-Sole и узнаваемый силуэт.'},
    {id:2,brand:'Nike',name:'Air Max 90',price:14490,rating:4.8,emoji:'👟',tag:'new',
      images:[
        'https://images.unsplash.com/photo-1542291026-7eec264c27ff?w=600&h=600&fit=crop',
        'https://images.unsplash.com/photo-1605348532760-1633ecfd93e6?w=600&h=600&fit=crop',
        'https://images.unsplash.com/photo-1600267185393-e158a98703de?w=600&h=600&fit=crop'
      ],
      desc:'Nike Air Max 90 — культовая модель с видимой воздушной подушкой в пятке.'},
    {id:3,brand:'Nike',name:'Dunk Low Retro',price:13990,rating:4.9,emoji:'👟',
      images:[
        'https://images.unsplash.com/photo-1597045566677-8cf032ed6634?w=600&h=600&fit=crop',
        'https://images.unsplash.com/photo-1595950653106-6c9ebd614d3a?w=600&h=600&fit=crop',
        'https://images.unsplash.com/photo-1600185365483-26d7a4cc7519?w=600&h=600&fit=crop'
      ],
      desc:'Nike Dunk Low — возвращение легенды 80-х. Классический дизайн, удобная посадка.'},
    {id:4,brand:'Jordan',name:'Air Jordan 1 Mid',price:16990,rating:5.0,emoji:'👟',tag:'hot',
      images:[
        'https://images.unsplash.com/photo-1556906781-9a4124e0ab4b?w=600&h=600&fit=crop',
        'https://images.unsplash.com/photo-1584738766473-61c083514bf4?w=600&h=600&fit=crop',
        'https://images.unsplash.com/photo-1597045566677-8cf032ed6634?w=600&h=600&fit=crop'
      ],
      desc:'Air Jordan 1 Mid — культовый силуэт, который никогда не выходит из моды.'},
    {id:5,brand:'Adidas',name:'Yeezy Boost 350 V2',price:28990,oldPrice:32990,rating:4.9,emoji:'👟',
      images:[
        'https://images.unsplash.com/photo-1603808033192-08259f1f9ec8?w=600&h=600&fit=crop',
        'https://images.unsplash.com/photo-1605116680673-9df9e1af2bf3?w=600&h=600&fit=crop',
        'https://images.unsplash.com/photo-1603808033633-8f7eaf982e22?w=600&h=600&fit=crop'
      ],
      desc:'Yeezy Boost 350 V2 — одна из самых узнаваемых моделей. Технология Boost обеспечивает невероятный комфорт.'},
    {id:6,brand:'Adidas',name:'Samba OG',price:11990,rating:4.8,emoji:'👟',tag:'new',
      images:[
        'https://images.unsplash.com/photo-1638247014789-6342e15d9ef2?w=600&h=600&fit=crop',
        'https://images.unsplash.com/photo-1563190835-4c88cb2dee9b?w=600&h=600&fit=crop',
        'https://images.unsplash.com/photo-1603808033192-08259f1f9ec8?w=600&h=600&fit=crop'
      ],
      desc:'Adidas Samba OG — легендарная модель, которая не теряет актуальности уже несколько десятилетий.'},
    {id:7,brand:'Adidas',name:'Gazelle Bold',price:10990,rating:4.7,emoji:'👟',
      images:[
        'https://images.unsplash.com/photo-1603808033192-08259f1f9ec8?w=600&h=600&fit=crop',
        'https://images.unsplash.com/photo-1638247014789-6342e15d9ef2?w=600&h=600&fit=crop',
        'https://images.unsplash.com/photo-1563190835-4c88cb2dee9b?w=600&h=600&fit=crop'
      ],
      desc:'Adidas Gazelle — обновлённая версия культовой модели 90-х. Тонкий силуэт и мягкая замша.'},
    {id:8,brand:'Adidas',name:'Ultraboost Light',price:18990,rating:4.9,emoji:'👟',
      images:[
        'https://images.unsplash.com/photo-1603808033192-08259f1f9ec8?w=600&h=600&fit=crop',
        'https://images.unsplash.com/photo-1605116680673-9df9e1af2bf3?w=600&h=600&fit=crop',
        'https://images.unsplash.com/photo-1638247014789-6342e15d9ef2?w=600&h=600&fit=crop'
      ],
      desc:'Adidas Ultraboost Light — сверхлёгкие кроссовки с максимальной энергоотдачей.'},
    {id:9,brand:'New Balance',name:'550 White Green',price:15490,rating:4.9,emoji:'👟',tag:'hot',
      images:[
        'https://images.unsplash.com/photo-1595950653106-6c9ebd614d3a?w=600&h=600&fit=crop',
        'https://images.unsplash.com/photo-1600185365483-26d7a4cc7519?w=600&h=600&fit=crop',
        'https://images.unsplash.com/photo-1597045566677-8cf032ed6634?w=600&h=600&fit=crop'
      ],
      desc:'New Balance 550 — баскетбольная классика в повседневном стиле. Прочный кожаный верх.'},
    {id:10,brand:'New Balance',name:'2002R Protection',price:17990,rating:4.8,emoji:'👟',
      images:[
        'https://images.unsplash.com/photo-1595950653106-6c9ebd614d3a?w=600&h=600&fit=crop',
        'https://images.unsplash.com/photo-1600185365483-26d7a4cc7519?w=600&h=600&fit=crop',
        'https://images.unsplash.com/photo-1597045566677-8cf032ed6634?w=600&h=600&fit=crop'
      ],
      desc:'New Balance 2002R — модель с технологией N-ERGY для максимальной амортизации.'},
    {id:11,brand:'New Balance',name:'990v6 Made in USA',price:29990,rating:5.0,emoji:'👟',tag:'new',
      images:[
        'https://images.unsplash.com/photo-1595950653106-6c9ebd614d3a?w=600&h=600&fit=crop',
        'https://images.unsplash.com/photo-1600185365483-26d7a4cc7519?w=600&h=600&fit=crop',
        'https://images.unsplash.com/photo-1597045566677-8cf032ed6634?w=600&h=600&fit=crop'
      ],
      desc:'New Balance 990v6 — премиальная модель, изготовленная в США. ENCAP и FuelCell.'},
    {id:12,brand:'New Balance',name:'530 Silver',price:12490,rating:4.7,emoji:'👟',
      images:[
        'https://images.unsplash.com/photo-1595950653106-6c9ebd614d3a?w=600&h=600&fit=crop',
        'https://images.unsplash.com/photo-1600185365483-26d7a4cc7519?w=600&h=600&fit=crop',
        'https://images.unsplash.com/photo-1597045566677-8cf032ed6634?w=600&h=600&fit=crop'
      ],
      desc:'New Balance 530 — лёгкие и стильные кроссовки с амортизацией ENCAP.'},
    {id:13,brand:'Puma',name:'Suede Classic XXI',price:7990,oldPrice:9990,rating:4.6,emoji:'👟',
      images:[
        'https://images.unsplash.com/photo-1606107557195-0e29a4b5b4aa?w=600&h=600&fit=crop',
        'https://images.unsplash.com/photo-1587563871167-1ee9c731aefb?w=600&h=600&fit=crop',
        'https://images.unsplash.com/photo-1597045566677-8cf032ed6634?w=600&h=600&fit=crop'
      ],
      desc:'Puma Suede Classic — икона уличной моды с 1968 года. Мягкая замша и классический дизайн.'},
    {id:14,brand:'Puma',name:'RS-X Reinvention',price:11490,rating:4.7,emoji:'👟',
      images:[
        'https://images.unsplash.com/photo-1606107557195-0e29a4b5b4aa?w=600&h=600&fit=crop',
        'https://images.unsplash.com/photo-1587563871167-1ee9c731aefb?w=600&h=600&fit=crop',
        'https://images.unsplash.com/photo-1597045566677-8cf032ed6634?w=600&h=600&fit=crop'
      ],
      desc:'Puma RS-X — смелый дизайн и максимальный комфорт.'},
    {id:15,brand:'Puma',name:'Palermo',price:9990,rating:4.8,emoji:'👟',tag:'new',
      images:[
        'https://images.unsplash.com/photo-1606107557195-0e29a4b5b4aa?w=600&h=600&fit=crop',
        'https://images.unsplash.com/photo-1587563871167-1ee9c731aefb?w=600&h=600&fit=crop',
        'https://images.unsplash.com/photo-1597045566677-8cf032ed6634?w=600&h=600&fit=crop'
      ],
      desc:'Puma Palermo — новые кроссовки в стиле 70-х. Тонкий силуэт, мягкая кожа.'},
    {id:16,brand:'Asics',name:'Gel-1130 White',price:13490,rating:4.8,emoji:'👟',
      images:[
        'https://images.unsplash.com/photo-1605348532760-1633ecfd93e6?w=600&h=600&fit=crop',
        'https://images.unsplash.com/photo-1600267185393-e158a98703de?w=600&h=600&fit=crop',
        'https://images.unsplash.com/photo-1597045566677-8cf032ed6634?w=600&h=600&fit=crop'
      ],
      desc:'ASICS Gel-1130 — классика японского бренда с технологией GEL.'},
    {id:17,brand:'Asics',name:'Gel-Kayano 14',price:16990,rating:4.9,emoji:'👟',tag:'hot',
      images:[
        'https://images.unsplash.com/photo-1605348532760-1633ecfd93e6?w=600&h=600&fit=crop',
        'https://images.unsplash.com/photo-1600267185393-e158a98703de?w=600&h=600&fit=crop',
        'https://images.unsplash.com/photo-1597045566677-8cf032ed6634?w=600&h=600&fit=crop'
      ],
      desc:'ASICS Gel-Kayano 14 — легендарная модель с технологией GEL для максимальной амортизации.'},
    {id:18,brand:'Jordan',name:'Air Jordan 4 Retro',price:22990,rating:5.0,emoji:'👟',
      images:[
        'https://images.unsplash.com/photo-1556906781-9a4124e0ab4b?w=600&h=600&fit=crop',
        'https://images.unsplash.com/photo-1584738766473-61c083514bf4?w=600&h=600&fit=crop',
        'https://images.unsplash.com/photo-1597045566677-8cf032ed6634?w=600&h=600&fit=crop'
      ],
      desc:'Air Jordan 4 Retro — культовая модель с узнаваемыми деталями.'},
    {id:19,brand:'Nike',name:'V2K Run',price:13490,rating:4.7,emoji:'👟',
      images:[
        'https://images.unsplash.com/photo-1600185365483-26d7a4cc7519?w=600&h=600&fit=crop',
        'https://images.unsplash.com/photo-1600267185393-e158a98703de?w=600&h=600&fit=crop',
        'https://images.unsplash.com/photo-1595950653106-6c9ebd614d3a?w=600&h=600&fit=crop'
      ],
      desc:'Nike V2K Run — современный взгляд на беговую классику. Лёгкие, дышащие.'},
    {id:20,brand:'Adidas',name:'Campus 00s',price:10490,rating:4.8,emoji:'👟',tag:'new',
      images:[
        'https://images.unsplash.com/photo-1603808033192-08259f1f9ec8?w=600&h=600&fit=crop',
        'https://images.unsplash.com/photo-1638247014789-6342e15d9ef2?w=600&h=600&fit=crop',
        'https://images.unsplash.com/photo-1563190835-4c88cb2dee9b?w=600&h=600&fit=crop'
      ],
      desc:'Adidas Campus 00s — обновлённая версия культовых кроссовок. Мягкая замша.'}
  ];

  // === STATE ===
  let currentFilter = 'all';
  let currentSort = 'default';
  let cart = [];
  let favorites = [];

  try {
    const savedCart = localStorage.getItem('sz_cart');
    if (savedCart) cart = JSON.parse(savedCart);
  } catch (e) { cart = []; }
  try {
    const savedFavs = localStorage.getItem('sz_favs');
    if (savedFavs) favorites = JSON.parse(savedFavs);
  } catch (e) { favorites = []; }

  // === DOM ELEMENTS ===
  const grid = document.getElementById('productsGrid');
  const filterTabs = document.getElementById('filterTabs');
  const sortSelect = document.getElementById('sortSelect');
  const cartBtn = document.getElementById('cartBtn');
  const favBtn = document.getElementById('favBtn');
  const searchBtn = document.getElementById('searchBtn');
  const cartCountEl = document.getElementById('cartCount');
  const favCountEl = document.getElementById('favCount');
  const cartItemsEl = document.getElementById('cartItems');
  const cartTotalEl = document.getElementById('cartTotal');
  const cartFootEl = document.getElementById('cartFoot');
  const cartClearBtn = document.getElementById('cartClear');
  const cartCheckoutBtn = document.getElementById('cartCheckout');
  const favItemsEl = document.getElementById('favItems');
  const favFootEl = document.getElementById('favFoot');
  const favClearBtn = document.getElementById('favClear');
  const favGoCatalogBtn = document.getElementById('favGoCatalog');
  const overlay = document.getElementById('overlay');
  const searchDrawer = document.getElementById('searchDrawer');
  const favDrawer = document.getElementById('favDrawer');
  const cartDrawer = document.getElementById('cartDrawer');
  const searchInput = document.getElementById('searchInput');
  const searchClearBtn = document.getElementById('searchClear');
  const searchContent = document.getElementById('searchContent');
  const toast = document.getElementById('toast');
  const toastText = document.getElementById('toastText');
  const subscribeForm = document.getElementById('subscribeForm');

  // === PRODUCT MODAL ===
  let currentProductId = null;
  let currentSlideIndex = 0;

  function openProductModal(id) {
    const product = products.find(p => p.id === id);
    if (!product) return;
    currentProductId = id;
    currentSlideIndex = 0;

    const modal = document.createElement('div');
    modal.className = 'product-modal';
    modal.id = 'productModal';
    modal.innerHTML = `
      <div class="product-modal-overlay" data-close-modal></div>
      <div class="product-modal-content">
        <button class="product-modal-close" data-close-modal>✕</button>
        <div class="product-modal-gallery">
          <button class="modal-arrow modal-arrow-left" data-slide="prev">‹</button>
          <div class="modal-slides">
            ${product.images.map((img, i) => `
              <div class="modal-slide ${i === 0 ? 'active' : ''}" data-slide="${i}">
                <img src="${img}" alt="${product.name}">
              </div>
            `).join('')}
          </div>
          <button class="modal-arrow modal-arrow-right" data-slide="next">›</button>
          <div class="modal-dots">
            ${product.images.map((_, i) => `
              <span class="modal-dot ${i === 0 ? 'active' : ''}" data-dot="${i}"></span>
            `).join('')}
          </div>
        </div>
        <div class="product-modal-info">
          <div class="product-modal-brand">${product.brand}</div>
          <h2>${product.name}</h2>
          <div class="product-modal-rating">${'★'.repeat(Math.floor(product.rating))} ${product.rating}</div>
          <div class="product-modal-price">
            ${product.price.toLocaleString('ru-RU')} ₽
            ${product.oldPrice ? `<span class="old">${product.oldPrice.toLocaleString('ru-RU')} ₽</span>` : ''}
          </div>
          <p class="product-modal-desc">${product.desc}</p>
          <div class="product-modal-sizes">
            <span>Размеры:</span>
            <div class="size-options">
              ${[39, 40, 41, 42, 43, 44].map(s => `
                <button class="size-option" data-size="${s}">${s}</button>
              `).join('')}
            </div>
          </div>
          <div class="product-modal-actions">
            <button class="btn btn-primary modal-cart-btn" data-add-cart="${product.id}">В корзину</button>
            <button class="btn modal-fav-btn ${favorites.includes(product.id) ? 'active' : ''}" data-fav-toggle="${product.id}">
              ${favorites.includes(product.id) ? '♥' : '♡'} Избранное
            </button>
          </div>
        </div>
      </div>
    `;

    document.body.appendChild(modal);
    document.body.style.overflow = 'hidden';

    modal.querySelectorAll('[data-close-modal]').forEach(el => {
      el.addEventListener('click', closeProductModal);
    });

    const leftArrow = modal.querySelector('.modal-arrow-left');
    const rightArrow = modal.querySelector('.modal-arrow-right');
    leftArrow.addEventListener('click', () => changeSlide(-1));
    rightArrow.addEventListener('click', () => changeSlide(1));

    modal.querySelectorAll('.modal-dot').forEach(dot => {
      dot.addEventListener('click', function() {
        const idx = parseInt(this.dataset.dot);
        goToSlide(idx);
      });
    });

    modal.querySelectorAll('.size-option').forEach(btn => {
      btn.addEventListener('click', function() {
        modal.querySelectorAll('.size-option').forEach(b => b.classList.remove('selected'));
        this.classList.add('selected');
      });
    });

    modal.querySelector('.modal-fav-btn').addEventListener('click', function() {
      const id = parseInt(this.dataset.favToggle);
      const prod = products.find(p => p.id === id);
      const isFav = favorites.includes(id);
      if (isFav) {
        favorites = favorites.filter(x => x !== id);
        this.textContent = '♡ Избранное';
        this.classList.remove('active');
        showToast('Удалено из избранного');
      } else {
        favorites.push(id);
        this.textContent = '♥ Избранное';
        this.classList.add('active');
        showToast(prod.name + ' в избранном ♥');
      }
      saveFavs();
      updateFavUI();
      renderProducts();
    });

    modal.querySelector('.modal-cart-btn').addEventListener('click', function() {
      const id = parseInt(this.dataset.addCart);
      addToCart(id);
    });

    document.addEventListener('keydown', modalKeyHandler);
  }

  function closeProductModal() {
    const modal = document.getElementById('productModal');
    if (modal) {
      modal.remove();
      document.body.style.overflow = '';
    }
    document.removeEventListener('keydown', modalKeyHandler);
  }

  function modalKeyHandler(e) {
    if (e.key === 'Escape') closeProductModal();
    if (e.key === 'ArrowLeft') changeSlide(-1);
    if (e.key === 'ArrowRight') changeSlide(1);
  }

  function changeSlide(direction) {
    const modal = document.getElementById('productModal');
    if (!modal) return;
    const product = products.find(p => p.id === currentProductId);
    if (!product) return;
    const total = product.images.length;
    currentSlideIndex = (currentSlideIndex + direction + total) % total;
    goToSlide(currentSlideIndex);
  }

  function goToSlide(index) {
    const modal = document.getElementById('productModal');
    if (!modal) return;
    const slides = modal.querySelectorAll('.modal-slide');
    const dots = modal.querySelectorAll('.modal-dot');
    slides.forEach((s, i) => s.classList.toggle('active', i === index));
    dots.forEach((d, i) => d.classList.toggle('active', i === index));
  }

  // === DRAWER HELPERS ===
  const drawers = { search: searchDrawer, fav: favDrawer, cart: cartDrawer };
  let activeDrawer = null;

  function openDrawer(name) {
    closeAllDrawers();
    drawers[name].classList.add('open');
    overlay.classList.add('open');
    activeDrawer = name;
    document.body.style.overflow = 'hidden';
    if (name === 'search') {
      setTimeout(() => searchInput.focus(), 300);
    }
  }
  function closeAllDrawers() {
    Object.values(drawers).forEach(d => d.classList.remove('open'));
    overlay.classList.remove('open');
    activeDrawer = null;
    document.body.style.overflow = '';
  }

  cartBtn.addEventListener('click', () => { renderCart(); openDrawer('cart'); });
  favBtn.addEventListener('click', () => { renderFavorites(); openDrawer('fav'); });
  searchBtn.addEventListener('click', () => { renderSearchResults(''); openDrawer('search'); });
  overlay.addEventListener('click', closeAllDrawers);
  document.querySelectorAll('[data-close]').forEach(b => b.addEventListener('click', closeAllDrawers));
  document.addEventListener('keydown', e => {
    if (e.key === 'Escape' && !document.getElementById('productModal')) closeAllDrawers();
    if ((e.ctrlKey || e.metaKey) && e.key === 'k') {
      e.preventDefault();
      renderSearchResults('');
      openDrawer('search');
    }
  });

  // === TOAST ===
  let toastTimer;
  function showToast(msg) {
    toastText.textContent = msg;
    toast.classList.add('show');
    clearTimeout(toastTimer);
    toastTimer = setTimeout(() => toast.classList.remove('show'), 2500);
  }

  // === SAVE ===
  function saveCart() {
    try { localStorage.setItem('sz_cart', JSON.stringify(cart)); } catch (e) {}
  }
  function saveFavs() {
    try { localStorage.setItem('sz_favs', JSON.stringify(favorites)); } catch (e) {}
  }

  // === CART ===
  function addToCart(id) {
    const product = products.find(p => p.id === id);
    if (!product) return;
    const existing = cart.find(i => i.id === id);
    if (existing) {
      existing.qty++;
    } else {
      cart.push({
        id: product.id,
        brand: product.brand,
        name: product.name,
        price: product.price,
        emoji: product.emoji,
        image: product.images[0],
        qty: 1
      });
    }
    saveCart();
    updateCartUI();
    showToast(product.name + ' добавлен в корзину');
  }

  function removeFromCart(id) {
    cart = cart.filter(i => i.id !== id);
    saveCart();
    updateCartUI();
    renderCart();
  }

  function updateCartUI() {
    const count = cart.reduce((s, i) => s + i.qty, 0);
    const total = cart.reduce((s, i) => s + i.price * i.qty, 0);
    cartCountEl.textContent = count;
    if (count > 0) {
      cartCountEl.classList.add('show');
      cartCountEl.classList.remove('bump');
      void cartCountEl.offsetWidth;
      cartCountEl.classList.add('bump');
    } else {
      cartCountEl.classList.remove('show');
    }
    cartTotalEl.textContent = total.toLocaleString('ru-RU') + ' ₽';
    cartFootEl.style.display = cart.length ? 'block' : 'none';
  }

  function renderCart() {
    if (!cart.length) {
      cartItemsEl.innerHTML = '<div class="drawer-empty"><div class="ico">🛒</div><div>Корзина пуста</div><div style="font-size:13px;margin-top:8px">Добавьте товары из каталога</div></div>';
      return;
    }
    cartItemsEl.innerHTML = cart.map(i => `
      <div class="list-item" data-cart-id="${i.id}">
        <div class="list-item-img" style="background-image:url('${i.image}')"></div>
        <div class="list-item-info">
          <div class="list-item-brand">${i.brand}</div>
          <div class="list-item-name">${i.name}</div>
          <div class="list-item-price">${(i.price * i.qty).toLocaleString('ru-RU')} ₽</div>
          <div class="list-item-qty">${i.qty} шт. × ${i.price.toLocaleString('ru-RU')} ₽</div>
          <button class="list-item-remove" data-remove-cart="${i.id}">Удалить</button>
        </div>
      </div>
    `).join('');
  }

  cartItemsEl.addEventListener('click', e => {
    const removeBtn = e.target.closest('[data-remove-cart]');
    if (removeBtn) {
      const id = parseInt(removeBtn.getAttribute('data-remove-cart'), 10);
      removeFromCart(id);
    }
  });

  cartClearBtn.addEventListener('click', () => {
    cart = [];
    saveCart();
    updateCartUI();
    renderCart();
    showToast('Корзина очищена');
  });

  cartCheckoutBtn.addEventListener('click', () => {
    if (!cart.length) return;
    showToast('Заказ оформлен! Мы свяжемся с вами ✓');
    cart = [];
    saveCart();
    updateCartUI();
    renderCart();
    setTimeout(closeAllDrawers, 800);
  });

  // === FAVORITES ===
  function updateFavUI() {
    favCountEl.textContent = favorites.length;
    if (favorites.length > 0) {
      favCountEl.classList.add('show');
    } else {
      favCountEl.classList.remove('show');
    }
  }

  function toggleFav(id, btnEl) {
    const idx = favorites.indexOf(id);
    const product = products.find(p => p.id === id);
    if (idx > -1) {
      favorites.splice(idx, 1);
      if (btnEl) {
        btnEl.classList.remove('active');
        btnEl.textContent = '♡';
      }
      showToast('Удалено из избранного');
    } else {
      favorites.push(id);
      if (btnEl) {
        btnEl.classList.add('active', 'pop');
        btnEl.textContent = '♥';
        setTimeout(() => btnEl.classList.remove('pop'), 400);
      }
      showToast(product.name + ' в избранном ♥');
    }
    saveFavs();
    updateFavUI();
  }

  function renderFavorites() {
    if (!favorites.length) {
      favItemsEl.innerHTML = '<div class="drawer-empty"><div class="ico">♡</div><div>В избранном пока пусто</div><div style="font-size:13px;margin-top:8px">Нажмите ♡ на карточке товара</div></div>';
      favFootEl.style.display = 'none';
      return;
    }
    favFootEl.style.display = 'block';
    favItemsEl.innerHTML = favorites.map(id => {
      const p = products.find(x => x.id === id);
      if (!p) return '';
      return `
        <div class="list-item">
          <div class="list-item-img" style="background-image:url('${p.images[0]}')"></div>
          <div class="list-item-info">
            <div class="list-item-brand">${p.brand}</div>
            <div class="list-item-name">${p.name}</div>
            <div class="list-item-price">${p.price.toLocaleString('ru-RU')} ₽</div>
            <button class="list-item-remove" data-remove-fav="${p.id}">Удалить</button>
          </div>
          <div class="list-item-actions">
            <button class="list-item-icon-btn" data-add-cart="${p.id}" title="В корзину">
              <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><circle cx="8" cy="21" r="1"/><circle cx="19" cy="21" r="1"/><path d="M2.05 2.05h2l2.66 12.42a2 2 0 0 0 2 1.58h9.78a2 2 0 0 0 1.95-1.57l1.65-7.43H5.12"/></svg>
            </button>
            <button class="list-item-icon-btn" data-open-product="${p.id}" title="Открыть">
              <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round"><path d="M18 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h6"/><polyline points="15 3 21 3 21 9"/><line x1="10" y1="14" x2="21" y2="3"/></svg>
            </button>
          </div>
        </div>
      `;
    }).join('');
  }

  favItemsEl.addEventListener('click', e => {
    const removeBtn = e.target.closest('[data-remove-fav]');
    if (removeBtn) {
      const id = parseInt(removeBtn.getAttribute('data-remove-fav'), 10);
      favorites = favorites.filter(x => x !== id);
      saveFavs();
      updateFavUI();
      renderFavorites();
      renderProducts();
      showToast('Удалено из избранного');
      return;
    }
    const addBtn = e.target.closest('[data-add-cart]');
    if (addBtn) {
      const id = parseInt(addBtn.getAttribute('data-add-cart'), 10);
      addToCart(id);
      return;
    }
    const openBtn = e.target.closest('[data-open-product]');
    if (openBtn) {
      const id = parseInt(openBtn.getAttribute('data-open-product'), 10);
      closeAllDrawers();
      setTimeout(() => openProductModal(id), 400);
    }
  });

  favClearBtn.addEventListener('click', () => {
    favorites = [];
    saveFavs();
    updateFavUI();
    renderFavorites();
    renderProducts();
    showToast('Избранное очищено');
  });

  favGoCatalogBtn.addEventListener('click', () => {
    closeAllDrawers();
    setTimeout(() => {
      document.getElementById('catalog').scrollIntoView({ behavior: 'smooth' });
    }, 300);
  });

  // === PRODUCTS ===
  function renderProducts() {
    let list = currentFilter === 'all' ? [...products] : products.filter(p => p.brand === currentFilter);
    if (currentSort === 'price-asc') list.sort((a, b) => a.price - b.price);
    else if (currentSort === 'price-desc') list.sort((a, b) => b.price - a.price);
    else if (currentSort === 'rating') list.sort((a, b) => b.rating - a.rating);

    grid.innerHTML = list.map(p => {
      const isFav = favorites.includes(p.id);
      return `
        <article class="product reveal visible" data-id="${p.id}">
          <div class="product-img">
            ${p.tag ? `<span class="product-tag ${p.tag}">${p.tag === 'new' ? 'New' : 'Hot'}</span>` : ''}
            <button class="product-fav ${isFav ? 'active' : ''}" data-fav-toggle="${p.id}" aria-label="В избранное">${isFav ? '♥' : '♡'}</button>
            <img src="${p.images[0]}" alt="${p.name}">
          </div>
          <div class="product-info">
            <div class="product-brand">${p.brand}</div>
            <div class="product-name">${p.name}</div>
            <div class="rating">
              <span class="stars">${'★'.repeat(Math.floor(p.rating))}</span>
              <span>${p.rating}</span>
            </div>
            <div class="product-bottom">
              <div class="product-price">
                ${p.price.toLocaleString('ru-RU')} ₽
                ${p.oldPrice ? `<span class="old">${p.oldPrice.toLocaleString('ru-RU')} ₽</span>` : ''}
              </div>
              <button class="add-btn" data-add-cart="${p.id}" aria-label="В корзину">
                <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5" stroke-linecap="round"><path d="M12 5v14M5 12h14"/></svg>
              </button>
            </div>
          </div>
        </article>
      `;
    }).join('');
  }

  grid.addEventListener('click', e => {
    const favButton = e.target.closest('[data-fav-toggle]');
    if (favButton) {
      e.stopPropagation();
      const id = parseInt(favButton.getAttribute('data-fav-toggle'), 10);
      toggleFav(id, favButton);
      return;
    }
    const addBtn = e.target.closest('[data-add-cart]');
    if (addBtn) {
      e.stopPropagation();
      const id = parseInt(addBtn.getAttribute('data-add-cart'), 10);
      addToCart(id);
      return;
    }
    const card = e.target.closest('.product');
    if (card) {
      const id = parseInt(card.dataset.id, 10);
      openProductModal(id);
    }
  });

  // === FILTERS ===
  filterTabs.addEventListener('click', e => {
    const tab = e.target.closest('.filter-tab');
    if (!tab) return;
    filterTabs.querySelectorAll('.filter-tab').forEach(t => t.classList.remove('active'));
    tab.classList.add('active');
    currentFilter = tab.getAttribute('data-filter');
    renderProducts();
  });
  sortSelect.addEventListener('change', e => {
    currentSort = e.target.value;
    renderProducts();
  });

  // === SEARCH ===
  function renderSearchResults(query) {
    const q = (query || '').trim().toLowerCase();
    if (!q) {
      searchContent.innerHTML = `
        <div class="search-popular">
          <h4>Популярные запросы</h4>
          <div class="popular-tags">
            <button class="popular-tag" data-q="Air Force">Air Force</button>
            <button class="popular-tag" data-q="Jordan">Jordan</button>
            <button class="popular-tag" data-q="Yeezy">Yeezy</button>
            <button class="popular-tag" data-q="Dunk">Dunk</button>
            <button class="popular-tag" data-q="New Balance 550">NB 550</button>
            <button class="popular-tag" data-q="Samba">Samba</button>
            <button class="popular-tag" data-q="Gel">Gel</button>
          </div>
        </div>
      `;
      return;
    }
    const results = products.filter(p =>
      p.name.toLowerCase().includes(q) ||
      p.brand.toLowerCase().includes(q)
    );
    if (!results.length) {
      searchContent.innerHTML = '<div class="drawer-empty"><div class="ico">🔍</div><div>Ничего не найдено</div><div style="font-size:13px;margin-top:8px">Попробуйте другой запрос</div></div>';
      return;
    }
    searchContent.innerHTML = `
      <div class="search-hint">Найдено: <strong>${results.length}</strong></div>
      <div class="search-results">
        ${results.map(p => `
          <div class="search-item" data-go-product="${p.id}">
            <div class="search-item-img" style="background-image:url('${p.images[0]}')"></div>
            <div class="search-item-info">
              <div class="search-item-brand">${p.brand}</div>
              <div class="search-item-name">${p.name}</div>
              <div class="search-item-price">${p.price.toLocaleString('ru-RU')} ₽</div>
            </div>
            <button class="search-item-add" data-add-cart="${p.id}" title="В корзину">
              <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5" stroke-linecap="round"><path d="M12 5v14M5 12h14"/></svg>
            </button>
          </div>
        `).join('')}
      </div>
    `;
  }

  searchContent.addEventListener('click', e => {
    const popularTag = e.target.closest('.popular-tag');
    if (popularTag) {
      searchInput.value = popularTag.getAttribute('data-q');
      searchClearBtn.classList.add('show');
      renderSearchResults(searchInput.value);
      return;
    }
    const addBtn = e.target.closest('[data-add-cart]');
    if (addBtn) {
      e.stopPropagation();
      const id = parseInt(addBtn.getAttribute('data-add-cart'), 10);
      addToCart(id);
      return;
    }
    const goItem = e.target.closest('[data-go-product]');
    if (goItem) {
      const id = parseInt(goItem.getAttribute('data-go-product'), 10);
      openProductModal(id);
    }
  });

  searchInput.addEventListener('input', e => {
    const v = e.target.value;
    searchClearBtn.classList.toggle('show', v.length > 0);
    renderSearchResults(v);
  });
  searchClearBtn.addEventListener('click', () => {
    searchInput.value = '';
    searchClearBtn.classList.remove('show');
    renderSearchResults('');
    searchInput.focus();
  });

  // === SUBSCRIBE ===
  subscribeForm.addEventListener('submit', e => {
    e.preventDefault();
    showToast('Вы подписаны на рассылку ✓');
    subscribeForm.reset();
  });

  // === REVEAL ON SCROLL ===
  const io = new IntersectionObserver(entries => {
    entries.forEach(e => {
      if (e.isIntersecting) {
        e.target.classList.add('visible');
        io.unobserve(e.target);
      }
    });
  }, { threshold: .1 });
  document.querySelectorAll('.reveal').forEach(el => io.observe(el));

  // === INIT ===
  renderProducts();
  updateCartUI();
  updateFavUI();

})();