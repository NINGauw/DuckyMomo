<?php
header('Content-Type: application/json'); // Thiết lập Content-Type cho phản hồi

session_start(); // Bắt đầu hoặc tiếp tục session

function getTotalQuantity() {
    $total = 0;
    foreach ($_SESSION['cart'] as $item) {
        $total += $item['quantity'];
    }
    return $total;
}

if ($_SERVER["REQUEST_METHOD"] == "POST") {
    // Nhận dữ liệu JSON từ yêu cầu POST
    $productData = json_decode(file_get_contents("php://input"), true);

    if (json_last_error() !== JSON_ERROR_NONE) {
        // Gửi phản hồi lỗi nếu JSON không hợp lệ
        echo json_encode(["status" => "error", "message" => "Invalid JSON"]);
        exit;
    }

    // Kiểm tra và cập nhật giỏ hàng
    if (!isset($_SESSION['cart'])) {
        $_SESSION['cart'] = [];
    }

    $productFound = false;
    foreach ($_SESSION['cart'] as $key => $item) {
        if ($item['id'] == $productData['id']) {
            // Tăng số lượng của sản phẩm đã tồn tại
            $_SESSION['cart'][$key]['quantity'] = (isset($item['quantity']) ? $item['quantity'] : 0) + 1;
            $productFound = true;
            break;
        }
    }

    if (!$productFound) {
        // Thêm sản phẩm mới vào giỏ hàng với số lượng ban đầu là 1
        $productData['quantity'] = 1;
        array_push($_SESSION['cart'], $productData);
    }

    // Phản hồi lại cho client với dữ liệu giỏ hàng
    echo json_encode(["status" => "success", "products" => $_SESSION['cart'], "totalQuantity" => getTotalQuantity()]);
} else {
    // Xử lý việc lấy thông tin giỏ hàng
    if (isset($_SESSION['cart'])) {
        echo json_encode(["status" => "success", "products" => $_SESSION['cart'], "totalQuantity" => getTotalQuantity()]);
    } else {
        echo json_encode(["status" => "error", "message" => "No cart data found"]);
    }
}
?>
