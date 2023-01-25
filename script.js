const toggleButton = document.getElementsByClassName('toggle-button')[0]
const navbarLinks = document.getElementsByClassName('navbar-links')[0]

toggleButton.addEventListener('click', () => {
  navbarLinks.classList.toggle('active')
})
document.getElementById('input').addEventListener('change', () => {

if (document.body.className.indexOf('dark') == -1) {
    document.body.classList.add('dark')
}
    else {
        document.body.classList.remove('dark')
    }

})