Act as a professional front‑end web developer building a **static e‑commerce–style website** for **"GigaTech" (گيگا تك)**, a computer and CCTV shop in Kirkuk, Iraq.

You must:
- Keep the **exact visual style** (dark‑tech theme, **liquid‑glass effect**, typography, colors) of the current site:
  https://fullstackdeveloper3.github.io/gigatech/
- Use the **information structure and product layout** from:
  https://store.alnabaa.com/?srsltid=AfmBOopG175p8FGFxor-86QeK6pQEa3-E4kPmuQuypIX2t94ZnD_4_4l
- Generate a **Next.js static site** (with `output: "export"`), using **Tailwind CSS** and **plain CSS** for the liquid‑glass effects.

----------------------------------------
1. PROJECT OVERVIEW
----------------------------------------
- Client: GigaTech / گيگا تك – متجر لتقنيات الحاسبات و كاميرات المراقبة والطابعات في كركوك.
- Goal: Rebuild the current GigaTech site into a **more structured, product‑focused static website**:
  - Keep the **liquid‑glass cards, dark theme, Arabic layout, and WhatsApp CTAs**.
  - Improve layout and data structure to match **Al‑Nabaa’s product‑info style**.
- Constraints:
  - Static only (no backend, no login, no checkout).
  - Deployable to GitHub Pages (Next.js static export).

----------------------------------------
2. DESIGN STYLE (keep existing, evolve)
----------------------------------------
Visual style:
- Keep the **dark‑tech theme** from the current GigaTech site:
  - Background: dark blue or black (`#0f172a` or similar).
  - Text: light white or light gray (`#f1f5f9`).
  - Accent colors from the current site (e.g., cyan, blue).
- Keep **liquid‑glass / glassmorphism effect** on:
  - Product cards.
  - Hero banner subtitle / WhatsApp CTA.
  - Small floating contact box.
- Rules for liquid‑glass:
  - Background: `rgba(255, 255, 255, 0.1)`.
  - Border: `1px solid rgba(255, 255, 255, 0.2)`.
  - Box‑shadow: `0 8px 32px rgba(0, 0, 0, 0.1)`.
  - `backdrop‑filter: blur(8px)` where supported.
  - Top‑edge highlight to simulate “liquid” surface.
  - Text inside glass must be white or light, high contrast.

Language:
- Primary language: **Arabic** (all visible text, headings, labels).
- Technical terms (CPU, RAM, SSD, GPU, ROM, etc.) can stay in **English**.

RTL layout:
- Use `dir="rtl"` on `html` or `body`.
- Adjust layout (cards, text, buttons) to be RTL‑friendly.

----------------------------------------
3. PAGES & STRUCTURE (drawn from Al‑Nabaa + GigaTech)
----------------------------------------
Build the following pages (static Next.js):

1. Home page (`/`)
   - Hero section:
     - Arabic title: "گيگا تك لتقنيات الحاسبات و كاميرات المراقبة والطابعات".
     - Subtitle: "عروض لابتوبات للألعاب والبرامج الهندسية".
     - WhatsApp button: "تواصل معنا عبر واتساب".
   - Featured products grid (4–8 cards) of:
     - Laptops (gaming, engineering, general).
     - Desktop PCs.
     - CCTV cameras / kits.
     - Printers (optional).
   - Brief Arabic paragraph about GigaTech (2–3 lines).

2. Products page (`/products`)
   - Category filters (buttons):
     - "لابتوبات"
     - "كمبيوترات"
     - "كاميرات المراقبة"
     - "طابعات"
   - Product grid:
     - Each card:
       - Image.
       - Title in Arabic (e.g., "لابتوب للألعاب والبرامج الهندسية").
       - Price in IQD (e.g., "1,200,000 IQD").
       - Short specs (CPU, RAM, Storage) in one line, mixed Arabic/English where natural.
       - Liquid‑glass effect (card background, border, blur).
       - WhatsApp button: "طلب الاستفسار".

3. Product detail page (`/products/[id]`)
   - Large product image.
   - Title + price (same as card).
   - Specs table:
     - Labels in Arabic, values in Arabic + English tech terms:
       - "المعالج": "Intel Core i7‑13620H".
       - "الرام": "16 GB DDR5".
       - "التخزين": "1 TB SSD".
       - "شاشة": "15.6\" FHD".
       - "الضمان": "12 شهر".
   - Section: "الوصف" (Arabic description).
   - WhatsApp button: "تواصل معنا للطلب".

4. About page (`/about`)
   - Short Arabic paragraph about GigaTech (when they started, services offered).
   - Location: "كركوك، العراق".

5. Contact page (`/contact`)
   - Phone number (click‑to‑call).
   - WhatsApp button (opens WhatsApp with pre‑filled Arabic message).
   - Address line.
   - Optional: simple contact form (name, phone, message) – can be static.

