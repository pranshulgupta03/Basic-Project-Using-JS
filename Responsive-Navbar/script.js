const hamburger = document.querySelector('.hamburger');
const ul = document.querySelector('ul');

hamburger.addEventListener('click', () => {
    ul.classList.toggle('ham_active');

    let ham_child = hamburger.firstElementChild;
    if(ul.classList.contains('ham_active')) {
        ham_child.classList.replace('ri-menu-line', 'ri-close-line');
    }
    else {
        ham_child.classList.replace('ri-close-line', 'ri-menu-line');
    }
})