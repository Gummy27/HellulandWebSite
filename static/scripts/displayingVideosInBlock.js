function resizeVideoPreview() {
    let videoBlock = document.getElementById("videoPreviewSection").querySelectorAll("iframe");
    let windowsWidth = document.querySelector("header").offsetWidth;
    let videoWidth;

    if(windowsWidth > 1440) {
        videoWidth = (window.innerWidth - (window.innerWidth-1440))/videoBlock.length-30;
    } else {
        videoWidth = window.innerWidth/videoBlock.length-30;
    }

    for(let i = 0; i < videoBlock.length; i++) {
        videoBlock[i].width = videoWidth;
        videoBlock[i].height = videoWidth*0.5625;
    }
}

resizeVideoPreview();
window.addEventListener('resize', resizeVideoPreview);