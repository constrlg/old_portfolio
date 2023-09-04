// const hambuger_menu_btn = document.querySelector("#hamburger-menu-btn");
// const nav_menu_list = document.querySelector(".nav-menu-list");
// const nav_menu_list2 = document.querySelectorAll(".nav-menu-list");
// const nav = document.querySelector("#nav");
// const mouse_scroll_up = document.querySelector(".mouse-scroll-up");
// const loader = document.querySelector(".loader");

// setTimeout(() => {
//     document.querySelector(".loader").classList.add("loader-hidden");
// }, 2000);

window.addEventListener("scroll", () => {
    document.querySelector("#nav").classList.toggle("nav-active", scrollY > 0);
    document.querySelector(".mouse-scroll-up").classList.toggle("mouse-scroll-up-active", scrollY > 500);
});

// document.querySelectorAll(".nav-menu-list").forEach(n => n.addEventListener("click", () => {
//     document.querySelector("#hamburger-menu-btn").classList.remove("hamburger-menu-btn-active");
//     document.querySelector(".nav-menu-list").classList.remove("nav-menu-list-active");
// }));

document.querySelector("#hamburger-menu-btn").addEventListener("click", () => {
    document.querySelector("#hamburger-menu-btn").classList.toggle("hamburger-menu-btn-active");
    document.querySelector(".nav-menu-list").classList.toggle("nav-menu-list-active");
});

document.querySelector(".mouse-scroll-up").addEventListener("click", () => {
    window.scrollTo({
        top: 0
    });
});

window.addEventListener("resize", () => {
    if(window.innerWidth > 768)
    {
        document.querySelector("#hamburger-menu-btn").classList.remove("hamburger-menu-btn-active");
        document.querySelector(".nav-menu-list").classList.remove("nav-menu-list-active");
    }
});


// function typing_loader() {
//     var i = 0;
//     var loader_title_text = "Ricardo L. Garcia";

//     function typing_loader_title() {
//         if(i < loader_title_text.length) 
//         {
//             document.querySelector(".loader-title").textContent += loader_title_text.charAt(i);
//             i++;
//             setTimeout(typing_loader_title, 80);
//         }
//     }
//     typing_loader_title();
// }
// typing_loader();

