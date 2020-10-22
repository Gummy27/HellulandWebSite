let dropDown = document.getElementById("dropdown");
let links = dropDown.querySelectorAll('a');
let windowsWidth = document.querySelector("header");

let maxWidth = 0;

function resizeDropDown() {
    dropDownRight = String((windowsWidth.offsetWidth - windowsWidth.offsetWidth*0.75) / 2)+'px';
    dropDown.style.right = dropDownRight;

    maxWidth = document.getElementById("logo").offsetWidth;
    for(let i = 0; i < links.length; i++) {
        links[i].style.width = maxWidth+'px';
    }
}

window.addEventListener('resize', resizeDropDown);