
function renderCart() {
    const cart = JSON.parse(localStorage.getItem('cart')) || [];
    const tbody = document.querySelector('tbody');
    tbody.innerHTML = ''; 

    cart.forEach((item, index) => {
        const row = document.createElement('tr');
        row.innerHTML = `
            <td>${item.title}</td>
            <td>${item.price.toLocaleString('vi-VN')} VNĐ</td>
            <td><input type="number" value="${item.quantity}" min="1" data-index="${index}" class="quantity-input"></td>
            <td>${(item.price * item.quantity).toLocaleString('vi-VN')} VNĐ</td>
            <td><button class="remove" data-index="${index}">Xóa</button></td>
        `;
        tbody.appendChild(row);
    });

    updateTotal(); 
}


function updateTotal() {
    const cart = JSON.parse(localStorage.getItem('cart')) || [];
    const total = cart.reduce((sum, item) => sum + item.price * item.quantity, 0);
    document.getElementById('total-price').innerText = total.toLocaleString('vi-VN') + ' VNĐ';
}


document.addEventListener('click', function (e) {
    if (e.target.classList.contains('remove')) {
        const index = e.target.getAttribute('data-index');
        let cart = JSON.parse(localStorage.getItem('cart')) || [];
        cart.splice(index, 1); 
        localStorage.setItem('cart', JSON.stringify(cart));
        renderCart();
    }
});


document.addEventListener('input', function (e) {
    if (e.target.classList.contains('quantity-input')) {
        const index = e.target.getAttribute('data-index');
        const newQuantity = parseInt(e.target.value);
        let cart = JSON.parse(localStorage.getItem('cart')) || [];
        if (newQuantity > 0) {
            cart[index].quantity = newQuantity;
        }
        localStorage.setItem('cart', JSON.stringify(cart));
        renderCart();
    }
});


document.addEventListener('DOMContentLoaded', renderCart);
