const login_btn = document.querySelector('.login-btn');

login_btn.addEventListener('click', function(){
    const username = document.querySelector('.username').value;
    const password = document.querySelector('.password').value;

    if (username === '' || password === '') {
        alert('Por favor, preencha todos os campos.');
        return;
    }

    if (username === 'admin' && password === 'admin') {
        window.location.href = '../pages/home.html';
    } else {
        alert('Usuário ou senha incorretos.');
    }
});