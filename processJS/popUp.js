// pop-up contact
document.addEventListener('DOMContentLoaded', function() {
// Khi người dùng nhấn vào nút, mở pop-up
var btn = document.getElementById("btn");
var modal = document.getElementById("myModal");
var span = document.getElementsByClassName("close")[0];

btn.onclick = function() {
  setTimeout(function() {
     modal.style.display = "block";
  }, 300);
}

// Đóng popup khi nhấn vào dấu x
span.onclick = function() {
  modal.style.display = "none";
}

// Đóng popup khi nhấn bên ngoài pop-up
window.onclick = function(event) {
  if (event.target == modal) {
    modal.style.display = "none";
  }
}
});

//Pop-up hồ sơ
document.addEventListener('DOMContentLoaded', function() {
  // Khi người dùng nhấn vào nút, mở pop-up
  var hoSo = document.getElementById("hoSo");
  var pophs = document.getElementById("popUpHS");
  var close = document.getElementsByClassName("closehs")[0];
  
  hoSo.onclick = function() {
    setTimeout(function() {
      pophs.style.display = "block";
    }, 300);
  }
  
  // Đóng popup khi nhấn vào dấu x
  close.onclick = function() {
    pophs.style.display = "none";
  }
  
  // Đóng popup khi nhấn bên ngoài pop-up
  window.onclick = function(event) {
    if (event.target == pophs) {
      pophs.style.display = "none";
    }
  }
  });