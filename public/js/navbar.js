// const hamburger = document.getElementById("menu-toggle");
// const navContainer = document.getElementById("navbar");
// const close = document.getElementById("close-menu");
// hamburger.onclick = ()=>{
//     navContainer.classList.add("active");
// }
// close.onclick = ()=>{
//     navContainer.classList.remove("active");
// }

const hamburger = document.getElementById("hamburger");

const navContainer = document.getElementById("nav-container");

const close = document.getElementById("close");


hamburger.onclick = ()=>{

    navContainer.classList.add("active");

}


close.onclick = ()=>{

    navContainer.classList.remove("active");

}