
var sideNav = document.querySelector('.sidenav')
var bigNav = document.querySelectorAll('.big-nav');
var container = document.querySelector('.videos');


document.querySelector('#main').addEventListener('click', closeNav);
function closeNav(){
    if(!sideNav.classList.contains('small-sidenav') && !container.classList.contains('big-container')){
        console.log("sidenav opening");
        sideNav.classList.add("small-sidenav");
        container.classList.add("big-container");
        bigNav.forEach(element =>{
            element.classList.add('hide')
        });
    }
}

function myFunction() {
    bigNav.forEach(element => {
        element.classList.toggle('hide')
    });

    sideNav.classList.toggle("small-sidenav")

    container.classList.toggle("big-container")

}




