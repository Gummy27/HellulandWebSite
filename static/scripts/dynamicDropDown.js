let dropDown = document.getElementById("dropdown");
let links = dropDown.querySelectorAll('a');
let windowsWidth = document.querySelector("header");

let maxWidth = 0;

function resizeDropDown() {
    dropDownRight = (windowsWidth.offsetWidth - windowsWidth.offsetWidth*0.9) / 2;
    dropDown.style.right = dropDownRight;
    console.log(windowsWidth.offsetWidth, dropDownRight)

    maxWidth = document.getElementById("logo").offsetWidth;
    for(let i = 0; i < links.length; i++) {
        links[i].style.width = maxWidth;
    }
}

resizeDropDown();
window.addEventListener('resize', resizeDropDown);