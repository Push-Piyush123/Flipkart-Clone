let cart = JSON.parse(localStorage.getItem('fk_cart') || '[]');
let wishlist = new Set(JSON.parse(localStorage.getItem('fk_wish') || '[]'));
let currentModal = null;
let searchResultsFiltered = [];

$(function () {
  buildCategoryNav();
  buildCarousel();
  buildDeals();
  buildOfferBanners();
  buildGrid('electronicsGrid', PRODUCTS.filter(p => p.cat === 'Electronics'), 6);
  buildGrid('fashionGrid', PRODUCTS.filter(p => p.cat === 'Fashion'), 6);
  buildGrid('homeGrid', PRODUCTS.filter(p => p.cat === 'Home'), 6);
  updateCartBadge();
  startTimer();
  setupSearch();
  buildRatingFilters();
});

function formatPrice(value) {
  return 'Rs. ' + value.toLocaleString('en-IN');
}

function discountFor(product) {
  return Math.round((1 - product.price / product.orig) * 100);
}

function buildCategoryNav() {
  const nav = $('#catNav');
  nav.empty();
  CATEGORIES.forEach(category => {
    nav.append(`
      <div class="cat-item" onclick="viewAll('${category.name}')">
        <img src="${category.img}" alt="${category.name}" onerror="this.src='https://via.placeholder.com/64'"/>
        <span>${category.name}</span>
      </div>`);
  });
}

function buildCarousel() {
  const indicators = $('#carouselIndicators');
  const slides = $('#carouselSlides');
  indicators.empty();
  slides.empty();

  SLIDES.forEach((slide, index) => {
    indicators.append(`<button type="button" data-bs-target="#heroCarousel" data-bs-slide-to="${index}" ${index === 0 ? 'class="active"' : ''}></button>`);
    slides.append(`
      <div class="carousel-item ${index === 0 ? 'active' : ''}">
        <div class="hero-slide">
          <img src="${slide.bg}" alt="${slide.title}" onerror="this.style.display='none'" />
          <div class="slide-overlay">
            <span class="slide-tag">${slide.tag}</span>
            <div class="slide-title">${slide.title}</div>
            <div class="slide-sub">${slide.sub}</div>
            <a class="slide-btn" onclick="viewAll('${slide.cat}')">${slide.btn}</a>
          </div>
        </div>
      </div>`);
  });
}

function startTimer() {
  let end = new Date();
  end.setHours(23, 59, 59, 0);

  function tick() {
    let diff = end - new Date();
    if (diff < 0) {
      end = new Date();
      end.setDate(end.getDate() + 1);
      end.setHours(23, 59, 59, 0);
      diff = end - new Date();
    }

    $('#th').text(String(Math.floor(diff / 3600000)).padStart(2, '0'));
    $('#tm').text(String(Math.floor((diff % 3600000) / 60000)).padStart(2, '0'));
    $('#ts').text(String(Math.floor((diff % 60000) / 1000)).padStart(2, '0'));
  }

  tick();
  setInterval(tick, 1000);
}

function buildDeals() {
  const deals = [...PRODUCTS].sort(() => Math.random() - 0.5).slice(0, 10);
  $('#dealScroll').empty();
  deals.forEach(product => $('#dealScroll').append(productCardHTML(product)));
}

function buildOfferBanners() {
  const wrap = $('#offerBanners');
  wrap.empty();
  OFFER_BANNERS.forEach(banner => {
    wrap.append(`
      <div class="offer-banner" onclick="viewAll('${banner.cat}')" style="background:${banner.gradient}">
        <i class="bi ${banner.icon} offer-banner-icon"></i>
        <div class="offer-banner-title">${banner.title}</div>
        <div class="offer-banner-sub">${banner.sub}</div>
        <div class="offer-banner-cta">Shop Now</div>
      </div>`);
  });
}

