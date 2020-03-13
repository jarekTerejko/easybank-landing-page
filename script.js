const navBtn = document.querySelector(".navbar__nav-trigger")
const navList = document.querySelector(".navbar__nav-list")


navBtn.addEventListener("click", ()=> {
    navList.classList.toggle("active")
    if(navList.classList.contains("active")){
        navBtn.firstElementChild.src = "images/icon-close.svg"

    } else{
        navBtn.firstElementChild.src = "images/icon-hamburger.svg"
    }
})