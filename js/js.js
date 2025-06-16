const home_btn = document.querySelector('.home-btn')
const buscar_btn = document.querySelector('.buscar-btn')
const cadastro_btn = document.querySelector('.cadastro-btn')
const relatorio_btn = document.querySelector('.relatorio-btn')
const help_btn = document.querySelector('.help-btn')
const logout_btn = document.querySelector('.logout-btn')
const profile_btn = document.querySelector('.profile-btn')
const btMenu = document.querySelector('.sidebar-header-btn');
const return_btn = document.querySelector('.return-btn');
const titleMenu = document.querySelector('.sidebar-header-title');


home_btn.addEventListener('click', function() {
    window.location.href = '../pages/home.html';
});
buscar_btn.addEventListener('click', function() {
    window.location.href = '../pages/buscar.html';
});
cadastro_btn.addEventListener('click', function() {
    window.location.href = '../pages/cadastro.html';
});
relatorio_btn.addEventListener('click', function() {
    window.location.href = '../pages/relatorio.html';
});
help_btn.addEventListener('click', function() {
    window.location.href = '../pages/help.html';
});
logout_btn.addEventListener('click', function() {
    //adicionar modal de confirmação
    window.location.href = '../../index.html';
});
profile_btn.addEventListener('click', function() {
    window.location.href = '../pages/profile.html';
});

return_btn.addEventListener('click', function() {
    window.location.href = '../pages/home.html';
});


btMenu.addEventListener('click', (e)=>{
    e.preventDefault();
    toggleSidebar();
});
function toggleSidebar() {
    document.getElementById('sidebar').classList.toggle('collapsed');
    document.querySelector('.sidebar-header-title').style.display =
        document.getElementById('sidebar').classList.contains('collapsed') ? 'none' : '';
    document.querySelectorAll('.menu-item-title').forEach(el => {
        el.style.display = document.getElementById('sidebar').classList.contains('collapsed') ? 'none' : '';
    });
}

titleMenu.addEventListener('click', (e)=>{
    e.preventDefault();
});