function productCardHTML(product) {
  const disc = discountFor(product);
  const inWish = wishlist.has(product.id);

  return `
    <div class="prod-card" id="pc-${product.id}">
      <div class="prod-img-wrap" onclick="openModal(${product.id})">
        <img src="${product.img}" alt="${product.name}" loading="lazy" onerror="this.src='https://via.placeholder.com/200x200?text=Product'"/>
        <span class="prod-badge">${disc}% off</span>
        <button class="wishlist-btn ${inWish ? 'active' : ''}" onclick="event.stopPropagation(); toggleWish(${product.id}, this)">
          <i class="bi bi-heart${inWish ? '-fill' : ''}"></i>
        </button>
      </div>
      <div class="prod-info" onclick="openModal(${product.id})">
        <div class="prod-name">${product.name}</div>
        <div class="prod-rating">
          <span class="rating-badge"><i class="bi bi-star-fill" style="font-size:9px"></i> ${product.rating}</span>
          <span class="rating-count">(${product.reviews.toLocaleString('en-IN')})</span>
        </div>
        <div class="prod-price">
          <span class="price-curr">${formatPrice(product.price)}</span>
          <span class="price-orig">${formatPrice(product.orig)}</span>
          <span class="price-disc">${disc}% off</span>
        </div>
      </div>
      <button class="prod-add-btn" onclick="addToCart(${product.id})"><i class="bi bi-cart-plus me-1"></i>Add to Cart</button>
    </div>`;
}

function buildGrid(containerId, products, limit) {
  const container = $(`#${containerId}`);
  container.empty();
  products.slice(0, limit).forEach(product => container.append(productCardHTML(product)));
}

