function resizeDropDown() {
    let width = (window.innerWidth - 960) / 2;
    dropDown = document.getElementById("dropdown");
    dropDown.style.right = width+10;
}

resizeDropDown();
window.addEventListener('resize', resizeDropDown);



