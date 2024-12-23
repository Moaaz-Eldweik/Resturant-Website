const menuIcon = document.querySelector('#menu-icon'); 
const navList = document.querySelector('.navlist');

menuIcon.addEventListener('click', () => {
    // Toggle class for menu icon to change its appearance
    menuIcon.classList.toggle('bx-x');
    
    // Toggle class for navlist to show/hide the menu
    if (navList.classList.contains('open')) {
        navList.classList.remove('open');
    } else {
        navList.classList.add('open');
    }
});