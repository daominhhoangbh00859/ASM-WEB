

document.getElementById('loginForm').addEventListener('submit', function(event) {
    event.preventDefault(); 

    const username = document.getElementById('username').value;
    const password = document.getElementById('password').value;

  
    const storedUsername = localStorage.getItem('username');
    const storedPassword = localStorage.getItem('password');


    if (username === storedUsername && password === storedPassword) {
        alert('Đăng nhập thành công!');
        window.location.href = 'main.html';
        
    } else {
        alert('Tên người dùng hoặc mật khẩu không đúng!');
    }
});