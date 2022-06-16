/*===== MENU SHOW =====*/ 
const  showMenu = (toggleId, navId) => {
    const toggle = document.getElementById(toggleId),
          nav = document.getElementById(navId);
    
        if (toggle && nav) {
            toggle.addEventListener('click', () => {
                nav.classList.toggle('show');
            });
        };
};

showMenu('nav-toggle', 'nav-menu');

/*===== REMOVE MENU MOBILE =====*/
const navLinks = document.querySelectorAll('.nav__link');

function linkAction() {
    // Active Link
    navLinks.forEach(navLink => navLink.classList.remove('active'));
    this.classList.add('active');

    // Remove Menu Mobile
    const navMenu = document.getElementById('nav-menu');
    navMenu.classList.remove('show');
};

navLinks.forEach(navLink => navLink.addEventListener('click', linkAction));