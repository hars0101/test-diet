// Add the scroll effect
window.onscroll = function() {
    let navbar = document.querySelector('.sticky-navbar');
    if (window.pageYOffset > 50) {
        navbar.classList.add('scrolled');
    } else {
        navbar.classList.remove('scrolled');
    }
};
// Navbar scroll behavior
window.addEventListener('scroll', function () {
    const navbar = document.querySelector('.sticky-navbar');
    if (window.scrollY > 50) {
        navbar.classList.add('scrolled');
    } else {
        navbar.classList.remove('scrolled');
    }
});
