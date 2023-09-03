const windowWeigth = window.innerWidth;
const navbarCollapse = document.querySelector("#items-nav")
if(windowWeigth < 930){
    navbarCollapse.setAttribute("class", `collapse navbar-collapse ${navbarCollapse.getAttribute("class")}`)
}
