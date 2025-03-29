document.addEventListener('DOMContentLoaded', function() {
    const menuButton = document.getElementById('menu-button');
    const menuDropdown = document.querySelector('.menu-dropdown');

    menuButton.addEventListener('click', function() {
        menuDropdown.classList.toggle('active');
    });

    // Close menu when clicking outside
    document.addEventListener('click', function(event) {
        if (!menuButton.contains(event.target) && !menuDropdown.contains(event.target)) {
            menuDropdown.classList.remove('active');
        }
    });

    // Add hover effects for menu items
    const menuItems = document.querySelectorAll('.menu-dropdown a');
    menuItems.forEach(item => {
        item.addEventListener('mouseenter', function() {
            item.classList.add('text-blue-500');
        });
        item.addEventListener('mouseleave', function() {
            item.classList.remove('text-blue-500');
        });
    });
});
document.addEventListener('DOMContentLoaded', function() {
    const nav = document.querySelector('nav');
    const body = document.body;
    const navHeight = nav.offsetHeight;
    
    window.addEventListener('scroll', () => {
        if (window.scrollY > 0) {
            nav.classList.add('sticky-nav');
            body.classList.add('nav-padding');
        } else {
            nav.classList.remove('sticky-nav');
            body.classList.remove('nav-padding');
        }
    });
});