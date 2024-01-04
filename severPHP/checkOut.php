<?php
session_start();
header('Content-Type: application/json');

// Xóa session giỏ hàng hoặc toàn bộ session
if (isset($_SESSION['cart'])) {
    unset($_SESSION['cart']);
}

echo json_encode(["status" => "success"]);
?>
