const CATEGORIES = [
  { name: 'Grocery', img: 'https://rukminim2.flixcart.com/flap/128/128/image/29327f40e9c4d26b.png' },
  { name: 'Mobiles', img: 'https://rukminim2.flixcart.com/flap/128/128/image/22fddf3c7da4c4f4.png' },
  { name: 'Fashion', img: 'https://rukminim2.flixcart.com/fk-p-flap/128/128/image/0d75b34f7d8fbcb3.png' },
  { name: 'Electronics', img: 'https://rukminim2.flixcart.com/flap/128/128/image/69c6589653afdb9a.png' },
  { name: 'Home', img: 'https://rukminim1.flixcart.com/flap/128/128/image/ab7e2b022a4587dd.jpg?q=100' },
  { name: 'Appliances', img: 'https://rukminim2.flixcart.com/flap/128/128/image/0ff199d1bd27eb98.png' },
  { name: 'Travel', img: 'https://rukminim2.flixcart.com/flap/128/128/image/71050627a56b4693.png' },
  { name: 'Beauty', img: 'https://rukminim2.flixcart.com/flap/128/128/image/dff3f7adcf3a90c6.png' },
  { name: 'Toys', img: 'https://rukminim2.flixcart.com/flap/128/128/image/71050627a56b4693.png' },
  { name: 'Two Wheelers', img: 'https://rukminim2.flixcart.com/flap/128/128/image/05d708653beff580.png' },
];

const SLIDES = [
  { bg: 'https://rukminim2.flixcart.com/fk-p-flap/1688/280/image/633789f7def60050.jpg?q=50', tag: 'Big Billion Days', title: 'Up to 80% OFF', sub: 'On top electronics and fashion', btn: 'Shop Now', cat: 'Electronics' },
  { bg: 'images/mobile-corousel.jpg', tag: 'Mobile Sale', title: 'Smartphones from Rs. 6,999', sub: 'Top brands, best prices', btn: 'Explore', cat: 'Mobiles' },
  { bg: 'https://rukminim2.flixcart.com/fk-p-flap/1688/280/image/ab7e2b022a4587dd.jpg?q=50', tag: 'Home Makeover', title: 'Furnish Your Home', sub: 'Up to 60% off on furniture and decor', btn: 'Shop Now', cat: 'Home' },
];

