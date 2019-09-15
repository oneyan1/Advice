window.addEventListener("DOMContentLoaded", ()=>{
    "use strict";

    let btn = document.querySelectorAll(".button-modal");
    let popup = document.querySelector(".popup");
    let modalClose = popup.querySelector("#close");
    let certificateImgSmall = document.querySelector("#certificate-small");
    let certificateImgFull = document.querySelector("#certificate-full");
    let overlay = document.querySelector(".overlay");

    btn.forEach((item)=>{
        item.addEventListener("click", ()=>{
            popup.classList.add("popup-active");
        });
    });

    modalClose.addEventListener("click", ()=>{
        popup.classList.remove("popup-active");
    });

    certificateImgSmall.addEventListener("click", ()=>{
        overlay.style.display = "flex";
    });

    overlay.addEventListener("click", (event)=>{
        if(event.target === overlay.querySelector("img")){
            overlay.querySelector("img").style.height = "100%";
        }
        else{
            overlay.style.display = "none";
        } 
    });

    let slider = document.querySelector(".reviews-slider");
    let sliderNonActive = document.querySelectorAll(".reviews-slider-nonactive");
    let prevBtn = slider.querySelector(".left-arrow");
    let nextBtn = slider.querySelector(".right-arrow");

    nextBtn.addEventListener("click", ()=>{
        
        sliderNonActive.forEach((item)=>{
            slider.classList.remove("reviews-slider");
            slider.classList.add("reviews-slider-nonactive");
            item.classList.remove("reviews-slider-nonactive");
            item.classList.add("reviews-slider");
        })
        // slider.classList.remove("reviews-slider");
        // slider.classList.add("reviews-slider-nonactive");
        // sliderNonActive[0].classList.remove("reviews-slider-nonactive");
        // sliderNonActive[0].classList.add("reviews-slider");
    });
});

