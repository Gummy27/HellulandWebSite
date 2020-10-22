let slides = document.getElementsByClassName("slideInSlideshow");
let pictureIndex = 0;
let slideshowBody = document.getElementById("slideshowSection")

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
    let marginWindow = String((windowsWidth.offsetWidth - windowsWidth.offsetWidth*0.75) / 2-2)+'px';
    let buttonHeight = String(slides[pictureIndex].offsetHeight / 2 - 10)+'px';

    slideshowBody.style.paddingBottom = String(slides[pictureIndex].offsetHeight+30)+'px';

    document.getElementById("button-right").style.right = marginWindow;
    document.getElementById("button-left").style.left = marginWindow;

    document.getElementById("button-right").style.marginTop = buttonHeight;
    document.getElementById("button-left").style.marginTop = buttonHeight; 
}

window.addEventListener('resize', resizeButtons);