const PRODUCTS = [
  { id: 1, name: 'Samsung Galaxy S24 Ultra 5G', cat: 'Electronics', subcat: 'Mobiles', price: 99999, orig: 134999, img: 'images/-original-imahgfmxumntk7sy.webp', rating: 4.5, reviews: 12840, specs: { Display: '6.8 inch QHD+ AMOLED', Processor: 'Snapdragon 8 Gen 3', RAM: '12 GB', Storage: '256 GB', Battery: '5000 mAh' } },
  { id: 2, name: 'Apple iPhone 15 Pro Max 256GB', cat: 'Electronics', subcat: 'Mobiles', price: 134900, orig: 159900, img: 'images/-original-imahggetzffhxaar.webp', rating: 4.7, reviews: 9820, specs: { Display: '6.7 inch Super Retina XDR', Chip: 'A17 Pro', RAM: '8 GB', Storage: '256 GB', Battery: '4422 mAh' } },
  { id: 3, name: 'Sony WH-1000XM5 Wireless Headphones', cat: 'Electronics', subcat: 'Audio', price: 24990, orig: 34990, img: 'images/-original-imahgr29cddeazsx.webp', rating: 4.6, reviews: 5430, specs: { Type: 'Over-ear', ANC: 'Yes', Battery: '30 hrs', Driver: '40 mm', Codec: 'LDAC / AAC' } },
  { id: 4, name: 'LG 55 inch 4K OLED Smart TV', cat: 'Electronics', subcat: 'TV', price: 79990, orig: 120000, img: 'images/oled65c56la-lg-original-imahg9gtgdjxbqvk.webp', rating: 4.4, reviews: 3210, specs: { Screen: '55 inch', Resolution: '4K UHD', Panel: 'OLED', OS: 'webOS', HDR: 'Dolby Vision' } },
  { id: 5, name: 'MacBook Air M3 13 inch 8GB 256GB', cat: 'Electronics', subcat: 'Laptops', price: 114900, orig: 134900, img: 'images/-original-imagypv6cagwsd3m.webp', rating: 4.8, reviews: 7650, specs: { Chip: 'Apple M3', RAM: '8 GB', Storage: '256 GB SSD', Display: '13.6 inch Liquid Retina', Battery: '18 hrs' } },
  { id: 6, name: 'OnePlus 12 5G 256GB', cat: 'Electronics', subcat: 'Mobiles', price: 56999, orig: 69999, img: 'images/iphone.webp', rating: 4.3, reviews: 8760, specs: { Display: '6.82 inch LTPO AMOLED', Processor: 'Snapdragon 8 Gen 3', RAM: '12 GB', Storage: '256 GB', Battery: '5400 mAh' } },
  { id: 7, name: 'Levis 511 Slim Fit Jeans', cat: 'Fashion', subcat: 'Men', price: 2099, orig: 3999, img: 'images/jeans.webp', rating: 4.2, reviews: 3120, specs: { Fit: 'Slim', Fabric: '99% Cotton', Rise: 'Mid-Rise', Occasion: 'Casual' } },
  { id: 8, name: 'Puma Men Running Shoes', cat: 'Fashion', subcat: 'Footwear', price: 2499, orig: 4999, img: 'images/shoes.webp', rating: 4.1, reviews: 5640, specs: { Sole: 'Rubber', Closure: 'Lace-up', Occasion: 'Sports', Waterproof: 'No' } },
  { id: 9, name: 'H&M Floral Wrap Dress', cat: 'Fashion', subcat: 'Women', price: 1499, orig: 2999, img: 'images/floral wrap dress.webp', rating: 4.0, reviews: 2140, specs: { Fabric: 'Viscose', Fit: 'Regular', Occasion: 'Casual / Party', Wash: 'Hand Wash' } },
  { id: 10, name: 'Ray-Ban Wayfarer Sunglasses', cat: 'Fashion', subcat: 'Accessories', price: 5490, orig: 8490, img: 'images/sunglasses.webp', rating: 4.5, reviews: 1890, specs: { Frame: 'Acetate', Lens: 'Polarized', 'UV Protection': '100%', Gender: 'Unisex' } },
  { id: 11, name: 'Allen Solly Formal Shirt', cat: 'Fashion', subcat: 'Men', price: 999, orig: 2199, img: 'images/alan sooly shirt.webp', rating: 3.9, reviews: 4320, specs: { Fabric: 'Cotton', Fit: 'Regular', Collar: 'Spread', Occasion: 'Formal' } },
  { id: 12, name: 'Nike Air Max 270 React', cat: 'Fashion', subcat: 'Footwear', price: 8995, orig: 12995, img: 'images/nikeshoe.webp', rating: 4.4, reviews: 7830, specs: { Type: 'Running', Sole: 'Rubber', Technology: 'Air Max', Upper: 'Mesh' } },
  { id: 13, name: 'Prestige Induction Cooktop 2000W', cat: 'Home', subcat: 'Kitchen', price: 1599, orig: 3500, img: 'images/induction.webp', rating: 4.2, reviews: 9870, specs: { Wattage: '2000 W', Voltage: '230 V', Warranty: '2 Years', Controls: 'Touch' } },
  { id: 14, name: 'Philips LED Smart Bulb 9W Pack of 4', cat: 'Home', subcat: 'Lighting', price: 499, orig: 999, img: 'images/philips bulb.webp', rating: 4.1, reviews: 5430, specs: { Wattage: '9 W', Lumens: '800 lm', Lifespan: '15000 hrs', Color: 'Warm White' } },
  { id: 15, name: 'Milton 1L Stainless Steel Water Bottle', cat: 'Home', subcat: 'Kitchen', price: 349, orig: 799, img: 'images/bottel.webp', rating: 4.3, reviews: 12340, specs: { Capacity: '1 L', Material: 'Stainless Steel', Lid: 'Screw Cap', Insulation: 'Double Wall' } },
  { id: 16, name: 'Sleepwell Ortho Mattress Queen Size', cat: 'Home', subcat: 'Furniture', price: 14990, orig: 29990, img: 'images/sleepwell.webp', rating: 4.4, reviews: 3210, specs: { Size: 'Queen 60x78 inch', Thickness: '6 inch', Type: 'Orthopaedic', Warranty: '5 Years' } },
  { id: 17, name: 'Dyson V15 Detect Vacuum Cleaner', cat: 'Home', subcat: 'Appliances', price: 52900, orig: 62900, img: 'images/vaccume.jpg', rating: 4.6, reviews: 1540, specs: { Type: 'Cordless', Suction: '230 AW', Battery: '60 min', Filter: 'HEPA' } },
  { id: 18, name: 'Morphy Richards Divo Espresso Machine', cat: 'Home', subcat: 'Appliances', price: 6990, orig: 12990, img: 'images/last.webp', rating: 4.0, reviews: 876, specs: { Type: 'Espresso', Pressure: '15 bar', Power: '1050 W', Color: 'Black' } },
];

const OFFER_BANNERS = [
  { title: 'Electronics Bonanza', sub: 'Shop top brands at unbeatable prices', cat: 'Electronics', icon: 'bi-lightning-charge-fill', gradient: 'linear-gradient(135deg,#2874f0,#0e46a3)' },
  { title: 'Fashion Sale - Up to 70% OFF', sub: 'Trendiest picks, lowest prices', cat: 'Fashion', icon: 'bi-bag-heart-fill', gradient: 'linear-gradient(135deg,#ff6161,#c0392b)' },
  { title: 'Home & Kitchen Deals', sub: 'Transform your space for less', cat: 'Home', icon: 'bi-house-heart-fill', gradient: 'linear-gradient(135deg,#26a541,#1a7a30)' },
];
