# 🛒 Flipkart Clone

A fully functional and responsive Flipkart clone built using **HTML5, CSS3, Bootstrap 5, JavaScript, and jQuery**. This project replicates the core UI and functionality of Flipkart — India's #1 e-commerce platform.

---

## 🔗 Live Preview

> Open `index.html` in any browser to run the project locally.

---

## 🧰 Tech Stack

| Technology | Purpose |
|---|---|
| HTML5 | Page structure and semantic markup |
| CSS3 | Styling, animations, transitions, responsive layout |
| Bootstrap 5 | Grid, Carousel, Modal, Badges, Icons, Utilities |
| Bootstrap Icons | All UI icons (cart, heart, search, star, etc.) |
| jQuery 3.7 | DOM manipulation, event handling, dynamic rendering |
| JavaScript (ES6+) | State management, localStorage, filtering, timers |

---

## ✨ Features

### 🔝 Navbar
- Sticky top navigation bar with Flipkart branding
- Live search bar with **auto-suggest dropdown**
- Cart icon with **real-time item count badge**
- Login, Become a Seller, and Offers buttons

### 🗂️ Category Navigation
- Horizontal scrollable category bar with **10 categories**
- Click any category to filter and view products
- Active category highlighted with blue underline

### 🎠 Hero Carousel
- Auto-playing banner carousel (3.5s interval)
- Gradient overlay with title, tagline, and CTA button
- Previous / Next controls with dot indicators

### ⏱️ Deals of the Day
- **Live countdown timer** counting down to midnight
- Horizontally scrollable deal cards with discount badges

### 🖼️ Offer Banners
- 3-column gradient banner grid for Electronics, Fashion, and Home
- Hover zoom effect with category navigation on click

### 📦 Product Sections
- Three dedicated grids — Electronics, Fashion, Home & Kitchen
- Each card shows: image, name, star rating, review count,
  current price, original price, discount %, wishlist button, Add to Cart

### 🔍 Search & Filter Page
- Real-time product search with keyword matching
- **Sidebar Filters:**
  - Price range slider (₹0 – ₹2,00,000)
  - Rating filter (4★ and above, etc.)
  - Brand / subcategory checkboxes
- **Sort options:** Relevance, Price Low→High, Price High→Low, Rating, Discount

### 🧾 Product Detail Modal
- Full-screen Bootstrap modal on product click
- Displays: image, name, rating, reviews, price breakdown
- Specifications table (Display, Processor, RAM, Battery, etc.)
- Bank offer tags and return policy info
- **Buy Now** and **Add to Cart** action buttons

### 🛒 Cart Sidebar
- Smooth slide-in cart panel from the right
- Dark overlay background when open
- Per-item quantity controls (+/−) with live price updates
- Remove item button
- Cart summary with subtotal, free delivery, and total
- **Proceed to Checkout** with order confirmation

### ❤️ Wishlist
- Toggle wishlist on any product card
- Persisted using **localStorage** across sessions
- Visual heart icon toggle (outline → filled)

### 🔔 Toast Notifications
- Slide-up toast for every user action
- Messages for: add to cart, wishlist, order placed, etc.
- Auto-dismisses after 2.8 seconds

### 🦶 Footer
- 5-column dark footer with About, Help, Policy, Social, Office
- Social icons: Facebook, X (Twitter), YouTube, Instagram
- Copyright and Trustpay notice in the bottom bar

---

## 🚀 Getting Started

### Prerequisites
- Any modern web browser (Chrome, Firefox, Edge, Safari)
- No server or installation required

### Run Locally
```bash
# 1. Clone the repository
git clone https://github.com/your-username/flipkart-clone.git

# 2. Navigate to the project folder
cd flipkart-clone

# 3. Open index.html in your browser
open index.html
# OR just double-click index.html
```

---

## 💡 JavaScript Highlights

```javascript
// Live Search with Auto-suggest
$input.on('input', function () {
  const matches = PRODUCTS.filter(p =>
    p.name.toLowerCase().includes(query)
  );
  // Render suggestions dynamically
});

// Cart with localStorage Persistence
function saveCart() {
  localStorage.setItem('fk_cart', JSON.stringify(cart));
}

// Live Countdown Timer
setInterval(() => {
  const diff = endTime - new Date();
  // Update hours, minutes, seconds in DOM
}, 1000);

// Sort & Filter Products
sorted.sort((a, b) => a.price - b.price); // Low to High
filtered = products.filter(p => p.price <= maxPrice);
```

---

## 📱 Responsive Design

| Breakpoint | Layout |
|---|---|
| Desktop (1300px+) | 5-col footer, 3-banner grid, full navbar |
| Tablet (768–991px) | 2-col banners, 3-col footer, compact nav |
| Mobile (< 767px) | Single column, stacked search, full-width cart |

---

## 📊 Evaluation Criteria Met

| Criteria | Details |
|---|---|
| ✅ Appearance | Pixel-close to real Flipkart — blue/yellow brand theme, card shadows, hover effects, gradient overlays |
| ✅ JavaScript | 400+ lines — search, cart, timer, modal, filter, sort, wishlist, toast, localStorage |
| ✅ Responsiveness | CSS media queries at 3 breakpoints + Bootstrap fluid grid |
| ✅ Bootstrap | Carousel, Modal, Grid, Badges, Form Range, Form Check, Icons — all used |
| ✅ jQuery | Used for all DOM manipulation, event binding, dynamic rendering |

---

## 🧩 Product Data

The project includes **18 real-world products** across 3 categories:

- **Electronics** — Samsung Galaxy S24 Ultra, iPhone 15 Pro Max, Sony WH-1000XM5, LG OLED TV, MacBook Air M3, OnePlus 12
- **Fashion** — Levi's Jeans, Puma Shoes, H&M Dress, Ray-Ban Sunglasses, Allen Solly Shirt, Nike Air Max
- **Home & Kitchen** — Prestige Induction Cooktop, Philips LED Bulbs, Milton Bottle, Sleepwell Mattress, Dyson Vacuum, Morphy Richards Coffee Machine

Each product includes: name, category, price, original price, image, rating, review count, and full specifications.

---

## 🔮 Future Enhancements

- [ ] Backend integration with Node.js + MongoDB
- [ ] User authentication (Login / Register)
- [ ] Real payment gateway (Razorpay / Stripe)
- [ ] Order history and tracking page
- [ ] Product review and rating submission
- [ ] Admin dashboard for product management
- [ ] More categories and 100+ products

---

## 👨‍💻 Author

**Piyush**
SY B.Tech — MIT Academy of Engineering
Course: Web Technologies / Full Stack Development

---

## 📄 License

This project is built for **educational purposes only**.
Flipkart name, logo, and brand identity belong to **Flipkart Internet Pvt. Ltd.**
This clone is not affiliated with or endorsed by Flipkart.

---

> ⭐ If you found this project helpful, give it a star on GitHub!
