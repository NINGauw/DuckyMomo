
//khởi tạo xmlHttp
var xmlHttp = false;
if(window.XMLHttpRequest){
//Tạo đổi tượng xmlHttp
xmlHttp = new XMLHttpRequest();
}
function signUp() {

    // Chờ một khoảng thời gian ngắn trước khi chuyển trang
    setTimeout(function() {
        // Chuyển trang khi hiệu ứng đã hoàn thành
        window.location.href = 'signUp.html';
    }, 300);
}
function submitLogin(){
    if(xmlHttp){
    //lấy dữ liệu
    console.log("hi");
    var username = document.getElementById('username');
    var password = document.getElementById('password');
    var result = document.getElementById('kq');
    var url = "/DuckyMomo/severPHP/loginProcess.php";
    var post = "username=" + username.value + "&password=" + password.value;
    
    console.log(post);
    //gửi yêu cầu chuẩn bị post và chỉ ra url cần post
    xmlHttp.open("POST", url, true);
    //thiết lập kiểu dữ liệu gửi đi là kiểu key1=value1&key2=value2
    xmlHttp.setRequestHeader("Content-type", "application/x-www-form-urlencoded");
    
    //gửi thông tin đi
    xmlHttp.send(post);

    //Đón thông tin về
    xmlHttp.onreadystatechange = function(){
        if(xmlHttp.readyState == 4 && xmlHttp.status == 200){
            if(xmlHttp.responseText === 'success'){
                window.location.href = 'index.html';
                }
            else{result.innerHTML ="<p>" + xmlHttp.responseText + "</p>"}
            }
        } 
    } 
}