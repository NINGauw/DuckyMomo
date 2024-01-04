<?php 
    session_start(); //Khởi tạo session để lưu người dùng đăng nhập
    if(!empty($_POST)){
        //lấy dữ liệu
        $username = $_POST['username'];
        $password = $_POST['password'];

        //Kết nối database
        $conn = mysqli_connect("localhost", "root", "", "duckymomo");
        
        //Kiểm tra kết nối
        if ($conn->connect_error) {
            die("Kết nối không thành công: " . $conn->connect_error);
        }
        //Truy vấn
        $query = "SELECT * FROM `user` WHERE `username` LIKE '$username' AND `password` LIKE '$password'";
        $check = mysqli_query($conn, $query);

        //Kiểm tra tài khoản
        if($check->num_rows > 0){
            $_SESSION['username'] = $username;
            echo 'success';
        }
        else echo "Đăng nhập không thành công";

        //Đóng kết nối
        mysqli_close($conn);
    }
?>