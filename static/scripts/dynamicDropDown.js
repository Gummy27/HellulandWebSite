function toggleDropdown() {
    let dropDown = document.getElementById("dropdown");
    if(!dropDown.classList.contains("dropdownAnimation")) {
        document.getElementsByClassName("dropdownActivate")[0].classList.add("verkefniLinkActive");
        dropDown.classList.add("dropdownAnimation");
    } else {
        dropDown.classList.remove("dropdownAnimation");
        document.getElementsByClassName("dropdownActivate")[0].classList.remove("verkefniLinkActive");
    }
}

function resizeDropDown() {
    let dropDown = document.getElementById("dropdown");
    let links = dropDown.querySelectorAll('a');

    let maxWidth = document.getElementById("logo").offsetWidth;
    console.log(maxWidth);
    for(let i = 0; i < links.length; i++) {
        links[i].style.width = maxWidth+'px';
    }
}

window.addEventListener('resize', resizeDropDown);