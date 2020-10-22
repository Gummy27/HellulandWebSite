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

function resizeSlideshow() {
    let windowsWidth = document.querySelector("header").offsetWidth;

    let imageWidth;
    let imageRight;
    if(windowsWidth > 1440) { 
        let windowMargin = windowsWidth - 1440;
        
        imageWidth = windowsWidth - windowMargin;
        imageRight = windowMargin / 2;

        console.log(windowMargin);
        document.getElementById("button-right").style.right = (windowMargin/2-20)+'px';
        document.getElementById("button-left").style.left = (windowMargin/2-20)+'px';

    } else {
        imageWidth = windowsWidth-20;
        imageRight = 10;

        document.getElementById("button-right").style.right = 0;
        document.getElementById("button-left").style.left = 0;
    }

    for(let i = 0; i < slides.length; i++) {
        slides[i].querySelector("img").style.width = imageWidth+'px';
        slides[i].style.right = imageRight+'px';
    }

    slideshowBody.style.paddingBottom = String(slides[pictureIndex].offsetHeight+30)+'px';


    let buttonHeight = String(slides[pictureIndex].offsetHeight / 2 - 25)+'px';

    document.getElementById("button-right").style.marginTop = buttonHeight;
    document.getElementById("button-left").style.marginTop = buttonHeight; 
}

window.addEventListener('resize', resizeSlideshow);