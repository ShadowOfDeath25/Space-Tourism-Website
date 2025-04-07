import {fadeIn, fadeOut} from "./animations.js";

export const init = async () => {
    let jsonData = await fetch("./data.json").then((res) => res.json());
    const optionsContainer = document.querySelector(".options");
    jsonData["destinations"].forEach((item, index) => {
        let el = document.createElement("div");
        el.classList.add("option");
        el.innerText = item.name.toUpperCase();
        el.addEventListener("click", e => {
            const options = document.querySelectorAll(".option");
            options.forEach((element) => {
                element.classList.remove("active");
            })
            el.classList.add("active");
            displayData(jsonData["destinations"][index]);
        });
        if (index === 0) {
            el.classList.add("active");
        }
        optionsContainer.appendChild(el);
    })
    displayData(jsonData["destinations"][0])
}
export const displayData = (target) => {
    const stats = document.querySelectorAll(".stat-value");
    const img = document.querySelector(".hero-image");
    const destDesc = document.querySelector(".dest-desc");
    const bottomSide = document.querySelector(".bottom-side");
    const destName = document.querySelector(".dest-name");
    let fadeBottomSide = fadeOut(bottomSide);
    let fadeImg = fadeOut(img);
    Promise.all([fadeBottomSide, fadeImg]).then(() => {
        img.src = target["images"]["png"];
        stats[0].innerText = target["distance"].toUpperCase();
        stats[1].innerText = target["travel"].toUpperCase();
        destDesc.innerText = target["description"];
        destName.innerText = target["name"].toUpperCase();
    }).then(() => {
        fadeIn(bottomSide);
        fadeIn(img);
    })


}


