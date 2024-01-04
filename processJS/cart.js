//Thêm sản phẩm vào giỏ hàng
function addToCart(productId) {
    var productName = document.getElementById('productName' + productId).textContent;
    var productPrice = document.getElementById('productPrice' + productId).textContent;
    var productImage = document.getElementById('productImage' + productId).src;
    var productData = {
        id: productId,
        name: productName,
        price: productPrice,
        image: productImage,
    };

    fetch('../severPHP/cartHandler.php', {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json',
        },
        body: JSON.stringify(productData),
    })
    .then(response => response.json())
    .then(data => {
        console.log('Success:', data);
        updateCartInterface(); // Cập nhật giao diện giỏ hàng
    })
    .catch((error) => {
        console.error('Error:', error);
    });
}
function checkOutBut() {
    // Gửi yêu cầu đến server để xóa session
    fetch('../severPHP/checkOut.php', { method: 'POST' })
    .then(response => response.json())
    .then(data => {
        if (data.status === 'success') {
            // Hiển thị thông báo đặt hàng thành công
            alert('Đặt hàng thành công!');
            // Chuyển hướng người dùng hoặc làm mới trang
            window.location.href = '../view/index.html';
        } else {
            // Xử lý lỗi hoặc thông báo
            alert('Có lỗi xảy ra, vui lòng thử lại.');
        }
    })
    .catch(error => {
        console.error('Error:', error);
    });
}

function checkOut() {
    window.location.href = "../view/checkOut.html";
}
function updateCartInterface() {
    fetchCartData().then(cartData => {
        var cartDetails = document.querySelector('.cartDetail');
        cartDetails.innerHTML = ''; // Xóa nội dung hiện tại

        if (cartData.products && cartData.products.length > 0) {
            // Duyệt qua từng sản phẩm và thêm vào giao diện
            cartData.products.forEach(product => {
                product.quantity = product.quantity || 1;
                var productElement = document.createElement('div');
                productElement.className = 'cart-product';
                productElement.innerHTML = `
                    <div class="cart-product-img">
                        <img src="${product.image}" alt="${product.name}">
                    </div>
                    <div class="cart-product-info">
                        <div class="cart-product-name">${product.name}</div>
                        <div class="cart-product-quantity">Số lượng: ${product.quantity}</div>
                        <div class="cart-product-price">${product.price}</div>
                    </div>
                `;
                cartDetails.appendChild(productElement);
            });

            // Thêm nút thanh toán
            cartDetails.innerHTML += '<button class="checkout-button" onclick="checkOut()">Thanh toán</button>';
        } else {
            // Hiển thị thông báo nếu không có sản phẩm
            cartDetails.innerHTML = 'Không có sản phẩm trong giỏ hàng';
        }

        // Cập nhật số lượng sản phẩm hiển thị
        var itemCount = document.querySelector('.item-count');
        itemCount.textContent = cartData.totalQuantity || 0;
    });
}

function fetchCartData() {
    return fetch('../severPHP/cartHandler.php')
        .then(response => {
            if (!response.ok) {
                throw new Error('Network response was not ok');
            }
            return response.text();
        })
        .then(text => {
            if (!text) {
                throw new Error('Empty response from server');
            }
            try {
                return JSON.parse(text);
            } catch (error) {
                console.error('Error parsing JSON:', error);
                return null;
            }
        })
        .catch(error => console.error('Error:', error));
}


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
                        <div class="product-price">Đơn giá: ${product.price}</div>
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