let interface = document.getElementsByClassName("interface");

console.log(document.URL)
for(let i = 0; i < interface.length; i++) {
    if(document.URL == interface[i].href){
        interface[i].className = "current";
    }
}