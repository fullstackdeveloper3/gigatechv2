Act as a professional front‑end web developer. Build a **static product‑showcase website** for the computer and CCTV shop **"Giga Tech" (گيگا تك)** based in Kirkuk, Iraq.

----------------------------------------
1. PROJECT OVERVIEW
----------------------------------------
- Client: Giga Tech / گيگا تك – تقنيات الحاسبات و كاميرات المراقبة والطابعات.
- Location: Kirkuk, Iraq.
- Business type: Small tech store selling:
  - Laptops (gaming, engineering, general‑use).
  - Desktop PCs.
  - CCTV cameras and kits.
  - Printers and accessories.
- Goal for this version: a **static, lead‑generation website** (no checkout, no backend).  
  - Users look at products, click WhatsApp, and contact the store.

----------------------------------------
2. GOALS & SUCCESS CRITERIA
----------------------------------------
- Result: a **fully static, responsive website** that:
  - Looks modern and professional (tech‑store style).  
  - Uses **liquid‑glass / glassmorphism UI** on key sections (see style section below).  
  - Shows clear product cards with prices, images, and short specs.  
  - Lets users contact Giga Tech via WhatsApp from every page.  
- Success check:
  - All pages load fast (no heavy frameworks required; keep it light).  
  - Arabic text is readable and properly aligned (RTL‑friendly structure).  
  - Liquid‑glass elements do not hurt legibility or performance.

----------------------------------------
3. TARGET AUDIENCE
----------------------------------------
- Individual consumers:
  - Gamers, students, office workers in Kirkuk and nearby cities.
- Small businesses:
  - Offices and shops needing PCs, CCTV, and printers.  
- Users are mostly on **mobile phones** (Android + WhatsApp).

----------------------------------------
4. BRAND & STYLE GUIDE
----------------------------------------
Language:
- Primary language: **Arabic** (all headings, paragraphs, labels).
- Keep technical terms in English when appropriate (e.g., “CPU”, “RAM”, “SSD”).

Color & theme:
- Main theme: **dark‑tech / gaming style**.
  - Background: dark blue or black (e.g., `#0f172a` or `#000000`).
  - Text: light white or light gray (`#f1f5f9`).
  - Accents: blue or cyan for buttons / highlights.

Font:
- Primary: system‑UI fonts (e.g., `system-ui`, `-apple-system`, `Segoe UI`, `Roboto`) for Arabic.
- As a fallback: use simple sans‑serif to ensure Arabic renders well.

Liquid‑glass effect (where to use):
- ✅ Product cards (product grid and product list).
- ✅ Hero banner subtitle / WhatsApp CTA card.
- ✅ Small floating contact box (WhatsApp / phone).
- ❌ NOT used on:
  - Entire background.
  - Navigation bar (keep navbar solid or semi‑transparent, not full‑glass).
  - Long paragraphs of text.

Liquid‑glass rules (CSS‑like behavior):
- Use **glassmorphism / liquid‑glass style**:
  - `background: rgba(255, 255, 255, 0.1);`.
  - `border: 1px solid rgba(255, 255, 255, 0.2);`.
  - `box‑shadow: 0 8px 32px rgba(0, 0, 0, 0.1);`.
  - `backdrop‑filter: blur(8px);` (for supported browsers).
- Add a **top‑edge highlight** (soft top border) to simulate a “liquid” surface.
- Text inside glass elements must be:
  - White or light.
  - Sufficient contrast (no light gray on almost‑transparent).
  - Not overlapping busy background images.

----------------------------------------
5. PAGES & STRUCTURE
----------------------------------------
Build the following static pages:
- Home page
- Products page (list all products with categories)
- Product detail page
- About page
- Contact page

Routing:
- URL structure (clean, static):
  - `/` → Home
  - `/products` → Products list
  - `/products/[id]` → Product detail (e.g., `/products/laptop-1`)
  - `/about` → About
  - `/contact` → Contact

----------------------------------------
6. CONTENT & DATA STRUCTURE
----------------------------------------
Treat all products as **static data** (JSON or JS file).

Product data structure (example):
{
  "id": "laptop-1",
  "category": "laptop",
  "title": "لابتوب للألعاب والبرامج الهندسية",
  "price": "1,200,000 IQD",
  "img": "/images/laptop-1.jpg",
  "shortSpecs": "Intel Core i7, 16 GB RAM, 512 GB SSD",
  "fullSpecs": [
    { "label": "المعالج", "value": "Intel Core i7‑12xxx" },
    { "label": "الرام", "value": "16 GB DDR5" },
    { "label": "التخزين", "value": "512 GB SSD" },
    { "label": "نظام التشغيل", "value": "Windows 11" },
    { "label": "الضمان", "value": "12 شهر" }
  ]
}

