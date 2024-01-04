function updateProductInfo() {
    fetchCartData().then(cartData => {
        var productInfoContainer = document.querySelector('.payment-container .product-info');
        
        if (cartData.products && cartData.products.length > 0) {
            productInfoContainer.innerHTML = ''; // Xóa nội dung hiện tại

            cartData.products.forEach(product => {
                var productDetails = `
                    <div class="product-detail">
                        <img src="${product.image}" alt="${product.name}">
                        <div class="product-name">${product.name}</div>
                        <div class="product-quantity">Số lượng: ${product.quantity}</div>
                        <div class="product-price">Giá: ${product.price}</div>
                    </div>
                `;
                productInfoContainer.innerHTML += productDetails;
            });
        } else {
            productInfoContainer.innerHTML = 'Không có sản phẩm trong giỏ hàng';
        }
    })
    .catch(error => {
        console.error('Error:', error);
        productInfoContainer.innerHTML = 'Lỗi khi tải thông tin sản phẩm';
    });
}