----------------------------------------
4. DATA STRUCTURE (inspired by Al‑Nabaa, but yours)
----------------------------------------
Products should be represented as **static JSON** (e.g., `data/products.json`).

Each product object should look like:

{
  "id": "laptop-1",
  "category": "laptop",
  "title": "لابتوب للألعاب والبرامج الهندسية",
  "price": "1,200,000 IQD",
  "img": "/images/laptop-1.jpg",
  "shortSpecs": "Intel Core i7, 16 GB RAM, 1 TB SSD",
  "fullSpecs": [
    { "label": "المعالج", "value": "Intel Core i7‑13620H" },
    { "label": "الرام", "value": "16 GB DDR5" },
    { "label": "التخزين", "value": "1 TB SSD" },
    { "label": "شاشة", "value": "15.6\" FHD" },
    { "label": "الضمان", "value": "12 شهر" }
  ],
  "description": "لابتوب قوي للألعاب وبرامج الهندسة ..."
}

Pages that must use this data:
- Home (featured products).
- Products (all products + category filter).
- Product detail (one product + full specs + WhatsApp button).

Al‑Nabaa‑style influence:
- Use **clear label–value pairs** for specs (like Al‑Nabaa) but present them inside **your liquid‑glass cards**, not plain text.

----------------------------------------
5. LAYOUT & UX SPECIFICS
----------------------------------------
Navigation:
- Fixed or sticky navbar:
  - Logo/text: "گيگا تك".
  - Links: "الرئيسية", "المنتجات", "من نحن", "اتصل بنا".
  - Optional WhatsApp button in navbar (same style as existing).

Responsive:
- Mobile‑first:
  - 1–2 product cards per row on mobile.
  - 3–4 on tablet; 4 on desktop.
- Text is readable at small screen sizes; buttons are large enough to tap.

WhatsApp CTAs:
- On every page, at least one WhatsApp button:
  - Arabic: "تواصل معنا عبر واتساب".
  - URL: `https://wa.me/964XXXXXXXXX?text=أريد%20الاستفسار%20عن%20منتج%3A%20[اسم_المنتج]` (or generic on non‑product pages).

Hero / liquid‑glass sections:
- Keep the **hero vibe** from your current site (big title + WhatsApp).
- But make product info **as clear and structured** as Al‑Nabaa:
  - Each product card has:
    - Title.
    - Price (IQD).
    - 1–2 short lines of key specs (CPU, RAM, Storage).
    - Liquid‑glass card background + image.

----------------------------------------
6. FUNCTIONALITY (STATIC ONLY)
----------------------------------------
No backend. Static features only:
- Product list filtered by category (client‑side JS only).
- Product detail (no dynamic loading; all products in static JSON).
- WhatsApp click‑to‑chat.
- Click‑to‑call.

Do NOT implement:
- Login / user accounts.
- Admin panel.
- Real checkout, payment, or shopping cart (can be added later).

----------------------------------------
7. TECH STACK & OUTPUT
----------------------------------------
Front‑end:
- Framework: **Next.js** (with `output: "export"` for static‑site generation).
- Styling:  
  - **Tailwind CSS** for layout, spacing, responsive.  
  - Pure **CSS** for liquid‑glass effects (backdrop‑filter, borders, gradients).
- Hosting‑ready:
  - Must be buildable with `npm run build && next build && next export`.
  - Output in a `out/` folder suitable for GitHub Pages.

Folder structure example:

my-gigatech-site/
├── pages/
│   ├── index.js          (Home)
│   ├── products.js       (Products list)
│   ├── products/[id].js  (Product detail)
│   ├── about.js
│   └── contact.js
├── public/
│   └── images/
└── data/
    └── products.json

----------------------------------------
8. DESIGN–PRESERVING INSTRUCTIONS
----------------------------------------
- Do NOT change the core **visual identity** of your current GigaTech site:
  - Keep the **colors, fonts, button styles, WhatsApp button style**.
  - Keep the **same Arabic text and slogans** (only improve layout).
- Only evolve:
  - Product list layout (like Al‑Nabaa’s clarity) but in **your cards**.
  - Information structure (specs as key–value table, price in clear IQD).
- Make the site:
  - **More organized** (like Al‑Nabaa’s product info).
  - **Even more modern** (keep your liquid‑glass) and **mobile‑friendly**.

----------------------------------------
OUTPUT:
- Generate a complete Next.js project:
  - All pages as React components.
  - One JSON file for products.
  - One folder for images.
  - One folder for CSS (for liquid‑glass and custom styles).
- Output the folder structure and example code for at least:
  - Home page.
  - Product card component.
  - Product detail page.