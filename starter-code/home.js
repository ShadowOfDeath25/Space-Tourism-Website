import {loadContent} from "./loadContent.js"

export const init = () => {
    const circle = document.querySelector(".circle");
    const navOptions = document.querySelectorAll(".nav-item");
    circle.addEventListener("click", e => {
        loadContent("destination");
        navOptions[0].classList.remove("active");
        navOptions[1].classList.add("active");
    });
}