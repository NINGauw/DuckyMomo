<?php
session_start(); // Bắt đầu hoặc tiếp tục session

// Xóa tất cả dữ liệu session
$_SESSION = array();

// Nếu sử dụng cookie, xóa cookie của session
if (ini_get("session.use_cookies")) {
    $params = session_get_cookie_params();
    setcookie(session_name(), '', time() - 42000,
        $params["path"], $params["domain"],
        $params["secure"], $params["httponly"]
    );
}

// Hủy session
session_destroy();

// Chuyển hướng đến trang đăng nhập
header("Location: ../view/login.html");
exit();
?>