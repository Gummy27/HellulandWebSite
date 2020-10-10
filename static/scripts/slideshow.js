let slides = document.getElementsByClassName("slideInSlideshow");
let index = 0;

slides[index].style.display = "block";
function showNextPrevSlide(action) {
    if(index+action < slides.length && index+action >= 0) {
        slides[index].style.display = "none";
        index = index + action;
        slides[index].style.display = "block";
    }
}

function resizeDropDown() {
    let width = (window.innerWidth - 960) / 2;
    document.getElementsByClassName("button-right").style.width = width;

    dropDown.style.right = width+35;
}

resizeButtons();
window.addEventListener('resize', resizeButtons());