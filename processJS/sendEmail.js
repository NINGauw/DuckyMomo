function send(){
    var email = document.getElementById('email').value;
    var formData = new FormData();
    formData.append('email', email);

    var xhr = new XMLHttpRequest();
    xhr.open('POST', '/DuckyMomo/severPHP/sendEmail.php', true);
    xhr.onload = function () {
        if (xhr.status === 200) {
            alert('Mã giảm giá đã được gửi đến bạn!');
        } else {
            alert('Có lỗi xảy ra khi gửi email.');
        }
    };
    xhr.send(formData);
}
