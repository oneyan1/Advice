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


    let slideIndex = 0;
    let slider = document.querySelectorAll(".reviews-slider");
    let prevBtn = document.querySelector(".left-arrow");
    let nextBtn = document.querySelector(".right-arrow");

    showSlide(slideIndex);
    
    function showSlide(slideNum){
        if(slideNum > slider.length-1){
            slideIndex = 0;
        }
        if(slideNum < 0){
            slideIndex = slider.length-1;
        }

        slider.forEach((item)=> item.style.display = "none");
        slider[slideIndex].style.display = "flex";
        
    }

    function plusSlide(slideNum){
        showSlide(slideIndex += slideNum);
    }

    nextBtn.addEventListener("click", ()=>{
        slider.forEach((item)=>{
            item.classList.remove("animate-slider-left");
            item.classList.add("animate-slider-right");
        });
        plusSlide(1);
    });

    prevBtn.addEventListener("click", ()=>{
        slider.forEach((item)=>{
            item.classList.remove("animate-slider-right");
            item.classList.add("animate-slider-left");
        });
        plusSlide(-1);
    });

});

