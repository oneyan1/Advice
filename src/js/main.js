window.addEventListener("DOMContentLoaded", ()=>{
    "use strict";

    let btn = document.querySelectorAll(".button-modal");
    let popup = document.querySelector(".popup");
    let modalClose = popup.querySelector("#close");

    btn.forEach((item)=>{
        item.addEventListener("click", ()=>{
            popup.classList.add("popup-active");
        });
    });

    modalClose.addEventListener("click", ()=>{
        popup.classList.remove("popup-active");
    });
});