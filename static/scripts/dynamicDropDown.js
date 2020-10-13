function resizeDropDown() {
    dropDown = document.getElementById("dropdown");
    links = dropDown.querySelectorAll('a');

    let dropDownRight = document.querySelector("header").offsetWidth;
    dropDownRight = (dropDownRight - dropDownRight*0.9) / 2;

    dropDown.style.right = dropDownRight;
    console.log(dropDownRight)

    maxWidth = 342.533;
    padding = String((maxWidth-100)/2-0.1)+'px';

    // dropDown.style.left = dropDownRight-43;
    for(let i = 0; i < links.length; i++) {
        links[i].style.paddingRight = padding;
        links[i].style.paddingLeft = padding;
    }
}

resizeDropDown();
window.addEventListener('resize', resizeDropDown);