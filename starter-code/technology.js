import {fadeIn, fadeOut} from "./animations.js";

export const init = async () => {
    const data = await fetch("./data.json").then((response) => response.json());
    const optionsContainer = document.querySelector(".options");
    data["technology"].forEach((item, index) => {
        let el = document.createElement("div");
        el.classList.add("circle-option");
        el.innerText = index + 1;
        el.addEventListener("click", e => {
            const options = document.querySelectorAll(".circle-option");
            options.forEach((element) => {
                element.classList.remove("active");
            })
            el.classList.add("active");
            displayData(data["technology"][index]);
        });
        if (index === 0) {
            el.classList.add("active");
        }
        optionsContainer.appendChild(el);
    })
    displayData(data["technology"][0]);

}
export const displayData = (target) => {
    const img = document.querySelector(".hero-img");
    const techName = document.querySelector(".tech-name");
    const techDesc = document.querySelector(".tech-desc");
    const details = document.querySelector(".details");
    let fadeDetails = fadeOut(details);
    let fadeImg = fadeOut(img);
    Promise.all([fadeDetails, fadeImg]).then(() => {
        if (window.innerWidth < 768 || window.innerWidth >= 1440) {
            img.src = target["images"]["portrait"];
        } else {
            img.src = target["images"]["landscape"];
        }
        techName.innerText = target["name"].toUpperCase();
        techDesc.innerText = target["description"];
    }).then(() => {
        fadeIn(img);
        fadeIn(details);

    })
}