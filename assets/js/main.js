const showMenu = (toggleId, navId) => {
    const toggle = document.getElementById(toggleId),
        nav = document.getElementById(navId)

    if (toggle && nav) {
        toggle.addEventListener('click', () => {
            nav.classList.toggle('show')
        })
    }
}
showMenu('nav-toggle', 'nav-menu')

/*======REMOVER MENU MOBILE===*/
const navLInk = document.querySelectorAll('.nav__link')
function linkAction() {
    //Active link
    navLInk.forEach(n => n.classList.remove('active'))
    this.classList.add('active')
    //REMOVER MENU MOBIL
    const navMenu = document.getElementById('nav-menu')
    navMenu.classList.remove('show')
}
navLInk.forEach(n => n.addEventListener('click', linkAction))