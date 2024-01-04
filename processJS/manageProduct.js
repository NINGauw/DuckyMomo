document.addEventListener('DOMContentLoaded', function() {
    // Attach a click event listener to the product card
    var productCard1 = document.getElementById('product1');
    var productCard2 = document.getElementById('product2');
    var productCard3 = document.getElementById('product3');
    var productCard4 = document.getElementById('product4');
    
    //Product 1
    productCard1.addEventListener('click', function(event) {
        // Check if the clicked element or its parents is not the buy-button
        var isBuyButton = event.target.classList.contains('buy-button') || 
                          event.target.closest('.buy-button');
        
        // If not the buy-button, navigate to the desired file
        if (!isBuyButton) {
            window.location.href = '../viewProduct/product1.html';
        }
    });
    //Product 2
    productCard2.addEventListener('click', function(event) {
        // Check if the clicked element or its parents is not the buy-button
        var isBuyButton = event.target.classList.contains('buy-button') || 
                          event.target.closest('.buy-button');
        
        // If not the buy-button, navigate to the desired file
        if (!isBuyButton) {
            window.location.href = '../viewProduct/product2.html';
        }
    });
    //Product 3
    productCard3.addEventListener('click', function(event) {
        // Check if the clicked element or its parents is not the buy-button
        var isBuyButton = event.target.classList.contains('buy-button') || 
                          event.target.closest('.buy-button');
        
        // If not the buy-button, navigate to the desired file
        if (!isBuyButton) {
            window.location.href = '../viewProduct/product3.html';
        }
    });
    //Product 4
    productCard4.addEventListener('click', function(event) {
        // Check if the clicked element or its parents is not the buy-button
        var isBuyButton = event.target.classList.contains('buy-button') || 
                          event.target.closest('.buy-button');
        
        // If not the buy-button, navigate to the desired file
        if (!isBuyButton) {
            window.location.href = '../viewProduct/product4.html';
        }
    });
});
