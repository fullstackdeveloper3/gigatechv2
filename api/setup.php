<?php
/**
 * Run this ONCE to create the products table and seed it.
 * Access via browser: https://yourdomain.com/api/setup.php
 * DELETE this file after running it.
 */
require_once __DIR__ . '/config.php';

try {
    $db = getDB();

    // Create products table
    $db->exec("
        CREATE TABLE IF NOT EXISTS products (
            id VARCHAR(50) PRIMARY KEY,
            category ENUM('laptop','desktop','cctv','printer') NOT NULL,
            brand VARCHAR(50) NOT NULL,
            title VARCHAR(255) NOT NULL,
            price VARCHAR(50) NOT NULL,
            priceNum INT NOT NULL,
            img VARCHAR(255) NOT NULL,
            shortSpecs VARCHAR(500) NOT NULL,
            fullSpecs JSON NOT NULL,
            description TEXT NOT NULL,
            INDEX idx_category (category),
            INDEX idx_brand (brand),
            INDEX idx_priceNum (priceNum)
        ) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci
    ");

    echo "<p>Table created.</p>";

    // Seed products
    $products = [
        [
            'id' => 'laptop-1',
            'category' => 'laptop',
            'brand' => 'dell',
            'title' => 'لابتوب Dell للألعاب والبرامج الهندسية',
            'price' => '1,200,000 IQD',
            'priceNum' => 1200000,
            'img' => '/images/laptop-1.svg',
            'shortSpecs' => 'Intel Core i7, 16 GB RAM, 512 GB SSD',
            'fullSpecs' => json_encode([
                ['label' => 'الماركة', 'value' => 'Dell'],
                ['label' => 'المعالج', 'value' => 'Intel Core i7-12700H'],
                ['label' => 'الرام', 'value' => '16 GB DDR5'],
                ['label' => 'التخزين', 'value' => '512 GB SSD NVMe'],
                ['label' => 'كارت الشاشة', 'value' => 'NVIDIA RTX 3060 6GB'],
                ['label' => 'الشاشة', 'value' => '15.6" FHD 144Hz'],
                ['label' => 'نظام التشغيل', 'value' => 'Windows 11'],
                ['label' => 'الضمان', 'value' => '12 شهر'],
            ], JSON_UNESCAPED_UNICODE),
            'description' => 'لابتوب قوي مصمم للألعاب الحديثة وبرامج الهندسة مثل AutoCAD و SolidWorks. يتميز بمعالج Intel من الجيل الثاني عشر وكارت شاشة NVIDIA RTX 3060 الذي يوفر أداءً سلساً في الألعاب والتصميم ثلاثي الأبعاد. شاشة بمعدل تحديث 144Hz لتجربة لعب سلسة.',
        ],
        [
            'id' => 'laptop-2',
            'category' => 'laptop',
            'brand' => 'hp',
            'title' => 'لابتوب HP للطلاب والاستخدام العام',
            'price' => '650,000 IQD',
            'priceNum' => 650000,
            'img' => '/images/laptop-2.svg',
            'shortSpecs' => 'Intel Core i5, 8 GB RAM, 256 GB SSD',
            'fullSpecs' => json_encode([
                ['label' => 'الماركة', 'value' => 'HP'],
                ['label' => 'المعالج', 'value' => 'Intel Core i5-1235U'],
                ['label' => 'الرام', 'value' => '8 GB DDR4'],
                ['label' => 'التخزين', 'value' => '256 GB SSD'],
                ['label' => 'كارت الشاشة', 'value' => 'Intel Iris Xe'],
                ['label' => 'الشاشة', 'value' => '15.6" FHD'],
                ['label' => 'نظام التشغيل', 'value' => 'Windows 11'],
                ['label' => 'الضمان', 'value' => '12 شهر'],
            ], JSON_UNESCAPED_UNICODE),
            'description' => 'لابتوب مثالي للطلاب والاستخدام اليومي. خفيف الوزن وسريع بفضل معالج Intel Core i5 وقرص SSD. مناسب للدراسة وتصفح الإنترنت والعمل على برامج Office والبرامج التعليمية. بطارية تدوم طوال اليوم الدراسي.',
        ],
        [
            'id' => 'laptop-3',
            'category' => 'laptop',
            'brand' => 'asus',
            'title' => 'لابتوب ASUS هندسي متقدم',
            'price' => '1,800,000 IQD',
            'priceNum' => 1800000,
            'img' => '/images/laptop-3.svg',
            'shortSpecs' => 'Intel Core i9, 32 GB RAM, 1 TB SSD',
            'fullSpecs' => json_encode([
                ['label' => 'الماركة', 'value' => 'ASUS'],
                ['label' => 'المعالج', 'value' => 'Intel Core i9-13900H'],
                ['label' => 'الرام', 'value' => '32 GB DDR5'],
                ['label' => 'التخزين', 'value' => '1 TB SSD NVMe'],
                ['label' => 'كارت الشاشة', 'value' => 'NVIDIA RTX 4070 8GB'],
                ['label' => 'الشاشة', 'value' => '16" QHD 165Hz'],
                ['label' => 'نظام التشغيل', 'value' => 'Windows 11 Pro'],
                ['label' => 'الضمان', 'value' => '24 شهر'],
            ], JSON_UNESCAPED_UNICODE),
            'description' => 'لابتوب احترافي من الفئة العليا مصمم للمهندسين والمصممين المحترفين. معالج Intel Core i9 من الجيل الثالث عشر مع 32 جيجا رام و كارت شاشة RTX 4070 يوفر أداءً استثنائياً لبرامج Revit و 3ds Max و Premiere Pro. شاشة QHD بدقة عالية ومساحة ألوان واسعة.',
        ],
        [
            'id' => 'laptop-4',
            'category' => 'laptop',
            'brand' => 'lenovo',
            'title' => 'لابتوب Lenovo الترا بوك خفيف',
            'price' => '950,000 IQD',
            'priceNum' => 950000,
            'img' => '/images/laptop-4.svg',
            'shortSpecs' => 'Intel Core i7, 16 GB RAM, 512 GB SSD',
            'fullSpecs' => json_encode([
                ['label' => 'الماركة', 'value' => 'Lenovo'],
                ['label' => 'المعالج', 'value' => 'Intel Core i7-1355U'],
                ['label' => 'الرام', 'value' => '16 GB LPDDR5'],
                ['label' => 'التخزين', 'value' => '512 GB SSD NVMe'],
                ['label' => 'كارت الشاشة', 'value' => 'Intel Iris Xe'],
                ['label' => 'الشاشة', 'value' => '14" FHD IPS'],
                ['label' => 'الوزن', 'value' => '1.3 كغم'],
                ['label' => 'نظام التشغيل', 'value' => 'Windows 11'],
                ['label' => 'الضمان', 'value' => '12 شهر'],
            ], JSON_UNESCAPED_UNICODE),
            'description' => 'لابتوب رفيع وخفيف بوزن 1.3 كغم فقط، مثالي للتنقل والعمل أثناء السفر. هيكل معدني أنيق مع أداء ممتاز بفضل معالج Intel Core i7 من الجيل الثالث عشر. بطارية تدوم حتى 12 ساعة مع شاشة IPS بألوان دقيقة.',
        ],
        [
            'id' => 'desktop-1',
            'category' => 'desktop',
            'brand' => 'custom',
            'title' => 'كمبيوتر مكتبي للألعاب',
            'price' => '1,500,000 IQD',
            'priceNum' => 1500000,
            'img' => '/images/desktop-1.svg',
            'shortSpecs' => 'Intel Core i7, 16 GB RAM, 1 TB SSD',
            'fullSpecs' => json_encode([
                ['label' => 'الماركة', 'value' => 'تجميع'],
                ['label' => 'المعالج', 'value' => 'Intel Core i7-13700K'],
                ['label' => 'الرام', 'value' => '16 GB DDR5'],
                ['label' => 'التخزين', 'value' => '1 TB SSD NVMe'],
                ['label' => 'كارت الشاشة', 'value' => 'NVIDIA RTX 4060 Ti 8GB'],
                ['label' => 'اللوحة الأم', 'value' => 'B760M'],
                ['label' => 'الكيس', 'value' => 'Gaming Tower RGB'],
                ['label' => 'الضمان', 'value' => '12 شهر'],
            ], JSON_UNESCAPED_UNICODE),
            'description' => 'جهاز كمبيوتر مكتبي قوي مخصص للألعاب الحديثة بأعلى الإعدادات. يأتي مع كيس Gaming مزود بإضاءة RGB ونظام تبريد متقدم. كارت شاشة RTX 4060 Ti يضمن تشغيل جميع الألعاب بسلاسة على دقة Full HD و QHD.',
        ],
        [
            'id' => 'desktop-2',
            'category' => 'desktop',
            'brand' => 'hp',
            'title' => 'كمبيوتر HP مكتبي للمكاتب',
            'price' => '450,000 IQD',
            'priceNum' => 450000,
            'img' => '/images/desktop-2.svg',
            'shortSpecs' => 'Intel Core i3, 8 GB RAM, 256 GB SSD',
            'fullSpecs' => json_encode([
                ['label' => 'الماركة', 'value' => 'HP'],
                ['label' => 'المعالج', 'value' => 'Intel Core i3-12100'],
                ['label' => 'الرام', 'value' => '8 GB DDR4'],
                ['label' => 'التخزين', 'value' => '256 GB SSD'],
                ['label' => 'كارت الشاشة', 'value' => 'Intel UHD 730'],
                ['label' => 'اللوحة الأم', 'value' => 'H610M'],
                ['label' => 'الضمان', 'value' => '12 شهر'],
            ], JSON_UNESCAPED_UNICODE),
            'description' => 'كمبيوتر مكتبي اقتصادي مثالي للمكاتب والأعمال التجارية. أداء موثوق لتشغيل برامج المحاسبة والإدارة وتصفح الإنترنت. صامت وموفر للطاقة مع إمكانية الترقية مستقبلاً.',
        ],
        [
            'id' => 'desktop-3',
            'category' => 'desktop',
            'brand' => 'custom',
            'title' => 'كمبيوتر مكتبي للتصميم والمونتاج',
            'price' => '2,100,000 IQD',
            'priceNum' => 2100000,
            'img' => '/images/desktop-3.svg',
            'shortSpecs' => 'Intel Core i9, 64 GB RAM, 2 TB SSD',
            'fullSpecs' => json_encode([
                ['label' => 'الماركة', 'value' => 'تجميع'],
                ['label' => 'المعالج', 'value' => 'Intel Core i9-13900K'],
                ['label' => 'الرام', 'value' => '64 GB DDR5'],
                ['label' => 'التخزين', 'value' => '2 TB SSD NVMe'],
                ['label' => 'كارت الشاشة', 'value' => 'NVIDIA RTX 4070 Ti 12GB'],
                ['label' => 'اللوحة الأم', 'value' => 'Z790'],
                ['label' => 'التبريد', 'value' => 'تبريد مائي AIO 360mm'],
                ['label' => 'الضمان', 'value' => '24 شهر'],
            ], JSON_UNESCAPED_UNICODE),
            'description' => 'محطة عمل احترافية للمصممين ومحرري الفيديو. أداء خارق مع معالج i9 من الجيل الثالث عشر و 64 جيجا رام لتشغيل After Effects و DaVinci Resolve و برامج التصميم الثقيلة بدون أي تأخير. تبريد مائي لضمان الأداء المستمر.',
        ],
        [
            'id' => 'cctv-1',
            'category' => 'cctv',
            'brand' => 'hikvision',
            'title' => 'طقم كاميرات Hikvision 4 كاميرات',
            'price' => '350,000 IQD',
            'priceNum' => 350000,
            'img' => '/images/cctv-1.svg',
            'shortSpecs' => '4 كاميرات 2MP، جهاز DVR، هارد 1TB',
            'fullSpecs' => json_encode([
                ['label' => 'الماركة', 'value' => 'Hikvision'],
                ['label' => 'عدد الكاميرات', 'value' => '4 كاميرات'],
                ['label' => 'الدقة', 'value' => '2 MP Full HD'],
                ['label' => 'جهاز التسجيل', 'value' => 'DVR 4 قنوات'],
                ['label' => 'التخزين', 'value' => 'هارد 1 TB'],
                ['label' => 'الرؤية الليلية', 'value' => 'حتى 30 متر'],
                ['label' => 'الضمان', 'value' => '12 شهر'],
            ], JSON_UNESCAPED_UNICODE),
            'description' => 'طقم كاميرات مراقبة متكامل مناسب للمنازل والمحلات الصغيرة. يشمل 4 كاميرات بدقة Full HD مع رؤية ليلية واضحة حتى 30 متر. جهاز DVR مع هارد 1 تيرا يكفي لتسجيل حتى شهر كامل. التركيب مجاني.',
        ],
        [
            'id' => 'cctv-2',
            'category' => 'cctv',
            'brand' => 'dahua',
            'title' => 'طقم كاميرات Dahua 8 كاميرات',
            'price' => '650,000 IQD',
            'priceNum' => 650000,
            'img' => '/images/cctv-2.svg',
            'shortSpecs' => '8 كاميرات 5MP، جهاز NVR، هارد 2TB',
            'fullSpecs' => json_encode([
                ['label' => 'الماركة', 'value' => 'Dahua'],
                ['label' => 'عدد الكاميرات', 'value' => '8 كاميرات'],
                ['label' => 'الدقة', 'value' => '5 MP'],
                ['label' => 'جهاز التسجيل', 'value' => 'NVR 8 قنوات'],
                ['label' => 'التخزين', 'value' => 'هارد 2 TB'],
                ['label' => 'الرؤية الليلية', 'value' => 'حتى 50 متر'],
                ['label' => 'الاتصال', 'value' => 'PoE'],
                ['label' => 'الضمان', 'value' => '24 شهر'],
            ], JSON_UNESCAPED_UNICODE),
            'description' => 'نظام مراقبة متقدم بـ 8 كاميرات عالية الدقة 5 ميجابكسل مع اتصال PoE. مثالي للمحلات التجارية والمستودعات والمباني الكبيرة. جهاز NVR مع هارد 2 تيرا للتسجيل المستمر. إمكانية المشاهدة عن بُعد من الموبايل.',
        ],
        [
            'id' => 'cctv-3',
            'category' => 'cctv',
            'brand' => 'hikvision',
            'title' => 'كاميرا Hikvision واي فاي داخلية',
            'price' => '75,000 IQD',
            'priceNum' => 75000,
            'img' => '/images/cctv-3.svg',
            'shortSpecs' => '2MP، واي فاي، رؤية ليلية، تطبيق موبايل',
            'fullSpecs' => json_encode([
                ['label' => 'الماركة', 'value' => 'Hikvision'],
                ['label' => 'الدقة', 'value' => '2 MP Full HD'],
                ['label' => 'الاتصال', 'value' => 'WiFi'],
                ['label' => 'الرؤية الليلية', 'value' => 'حتى 10 متر'],
                ['label' => 'التحكم', 'value' => 'تطبيق موبايل'],
                ['label' => 'التخزين', 'value' => 'بطاقة SD حتى 128 GB'],
                ['label' => 'الضمان', 'value' => '6 أشهر'],
            ], JSON_UNESCAPED_UNICODE),
            'description' => 'كاميرا مراقبة داخلية صغيرة وسهلة التركيب، تعمل عبر الواي فاي. مثالية لمراقبة المنزل والأطفال. تدعم المشاهدة المباشرة والتسجيل عبر تطبيق الموبايل مع إشعارات فورية عند اكتشاف حركة.',
        ],
        [
            'id' => 'cctv-4',
            'category' => 'cctv',
            'brand' => 'dahua',
            'title' => 'كاميرا Dahua خارجية مقاومة للعوامل الجوية',
            'price' => '120,000 IQD',
            'priceNum' => 120000,
            'img' => '/images/cctv-4.svg',
            'shortSpecs' => '4MP، IP67، رؤية ليلية ملونة، PoE',
            'fullSpecs' => json_encode([
                ['label' => 'الماركة', 'value' => 'Dahua'],
                ['label' => 'الدقة', 'value' => '4 MP'],
                ['label' => 'الحماية', 'value' => 'IP67 مقاومة للماء والغبار'],
                ['label' => 'الرؤية الليلية', 'value' => 'ملونة حتى 30 متر'],
                ['label' => 'الاتصال', 'value' => 'PoE'],
                ['label' => 'الضمان', 'value' => '12 شهر'],
            ], JSON_UNESCAPED_UNICODE),
            'description' => 'كاميرا مراقبة خارجية متينة بتصنيف IP67 لمقاومة الماء والغبار والحرارة. تتميز برؤية ليلية ملونة بفضل تقنية ColorVu. مناسبة للمداخل والمواقف والأماكن المكشوفة.',
        ],
        [
            'id' => 'printer-1',
            'category' => 'printer',
            'brand' => 'brother',
            'title' => 'طابعة Brother ليزر متعددة الوظائف',
            'price' => '280,000 IQD',
            'priceNum' => 280000,
            'img' => '/images/printer-1.svg',
            'shortSpecs' => 'طباعة، نسخ، مسح ضوئي - أسود وأبيض',
            'fullSpecs' => json_encode([
                ['label' => 'الماركة', 'value' => 'Brother'],
                ['label' => 'النوع', 'value' => 'ليزر أسود وأبيض'],
                ['label' => 'الوظائف', 'value' => 'طباعة، نسخ، مسح ضوئي'],
                ['label' => 'سرعة الطباعة', 'value' => '30 صفحة/دقيقة'],
                ['label' => 'الاتصال', 'value' => 'USB + WiFi'],
                ['label' => 'الضمان', 'value' => '12 شهر'],
            ], JSON_UNESCAPED_UNICODE),
            'description' => 'طابعة ليزر متعددة الوظائف مثالية للمكاتب. تطبع وتنسخ وتمسح ضوئياً بسرعة 30 صفحة في الدقيقة. اتصال لاسلكي عبر WiFi للطباعة من أي جهاز. تكلفة طباعة منخفضة مقارنة بطابعات الحبر.',
        ],
        [
            'id' => 'printer-2',
            'category' => 'printer',
            'brand' => 'canon',
            'title' => 'طابعة Canon ملونة للصور والمستندات',
            'price' => '180,000 IQD',
            'priceNum' => 180000,
            'img' => '/images/printer-2.svg',
            'shortSpecs' => 'طباعة ملونة، حبر، WiFi',
            'fullSpecs' => json_encode([
                ['label' => 'الماركة', 'value' => 'Canon'],
                ['label' => 'النوع', 'value' => 'حبر ملون'],
                ['label' => 'الوظائف', 'value' => 'طباعة، نسخ، مسح ضوئي'],
                ['label' => 'سرعة الطباعة', 'value' => '15 صفحة/دقيقة'],
                ['label' => 'الاتصال', 'value' => 'USB + WiFi'],
                ['label' => 'نظام الحبر', 'value' => 'خزان حبر مدمج'],
                ['label' => 'الضمان', 'value' => '12 شهر'],
            ], JSON_UNESCAPED_UNICODE),
            'description' => 'طابعة ملونة بنظام خزان حبر مدمج توفر تكلفة طباعة منخفضة جداً. مناسبة لطباعة الصور والمستندات الملونة بجودة عالية. خزان الحبر يكفي لطباعة آلاف الصفحات قبل إعادة التعبئة.',
        ],
        [
            'id' => 'printer-3',
            'category' => 'printer',
            'brand' => 'hp',
            'title' => 'طابعة HP ليزر ملونة للأعمال',
            'price' => '450,000 IQD',
            'priceNum' => 450000,
            'img' => '/images/printer-3.svg',
            'shortSpecs' => 'ليزر ملون، طباعة مزدوجة، شبكة',
            'fullSpecs' => json_encode([
                ['label' => 'الماركة', 'value' => 'HP'],
                ['label' => 'النوع', 'value' => 'ليزر ملون'],
                ['label' => 'الوظائف', 'value' => 'طباعة، نسخ، مسح ضوئي، فاكس'],
                ['label' => 'سرعة الطباعة', 'value' => '25 صفحة/دقيقة'],
                ['label' => 'الطباعة المزدوجة', 'value' => 'تلقائية'],
                ['label' => 'الاتصال', 'value' => 'USB + WiFi + Ethernet'],
                ['label' => 'الضمان', 'value' => '12 شهر'],
            ], JSON_UNESCAPED_UNICODE),
            'description' => 'طابعة ليزر ملونة احترافية مصممة لبيئات العمل المزدحمة. طباعة مزدوجة تلقائية لتوفير الورق مع اتصال شبكي للمشاركة بين عدة أجهزة. جودة طباعة ممتازة للمستندات التجارية والعروض التقديمية.',
        ],
    ];

    $stmt = $db->prepare("
        INSERT INTO products (id, category, brand, title, price, priceNum, img, shortSpecs, fullSpecs, description)
        VALUES (:id, :category, :brand, :title, :price, :priceNum, :img, :shortSpecs, :fullSpecs, :description)
        ON DUPLICATE KEY UPDATE
            category = VALUES(category),
            brand = VALUES(brand),
            title = VALUES(title),
            price = VALUES(price),
            priceNum = VALUES(priceNum),
            img = VALUES(img),
            shortSpecs = VALUES(shortSpecs),
            fullSpecs = VALUES(fullSpecs),
            description = VALUES(description)
    ");

    foreach ($products as $p) {
        $stmt->execute($p);
    }

    echo "<p style='color:green; font-weight:bold;'>Done! " . count($products) . " products seeded.</p>";
    echo "<p style='color:red;'>DELETE this file (setup.php) now for security.</p>";

} catch (PDOException $e) {
    echo "<p style='color:red;'>Error: " . htmlspecialchars($e->getMessage()) . "</p>";
}