function setupSearch() {
  const input = $('#searchInput');
  const box = $('#searchBox');
  const suggestions = $('#searchSuggestions');

  input.on('input', function () {
    const query = this.value.trim().toLowerCase();
    suggestions.empty();

    if (!query) {
      box.removeClass('active');
      return;
    }

    const matches = PRODUCTS.filter(product =>
      product.name.toLowerCase().includes(query) ||
      product.cat.toLowerCase().includes(query) ||
      product.subcat.toLowerCase().includes(query)
    ).slice(0, 6);

    if (!matches.length) {
      box.removeClass('active');
      return;
    }

    matches.forEach(product => {
      const escaped = product.name.replace(/'/g, "\\'");
      suggestions.append(`<li onclick="selectSuggestion('${escaped}')"><i class="bi bi-search text-muted"></i>${product.name}</li>`);
    });
    box.addClass('active');
  });

  input.on('keydown', event => {
    if (event.key === 'Enter') runSearch();
  });

  $(document).on('click', event => {
    if (!$(event.target).closest('#searchBox').length) box.removeClass('active');
  });
}

function selectSuggestion(name) {
  $('#searchInput').val(name);
  $('#searchBox').removeClass('active');
  runSearch();
}

function runSearch() {
  const query = $('#searchInput').val().trim().toLowerCase();
  if (!query) return;

  const results = PRODUCTS.filter(product =>
    product.name.toLowerCase().includes(query) ||
    product.cat.toLowerCase().includes(query) ||
    product.subcat.toLowerCase().includes(query)
  );
  showSearchPage(results, query);
}

function viewAll(category) {
  $('.cat-item').removeClass('active');
  $('.cat-item').filter(function () {
    return $(this).text().trim() === category;
  }).addClass('active');

  const results = category === 'deals'
    ? [...PRODUCTS].sort(() => Math.random() - 0.5)
    : PRODUCTS.filter(product =>
        product.cat === category ||
        product.subcat === category ||
        product.name.toLowerCase().includes(category.toLowerCase())
      );

  showSearchPage(results, category);
}

function showSearchPage(results, query) {
  searchResultsFiltered = results;
  $('#home-page').hide();
  $('#search-page').show();
  $('#searchResultTitle').text(`${results.length} results for "${query}"`);
  $('#priceRange').val(200000);
  $('#priceLabel').text(formatPrice(200000));
  $('#sortSelect').val('rel');
  populateBrandFilters(results);
  renderSearchResults(results);
}

function showHome() {
  $('#search-page').hide();
  $('#home-page').show();
  $('.cat-item').removeClass('active');
  $('#searchInput').val('');
}

function renderSearchResults(products) {
  const grid = $('#searchResults');
  grid.empty();

  if (!products.length) {
    grid.html('<div class="col-12 text-center py-5 text-muted"><i class="bi bi-search fs-1"></i><p class="mt-3">No products found</p></div>');
    return;
  }

  products.forEach(product => grid.append(productCardHTML(product)));
}

function applySortFilter() {
  const sort = $('#sortSelect').val();
  const sorted = [...searchResultsFiltered];

  if (sort === 'lh') sorted.sort((a, b) => a.price - b.price);
  else if (sort === 'hl') sorted.sort((a, b) => b.price - a.price);
  else if (sort === 'rat') sorted.sort((a, b) => b.rating - a.rating);
  else if (sort === 'disc') sorted.sort((a, b) => discountFor(b) - discountFor(a));

  renderSearchResults(sorted);
}

function filterByPrice(value) {
  const maxPrice = parseInt(value, 10);
  $('#priceLabel').text(formatPrice(maxPrice));
  renderSearchResults(searchResultsFiltered.filter(product => product.price <= maxPrice));
}

function buildRatingFilters() {
  const wrap = $('#ratingFilters');
  wrap.empty();
  [4, 3, 2, 1].forEach(rating => {
    wrap.append(`
      <div class="form-check">
        <input class="form-check-input" type="checkbox" id="rat${rating}" onchange="applyRatingFilter()"/>
        <label class="form-check-label" for="rat${rating}">${rating} stars & above</label>
      </div>`);
  });
}

function applyRatingFilter() {
  const checked = [4, 3, 2, 1].filter(rating => $(`#rat${rating}`).prop('checked'));
  if (!checked.length) {
    renderSearchResults(searchResultsFiltered);
    return;
  }

  const minRating = Math.min(...checked);
  renderSearchResults(searchResultsFiltered.filter(product => product.rating >= minRating));
}

function populateBrandFilters(products) {
  const brands = [...new Set(products.map(product => product.subcat))];
  const wrap = $('#brandFilters');
  wrap.empty();
  brands.forEach(brand => {
    wrap.append(`<div class="form-check"><input class="form-check-input" type="checkbox" id="br-${brand}"/><label class="form-check-label" for="br-${brand}">${brand}</label></div>`);
  });
}

function openModal(id) {
  const product = PRODUCTS.find(item => item.id === id);
  if (!product) return;

  currentModal = product;
  $('#modalImg').attr('src', product.img);
  $('#modalTitle').text(product.name);
  $('#modalRating').html(`<i class="bi bi-star-fill" style="font-size:10px"></i> ${product.rating}`);
  $('#modalReviews').text(`(${product.reviews.toLocaleString('en-IN')} ratings)`);
  $('#modalPrice').text(formatPrice(product.price));
  $('#modalOrig').text(formatPrice(product.orig));
  $('#modalDisc').text(discountFor(product) + '% off');

  const specs = Object.entries(product.specs || {}).map(([key, value]) =>
    `<div class="spec-row"><span class="spec-key">${key}</span><span>${value}</span></div>`
  ).join('');
  $('#modalSpecs').html(specs);

  new bootstrap.Modal('#productModal').show();
}

function addToCartFromModal() {
  if (currentModal) addToCart(currentModal.id);
}

function buyNow() {
  if (!currentModal) return;
  addToCart(currentModal.id);
  bootstrap.Modal.getInstance('#productModal')?.hide();
  setTimeout(() => {
    toggleCart();
    showToast('Proceeding to checkout...');
  }, 300);
}

function addToCart(id) {
  const product = PRODUCTS.find(item => item.id === id);
  if (!product) return;

  const existing = cart.find(item => item.id === id);
  if (existing) existing.qty += 1;
  else cart.push({ id, qty: 1 });

  saveCart();
  updateCartBadge();
  showToast(`${product.name.split(' ').slice(0, 3).join(' ')} added to cart`);
}

function removeFromCart(id) {
  cart = cart.filter(item => item.id !== id);
  saveCart();
  updateCartBadge();
  renderCart();
}

function changeQty(id, delta) {
  const item = cart.find(cartItem => cartItem.id === id);
  if (!item) return;

  item.qty += delta;
  if (item.qty <= 0) {
    removeFromCart(id);
    return;
  }

  saveCart();
  updateCartBadge();
  renderCart();
}

function saveCart() {
  localStorage.setItem('fk_cart', JSON.stringify(cart));
}

function updateCartBadge() {
  const total = cart.reduce((sum, item) => sum + item.qty, 0);
  $('#cartCount').text(total);
}

function toggleCart() {
  $('#cart-sidebar').toggleClass('open');
  $('#cart-overlay').toggleClass('show');
  if ($('#cart-sidebar').hasClass('open')) renderCart();
}

function renderCart() {
  const body = $('#cartBody');
  body.empty();

  if (!cart.length) {
    body.html('<div class="cart-empty"><i class="bi bi-cart-x"></i><h5 class="mt-3">Your cart is empty</h5><p>Add items to get started</p></div>');
    $('#cartFooter').hide();
    return;
  }

  let subtotal = 0;
  cart.forEach(item => {
    const product = PRODUCTS.find(candidate => candidate.id === item.id);
    if (!product) return;

    const lineTotal = product.price * item.qty;
    subtotal += lineTotal;
    body.append(`
      <div class="cart-item">
        <img src="${product.img}" alt="${product.name}" onerror="this.src='https://via.placeholder.com/72'"/>
        <div class="cart-item-info">
          <div class="cart-item-name">${product.name}</div>
          <div class="cart-item-price">${formatPrice(lineTotal)}</div>
          <div class="qty-ctrl">
            <button onclick="changeQty(${product.id}, -1)">-</button>
            <span>${item.qty}</span>
            <button onclick="changeQty(${product.id}, 1)">+</button>
          </div>
        </div>
        <i class="bi bi-x-lg cart-remove" onclick="removeFromCart(${product.id})"></i>
      </div>`);
  });

  $('#cartSubtotal').text(formatPrice(subtotal));
  $('#cartTotal').text(formatPrice(subtotal));
  $('#cartFooter').show();
}

function checkout() {
  showToast('Order placed successfully!');
  cart = [];
  saveCart();
  updateCartBadge();
  toggleCart();
}

function toggleWish(id, button) {
  if (wishlist.has(id)) {
    wishlist.delete(id);
    $(button).removeClass('active').html('<i class="bi bi-heart"></i>');
    showToast('Removed from wishlist');
  } else {
    wishlist.add(id);
    $(button).addClass('active').html('<i class="bi bi-heart-fill"></i>');
    showToast('Added to wishlist');
  }
  localStorage.setItem('fk_wish', JSON.stringify([...wishlist]));
}

function showToast(message) {
  const toast = $(`<div class="fk-toast">${message}</div>`);
  $('#toast-wrap').append(toast);
  requestAnimationFrame(() => requestAnimationFrame(() => toast.addClass('show')));
  setTimeout(() => {
    toast.removeClass('show');
    setTimeout(() => toast.remove(), 300);
  }, 2800);
}

Object.assign(window, {
  addToCart,
  addToCartFromModal,
  applyRatingFilter,
  applySortFilter,
  buyNow,
  changeQty,
  checkout,
  filterByPrice,
  openModal,
  removeFromCart,
  runSearch,
  selectSuggestion,
  showHome,
  showToast,
  toggleCart,
  toggleWish,
  viewAll,
});
