document.addEventListener('DOMContentLoaded', function() {
    var blog1 = document.getElementById('blog1');
    var blog2 = document.getElementById('blog2');
    var blog3 = document.getElementById('blog3');
    
    //Blog 1
    blog1.addEventListener('click', function(event) {
            window.location.href = '../blog/blog1.html';
    });
    //Blog 2
    blog2.addEventListener('click', function(event) {
            window.location.href = '../blog/blog2.html';
    });
    //Blog 3
    blog3.addEventListener('click', function(event) {
            window.location.href = '../blog/blog3.html';
    });
});
