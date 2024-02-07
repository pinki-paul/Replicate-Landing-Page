// navbar toggle

let nav = document.querySelector(".navbar");

document.onscroll = () =>{
    if (document.documentElement.scrollTop > 20) {
        nav.classList.add("header-scrolled");
    }else{
        nav.classList.remove("header-scrolled");
    }
}

// hide nav menu to click nav links

let navLink = document.querySelectorAll(".nav-link");
let navCollapse = document.querySelector(".collapse.navbar-collapse");

navLink.forEach((a) =>{
    a.addEventListener("click", ()=> {
        navCollapse.classList.remove("show");
    })
})