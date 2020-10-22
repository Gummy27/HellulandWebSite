let videoBlock = document.getElementById("videoPreviewSection").querySelectorAll("iframe");

function resizeVideoPreview() {
    let videoWidth = window.innerWidth*0.75/videoBlock.length-30;
    console.log(videoWidth);
    for(let i = 0; i < videoBlock.length; i++) {
        videoBlock[i].width = videoWidth;
        videoBlock[i].height = videoWidth*0.5625;
    }
}

resizeVideoPreview();

window.addEventListener('resize', resizeVideoPreview);