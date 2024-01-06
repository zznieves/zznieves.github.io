
window.addEventListener('scroll', function() {

    let navbar = document.getElementById('navbar');
    let scrolled = this.window.scrollY > 0;

    // if the user has scrolled down, add the class to the navbar
    if(scrolled) {
        navbar.classList.add('scrolled');
    }
    // if in vertical position 0, remove the scrolled class from navbar
    else {
        navbar.classList.remove('scrolled');
    }
});

function transport(target) {

    const navbarHeight = document.getElementById('navbar').offsetHeight;
    const targetElement = document.getElementById(target);

    // if the target is the home section, go to vertical position 0 (the absolute top of the webpage)
    if(target === 'home') {

        setTimeout(() => {
            window.scrollTo({
                top: 0,
                behavior: 'instant'
            });
        }, 50);
    }
    // any other sections, calculate the offset position and scroll to it
    else if(targetElement) {
        
        const offsetPosition = targetElement.offsetTop - navbarHeight;

        setTimeout(() => {
            window.scrollTo({
                top: offsetPosition,
                behavior: 'instant'
            });
        }, 50);
    }
}