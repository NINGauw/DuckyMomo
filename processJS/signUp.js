
//khởi tạo xmlHttp
var xmlHttp = false;
if(window.XMLHttpRequest){
//Tạo đổi tượng xmlHttp
xmlHttp = new XMLHttpRequest();
}
function signIn() {

    // Chờ một khoảng thời gian ngắn trước khi chuyển trang
    setTimeout(function() {
        // Chuyển trang khi hiệu ứng đã hoàn thành
        window.location.href = 'login.html';
    }, 300);
}
function submitSignUp(){
    if(xmlHttp){
    //lấy dữ liệu
    console.log("hi");
    var username = document.getElementById('username');
    var name = document.getElementById('name')
    var password = document.getElementById('password');
    var result = document.getElementById('kq');
    var url = "/DuckyMomo/severPHP/signUpProcess.php";
    var post = "username=" + username.value + "&name=" + name.value + "&password=" + password.value;
    
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
                window.location.href = 'login.html';
                }
            else{result.innerHTML ="<p>" + xmlHttp.responseText + "</p>"}
            }
        } 
    } 
}