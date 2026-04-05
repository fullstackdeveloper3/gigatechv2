<?php
require_once __DIR__ . '/config.php';

try {
    $db = getDB();

    // Single product by ID
    if (isset($_GET['id'])) {
        $stmt = $db->prepare("SELECT * FROM products WHERE id = :id LIMIT 1");
        $stmt->execute(['id' => $_GET['id']]);
        $product = $stmt->fetch();

        if (!$product) {
            http_response_code(404);
            echo json_encode(['error' => 'Product not found']);
            exit;
        }

        // Parse fullSpecs from JSON string
        $product['priceNum'] = (int) $product['priceNum'];
        $product['fullSpecs'] = json_decode($product['fullSpecs'], true);

        echo json_encode($product, JSON_UNESCAPED_UNICODE);
        exit;
    }

    // All products (optional category filter)
    $sql = "SELECT * FROM products";
    $params = [];

    if (isset($_GET['category']) && $_GET['category'] !== 'all') {
        $sql .= " WHERE category = :category";
        $params['category'] = $_GET['category'];
    }

    $sql .= " ORDER BY priceNum ASC";

    $stmt = $db->prepare($sql);
    $stmt->execute($params);
    $products = $stmt->fetchAll();

    // Parse each product
    foreach ($products as &$p) {
        $p['priceNum'] = (int) $p['priceNum'];
        $p['fullSpecs'] = json_decode($p['fullSpecs'], true);
    }

    echo json_encode($products, JSON_UNESCAPED_UNICODE);

} catch (PDOException $e) {
    http_response_code(500);
    echo json_encode(['error' => 'Database error']);
}
