<?php
use PHPMailer\PHPMailer\PHPMailer;
use PHPMailer\PHPMailer\Exception;
require '../PHPMailer-master/src/Exception.php';
require '../PHPMailer-master/src/PHPMailer.php';
require '../PHPMailer-master/src/SMTP.php';


$mail = new PHPMailer(true);
try {
    $email = $_POST['email'];
    //Server settings
    $mail->SMTPDebug = 2;
    $mail->isSMTP(); // Sử dụng SMTP để gửi mail
    $mail->Host = 'smtp.gmail.com'; // Server SMTP của gmail
    $mail->SMTPAuth = true; // Bật xác thực SMTP
    $mail->Username = 'sigmazit0210'; // Tài khoản email
    $mail->Password = 'nzqkspqaojlmptpi'; // Mật khẩu ứng dụng ở bước 1 hoặc mật khẩu email
    $mail->SMTPSecure = 'ssl'; // Mã hóa SSL
    $mail->Port = 465; // Cổng kết nối SMTP là 465
    $content = file_get_contents('../PHPMailer-master/src/fontEmail.html');
    //Recipients
    $mail->setFrom('sigmazit0210@gmail.com', 'DuckyMomo'); // Địa chỉ email và tên người gửi
    $mail->addAddress($email, ''); // Địa chỉ mail và tên người nhận

    //Content
    $mail->isHTML(true); // Set email format to HTML
    $mail->Subject = 'Voucher from Ducky Momo with love'; // Tiêu đề
    $mail->Body = $content; // Nội dung

    $mail->send();
    echo 'Message has been sent';
    } catch (Exception $e) {
    echo 'Message could not be sent. Mailer Error: ', $mail->ErrorInfo;}
?>