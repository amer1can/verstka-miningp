const iconMenu = document.querySelector('.icon-menu')
const menu = document.querySelector('.header__menu')

iconMenu.addEventListener('click', ()=> {
    iconMenu.classList.toggle('active')
    menu.classList.toggle('show')
    document.body.classList.toggle('fixed')
})

document.addEventListener('click', (e) => {
    const menuBoundaries = e.composedPath().includes(menu);
    const menuIconBoundaries = e.composedPath().includes(iconMenu);

    if ( !menuBoundaries && !menuIconBoundaries) {
        iconMenu.classList.remove('active')
        menu.classList.remove('show')
        document.body.classList.remove('fixed')
    }
})

