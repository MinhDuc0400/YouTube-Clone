
var sideNav = document.querySelector('.sidenav')
var bigNav = document.querySelectorAll('.big-nav');
var container = document.querySelector('.videos');
function myFunction() {
    bigNav.forEach(element => {
        element.classList.toggle('hide')
    });

    sideNav.classList.toggle("small-sidenav")

    container.classList.toggle("big-container")

}

