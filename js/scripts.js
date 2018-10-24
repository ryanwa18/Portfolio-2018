function toggleMenu(x) {
    x.classList.toggle("change");
    var menu = document.getElementById('nav-list');
    if (menu.style.display === 'none') {
        menu.style.display = 'flex';
    }
    else {
        menu.style.display = 'none';
    }
}