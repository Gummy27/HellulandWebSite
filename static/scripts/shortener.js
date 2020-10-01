let textar = document.getElementsByClassName("projectText");

textBlock = "";
shortened = "";

for(let x = 0; x < textar.length; x++){
    textBlock = new String(textar[x].textContent);
    for(let i = 0; i < textBlock.length; i++) {
        console.log(i);
    }
}