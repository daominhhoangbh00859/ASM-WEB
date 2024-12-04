

document.getElementById('registerForm').addEventListener('submit', function(event) {
    event.preventDefault(); 

    const username = document.getElementById('username').value;
    const password = document.getElementById('password').value;
    const confirmPassword = document.getElementById('confirmPassword').value;
    const phone = document.getElementById('phone').value;

    
    if (password !== confirmPassword) {
        alert('Mật khẩu xác nhận không khớp!');
        return;
    }

    
    const phonePattern = /^[0-9]{10,15}$/; 
    if (!phonePattern.test(phone)) {
        alert('Số điện thoại không hợp lệ!');
        return;
    }

    
    localStorage.setItem('username', username);
    localStorage.setItem('password', password);

    alert('Đăng ký thành công!');

    
    window.location.href = 'login.html';
});