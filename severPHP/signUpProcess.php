<?php 
    if(!empty($_POST)){
        //lấy dữ liệu
        $username = $_POST['username'];
        $name = $_POST['name'];
        $password = $_POST['password'];


        //Kết nối database
        $conn = mysqli_connect("localhost", "root", "", "duckymomo");
        
        //Kiểm tra kết nối
        if ($conn->connect_error) {
            die("Kết nối không thành công: " . $conn->connect_error);
        }
        //Truy vấn
        $query = "SELECT * FROM `user` WHERE `username` LIKE '$username'";
        $check = mysqli_query($conn, $query);

        //Kiểm tra tài khoản
        if($check->num_rows > 0){
            echo "Tài khoản đã được sử dụng!";
        }
         
        else{
            //Lấy số ID to nhất
            $result = mysqli_query($conn, "SELECT MAX(ID) AS id FROM `user`");
            $row = mysqli_fetch_assoc($result);
            $id = $row['id'] + 1; 
            // Thực hiện truyền dữ liệu
            $query = "INSERT INTO `user` (ID, name, username, password) VALUES ('$id','$name', '$username', '$password')";
            mysqli_query($conn, $query);
            echo "success";
        }
        //Đóng kết nối
        mysqli_close($conn);
    }
?>