export interface ProductSpec {
  label: string;
  value: string;
}

export interface Product {
  id: string;
  category: "laptop" | "desktop" | "cctv" | "printer";
  title: string;
  price: string;
  img: string;
  shortSpecs: string;
  fullSpecs: ProductSpec[];
}

export const categories = [
  { id: "all", label: "الكل" },
  { id: "laptop", label: "لابتوبات" },
  { id: "desktop", label: "كمبيوترات" },
  { id: "cctv", label: "كاميرات المراقبة" },
  { id: "printer", label: "طابعات" },
] as const;

export const products: Product[] = [
  {
    id: "laptop-1",
    category: "laptop",
    title: "لابتوب للألعاب والبرامج الهندسية",
    price: "1,200,000 IQD",
    img: "/images/laptop-1.jpg",
    shortSpecs: "Intel Core i7, 16 GB RAM, 512 GB SSD",
    fullSpecs: [
      { label: "المعالج", value: "Intel Core i7-12700H" },
      { label: "الرام", value: "16 GB DDR5" },
      { label: "التخزين", value: "512 GB SSD NVMe" },
      { label: "كارت الشاشة", value: "NVIDIA RTX 3060 6GB" },
      { label: "الشاشة", value: '15.6" FHD 144Hz' },
      { label: "نظام التشغيل", value: "Windows 11" },
      { label: "الضمان", value: "12 شهر" },
    ],
  },
  {
    id: "laptop-2",
    category: "laptop",
    title: "لابتوب للطلاب والاستخدام العام",
    price: "650,000 IQD",
    img: "/images/laptop-2.jpg",
    shortSpecs: "Intel Core i5, 8 GB RAM, 256 GB SSD",
    fullSpecs: [
      { label: "المعالج", value: "Intel Core i5-1235U" },
      { label: "الرام", value: "8 GB DDR4" },
      { label: "التخزين", value: "256 GB SSD" },
      { label: "كارت الشاشة", value: "Intel Iris Xe" },
      { label: "الشاشة", value: '15.6" FHD' },
      { label: "نظام التشغيل", value: "Windows 11" },
      { label: "الضمان", value: "12 شهر" },
    ],
  },
  {
    id: "laptop-3",
    category: "laptop",
    title: "لابتوب هندسي متقدم",
    price: "1,800,000 IQD",
    img: "/images/laptop-3.jpg",
    shortSpecs: "Intel Core i9, 32 GB RAM, 1 TB SSD",
    fullSpecs: [
      { label: "المعالج", value: "Intel Core i9-13900H" },
      { label: "الرام", value: "32 GB DDR5" },
      { label: "التخزين", value: "1 TB SSD NVMe" },
      { label: "كارت الشاشة", value: "NVIDIA RTX 4070 8GB" },
      { label: "الشاشة", value: '16" QHD 165Hz' },
      { label: "نظام التشغيل", value: "Windows 11 Pro" },
      { label: "الضمان", value: "24 شهر" },
    ],
  },
  {
    id: "desktop-1",
    category: "desktop",
    title: "كمبيوتر مكتبي للألعاب",
    price: "1,500,000 IQD",
    img: "/images/desktop-1.jpg",
    shortSpecs: "Intel Core i7, 16 GB RAM, 1 TB SSD",
    fullSpecs: [
      { label: "المعالج", value: "Intel Core i7-13700K" },
      { label: "الرام", value: "16 GB DDR5" },
      { label: "التخزين", value: "1 TB SSD NVMe" },
      { label: "كارت الشاشة", value: "NVIDIA RTX 4060 Ti 8GB" },
      { label: "اللوحة الأم", value: "B760M" },
      { label: "الكيس", value: "Gaming Tower RGB" },
      { label: "الضمان", value: "12 شهر" },
    ],
  },
  {
    id: "desktop-2",
    category: "desktop",
    title: "كمبيوتر مكتبي للمكاتب",
    price: "450,000 IQD",
    img: "/images/desktop-2.jpg",
    shortSpecs: "Intel Core i3, 8 GB RAM, 256 GB SSD",
    fullSpecs: [
      { label: "المعالج", value: "Intel Core i3-12100" },
      { label: "الرام", value: "8 GB DDR4" },
      { label: "التخزين", value: "256 GB SSD" },
      { label: "كارت الشاشة", value: "Intel UHD 730" },
      { label: "اللوحة الأم", value: "H610M" },
      { label: "الضمان", value: "12 شهر" },
    ],
  },
  {
    id: "cctv-1",
    category: "cctv",
    title: "طقم كاميرات مراقبة 4 كاميرات",
    price: "350,000 IQD",
    img: "/images/cctv-1.jpg",
    shortSpecs: "4 كاميرات 2MP، جهاز DVR، هارد 1TB",
    fullSpecs: [
      { label: "عدد الكاميرات", value: "4 كاميرات" },
      { label: "الدقة", value: "2 MP Full HD" },
      { label: "جهاز التسجيل", value: "DVR 4 قنوات" },
      { label: "التخزين", value: "هارد 1 TB" },
      { label: "الرؤية الليلية", value: "حتى 30 متر" },
      { label: "الضمان", value: "12 شهر" },
    ],
  },
  {
    id: "cctv-2",
    category: "cctv",
    title: "طقم كاميرات مراقبة 8 كاميرات",
    price: "650,000 IQD",
    img: "/images/cctv-2.jpg",
    shortSpecs: "8 كاميرات 5MP، جهاز NVR، هارد 2TB",
    fullSpecs: [
      { label: "عدد الكاميرات", value: "8 كاميرات" },
      { label: "الدقة", value: "5 MP" },
      { label: "جهاز التسجيل", value: "NVR 8 قنوات" },
      { label: "التخزين", value: "هارد 2 TB" },
      { label: "الرؤية الليلية", value: "حتى 50 متر" },
      { label: "الاتصال", value: "PoE" },
      { label: "الضمان", value: "24 شهر" },
    ],
  },
  {
    id: "printer-1",
    category: "printer",
    title: "طابعة ليزر متعددة الوظائف",
    price: "280,000 IQD",
    img: "/images/printer-1.jpg",
    shortSpecs: "طباعة، نسخ، مسح ضوئي - أسود وأبيض",
    fullSpecs: [
      { label: "النوع", value: "ليزر أسود وأبيض" },
      { label: "الوظائف", value: "طباعة، نسخ، مسح ضوئي" },
      { label: "سرعة الطباعة", value: "30 صفحة/دقيقة" },
      { label: "الاتصال", value: "USB + WiFi" },
      { label: "الضمان", value: "12 شهر" },
    ],
  },
  {
    id: "printer-2",
    category: "printer",
    title: "طابعة ملونة للصور والمستندات",
    price: "180,000 IQD",
    img: "/images/printer-2.jpg",
    shortSpecs: "طباعة ملونة، حبر، WiFi",
    fullSpecs: [
      { label: "النوع", value: "حبر ملون" },
      { label: "الوظائف", value: "طباعة، نسخ، مسح ضوئي" },
      { label: "سرعة الطباعة", value: "15 صفحة/دقيقة" },
      { label: "الاتصال", value: "USB + WiFi" },
      { label: "نظام الحبر", value: "خزان حبر مدمج" },
      { label: "الضمان", value: "12 شهر" },
    ],
  },
  {
    id: "cctv-3",
    category: "cctv",
    title: "كاميرا مراقبة واي فاي داخلية",
    price: "75,000 IQD",
    img: "/images/cctv-3.jpg",
    shortSpecs: "2MP، واي فاي، رؤية ليلية، تطبيق موبايل",
    fullSpecs: [
      { label: "الدقة", value: "2 MP Full HD" },
      { label: "الاتصال", value: "WiFi" },
      { label: "الرؤية الليلية", value: "حتى 10 متر" },
      { label: "التحكم", value: "تطبيق موبايل" },
      { label: "التخزين", value: "بطاقة SD حتى 128 GB" },
      { label: "الضمان", value: "6 أشهر" },
    ],
  },
];

export function getProduct(id: string): Product | undefined {
  return products.find((p) => p.id === id);
}

export function getProductsByCategory(category: string): Product[] {
  if (category === "all") return products;
  return products.filter((p) => p.category === category);
}