Pages content:
- Home:
  - Hero banner with:
    - Arabic title: "گيگا تك لتقنيات الحاسبات و كاميرات المراقبة والطابعات".
    - Subtitle: "عروض لابتوبات للألعاب والبرامج الهندسية".
    - WhatsApp button: "تواصل معنا عبر واتساب".
  - Featured products grid (6–8 products).
  - Small “About Giga Tech” paragraph (2–3 lines).
- Products:
  - Category filter buttons:  
    - "لابتوبات"  
    - "كمبيوترات"  
    - "كاميرات المراقبة"  
    - "طابعات"  
  - Product grid (all products).
- Product detail:
  - Large image.
  - Title, price, short specs.
  - Section: "المواصفات الكاملة" in table format.
  - WhatsApp button: "تواصل معنا للطلب".
- About:
  - Short Arabic paragraph about Giga Tech.
  - Location line: " Kirkuk, Iraq".
- Contact:
  - Phone number (with click‑to‑call).
  - WhatsApp button (click‑to‑chat, opens WhatsApp with pre‑filled message).
  - Address line.
  - Optional: simple contact form (name, phone, message) but submit behavior is not required (can be static / placeholder).

----------------------------------------
7. DESIGN & UX SPECIFICS
----------------------------------------
- Layout:
  - Clean, grid‑based layout.
  - Product cards in a responsive grid (2–4 columns on desktop, 1–2 on mobile).
- Responsiveness:
  - Must be mobile‑first.
  - Works well on:
    - Mobile (360–414 px).
    - Tablet (768 px).
    - Desktop (1024 px+).
- Navigation:
  - Fixed or sticky navbar with:
    - Logo/text: "گيگا تك".
    - Links: "الرئيسية", "المنتجات", "من نحن", "اتصل بنا".
    - WhatsApp button in navbar (optional).
- CTA:
  - Every page has at least one WhatsApp button:
    - Arabic text: "تواصل معنا عبر واتساب".
    - Opens WhatsApp link like:
      `https://wa.me/964XXXXXXXX?text=مرحباً%2C%20أريد%20الاستفسار%20عن%20منتج%20XYZ`
    - Message text: "أريد الاستفسار عن منتج: [اسم المنتج]" (for product pages; general on other pages).

Liquid‑glass visual rules:
- Only on:
  - Product cards.
  - Hero banner subtitle / WhatsApp CTA.
  - Contact box.
- Behavior:
  - Background blur only if performance allows.
  - If blur is not supported, fall back to solid‑glass‑like card (no blur, still light border + light background).
  - No full‑page glass background.

----------------------------------------
8. FUNCTIONALITY (STATIC VERSION)
----------------------------------------
- No user accounts, login, or admin panel.
- No real database or backend.
- No real checkout; no payment or order system.
- Static product data loaded from a JSON file or JS module.
- No search bar (later phase feature).
- No filters by GPU/RAM (later phase); only category filter (laptop / PC / CCTV / printer).

Whitelisted features:
- WhatsApp click‑to‑chat link.
- Click‑to‑call phone number.
- Simple contact form (no server logic needed; can be static HTML).

----------------------------------------
9. TECH STACK & CONSTRAINTS
----------------------------------------
Front‑end:
- Option 1 (recommended): **Next.js (static export)**  
  - Folder structure: `pages/`, `public/`, `components/`.  
- Option 2: pure **HTML + CSS + JS** (no frameworks) if you prefer maximum simplicity.

Styling:
- Use **Tailwind CSS** if Next.js, or **pure CSS** if HTML‑only.  
- If Tailwind: use it for layout, responsive, and basic styles; keep custom CSS only for liquid‑glass effects.

Hosting:
- Assume static hosting (Vercel, Netlify, GitHub Pages). No backend server needed.

Performance:
- Keep bundle size small.
- Optimize images (use example placeholder images; paths like `/images/[name].jpg`).

No integrations for:
- No CMS.
- No content management.
- No analytics (unless you explicitly add later).

----------------------------------------
10. OUTPUT FORMAT
----------------------------------------
Generate a complete, static project structure that includes:
- All required pages as components or HTML files.
- One folder for product data (e.g., `data/products.json` or `data/products.js`).
- One folder for images (e.g., `public/images/`).
- Clear folder structure for:
  - Components (if using React / Next.js).
  - CSS / Tailwind config (if using Tailwind).
- Example product page with at least one product rendered.

Document the structure in plain text (e.g.):