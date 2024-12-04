
document.querySelectorAll('.add-to-cart').forEach(button => {
    button.addEventListener('click', function () {
      
        const product = this.closest('.book-item');
        const title = product.querySelector('h3').innerText;
        const price = parseInt(product.querySelector('.chapters').innerText.replace(/[^0-9]/g, ''));

        
        const item = {
            title: title,
            price: price,
            quantity: 1
        };

       
        let cart = JSON.parse(localStorage.getItem('cart')) || [];

        
        const existingItem = cart.find(product => product.title === item.title);
        if (existingItem) {
            existingItem.quantity += 1; 
        } else {
            cart.push(item); 
        }

        
        localStorage.setItem('cart', JSON.stringify(cart));
        alert(`${title} đã được thêm vào giỏ hàng!`);
    });
});
