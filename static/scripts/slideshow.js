let slides = document.getElementsByClassName("slideInSlideshow");
let pictureIndex = 0;
slides[pictureIndex].style.display = "block";
slides[0].style.display = "block";

function showNextPrevSlide(action) {
    if(pictureIndex+action < slides.length && pictureIndex+action >= 0) {
        slides[pictureIndex].style.display = "none";
        pictureIndex = pictureIndex + action;
        slides[pictureIndex].style.display = "block";
    }
}

function resizeButtons() {
    let windowsWidth = document.querySelector("header");

    let marginWindow = (windowsWidth.offsetWidth - windowsWidth.offsetWidth*0.9) / 2;

    document.getElementById("button-right").style.right = marginWindow;
    document.getElementById("button-left").style.left = marginWindow;

    let buttonHeight = slides[pictureIndex].querySelector("img").offsetHeight / 2 - 10;
    document.getElementById("button-right").style.marginTop = buttonHeight;
    document.getElementById("button-left").style.marginTop = buttonHeight;
    
}

console.log(slides[pictureIndex].querySelector("img").height);
resizeButtons();
window.addEventListener('resize', resizeButtons());