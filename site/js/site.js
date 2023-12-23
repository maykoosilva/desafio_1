const menuNav = window.document.getElementById("menu-mobile")

menuNav.addEventListener("click", animarMenu)

function animarMenu()
    {
        menuNav.classList.toggle('abrir')
    }