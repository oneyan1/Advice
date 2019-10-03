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

    let slideNum = 0;
    let slider = document.querySelectorAll(".reviews-slider");
    let prevBtn = document.querySelector(".left-arrow");
    let nextBtn = document.querySelector(".right-arrow");

    console.log(slider);
    function showSlide(slideNum){
        slider.forEach((item)=>{item.style.display = "none"});
        slider[slideNum].style.display = "flex";
        
    }

    showSlide(slideNum);

    nextBtn.addEventListener("click", ()=>{
        showSlide(slideNum+1);
    });
});

