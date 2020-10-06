let interface = document.getElementsByClassName("interface");

console.log(document.URL)
for(let i = 0; i < interface.length; i++) {
    if(document.URL == interface[i].href){
        if(interface[i].className == "interface dropdownLinks") {
            document.getElementById("dropdownParent").className = "current";
            console.log(interface[i].textContent)
            console.log("Yes");
        } else {
            interface[i].className = "current";
        }
    }
}