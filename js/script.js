const menuItems = document.querySelector(".Hamburger_menu");

menuItems.style.dis  play: "none";

function menutoggle () {
    if(menuItems.style.maxHeight == "0px")
    {
        menuItems.style.maxHeight = "200px"
    }
    else
    {
        menuItems.style.maxHeight = "0px"
    }
}

