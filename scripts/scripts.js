document.addEventListener('DOMContentLoaded', function() {
    const hamburgerMenu = document.querySelector('.hamburger-menu');
    const mainNav = document.querySelector('.main-nav');
    
    hamburgerMenu.addEventListener('click', function() {
        this.classList.toggle('active');
        mainNav.classList.toggle('active');
    });
    
    // Fechar o menu ao clicar em um link
    const navLinks = document.querySelectorAll('.main-nav a');
    navLinks.forEach(link => {
        link.addEventListener('click', function() {
            hamburgerMenu.classList.remove('active');
            mainNav.classList.remove('active');
        });
    });
    
    // Fechar o menu ao clicar fora dele
    document.addEventListener('click', function(event) {
        if (!hamburgerMenu.contains(event.target) && !mainNav.contains(event.target)) {
            hamburgerMenu.classList.remove('active');
            mainNav.classList.remove('active');
        }
    });
});