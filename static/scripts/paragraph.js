let paragraphs = document.getElementsByClassName("projectsText");

for(let i = 0; i < paragraphs.length; i++) {
    disable = paragraphs[i].getElementsByTagName('p');
    for(let x = 1; x < disable.length; x++) {
        disable[x].style.display = "none";
    }
}