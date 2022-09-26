
const hamburger = document.querySelector(".Hamburger_menu");
const navMenu = document.querySelector(".site_navigations ul li");

hamburger.addEventListener("click", () => {
    navMenu.classList.toggle("active");
})


/*
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
*/

