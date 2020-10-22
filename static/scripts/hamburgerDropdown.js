function hamburgerClick() {
    let elementDisplay = document.getElementById("hamburgerDropdown").style.display;
    if(elementDisplay == "block") {
        document.getElementById("hamburgerDropdown").style.display = "none";
    } else if(elementDisplay == "" || elementDisplay == "none") {
        document.getElementById("hamburgerDropdown").style.display = "block";
    }
}

function hamburgerDropdownVerkefni() {
    let elementDisplay = document.getElementById("hamburgerDropdownDropdown").style.display;
    if(elementDisplay == "block") {
        document.getElementById("hamburgerDropdownDropdown").style.display = "none";
    } else if(elementDisplay == "" || elementDisplay == "none") {
        document.getElementById("hamburgerDropdownDropdown").style.display = "block";
    }
}