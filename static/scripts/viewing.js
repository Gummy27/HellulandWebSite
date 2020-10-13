let interface = document.getElementsByClassName("interface");

console.log(document.URL)
for(let i = 0; i < interface.length; i++) {
    if(document.URL == interface[i].href){
        if(interface[i].className == "interface dropdownLinks") {
            document.getElementById("dropdownParent").className = "mainLinks interface current";
            interface[i].className = "interface dropdownLinks current";
        } else {
            interface[i].className = "mainLinks interface current";
        }
    }
}