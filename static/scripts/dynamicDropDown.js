function resizeDropDown() {
    let windowsWidth = document.querySelector("header").offsetWidth;
    let dropDown = document.getElementById("dropdown");
    let links = dropDown.querySelectorAll('a');

    if(windowsWidth > 1440) {
        dropDown.style.right = String((windowsWidth - 1440) / 2)+'px';
    } else {
        dropDown.style.right = '0';
    }

    let maxWidth = document.getElementById("logo").offsetWidth;
    for(let i = 0; i < links.length; i++) {
        links[i].style.width = maxWidth+'px';
    }
}

window.addEventListener('resize', resizeDropDown);