document.addEventListener('DOMContentLoaded', function() {
    var collect1 = document.getElementById('collect1');
    var collect2 = document.getElementById('collect2');
    var collect3 = document.getElementById('collect3');
    
    //Collect 1
    collect1.addEventListener('click', function(event) {
            window.location.href = '../viewProduct/collect1.html';
    });
    //Collect 2
    collect2.addEventListener('click', function(event) {
            window.location.href = '../viewProduct/collect2.html';
    });
    //Collect 3
    collect3.addEventListener('click', function(event) {
            window.location.href = '../viewProduct/collect3.html';
    });
});
