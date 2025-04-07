import {fadeIn, fadeOut} from "./animations.js";

export const init = async () => {
    const data = await fetch("./data.json").then((response) => response.json());
    const optionsContainer = document.querySelector(".dot-switch");
    data["crew"].forEach((item, index) => {
        let el = document.createElement("div");
        el.classList.add("dot-option");
        el.addEventListener("click", e => {
            const options = document.querySelectorAll(".dot-option");
            options.forEach((element) => {
                element.classList.remove("active");
            })
            el.classList.add("active");
            displayData(data["crew"][index]);
        });
        if (index === 0) {
            el.classList.add("active");
        }
        optionsContainer.appendChild(el);
    })
    displayData(data["crew"][0]);

}
export const displayData = (target) => {
    const role = document.querySelector(".crew-role");
    const name = document.querySelector(".crew-name");
    const desc = document.querySelector(".crew-desc");
    const img = document.querySelector(".hero-img");
    const details = document.querySelector(".crew-details");
    let fadeDetails = fadeOut(details);
    let fadeImg = fadeOut(img);
    Promise.all([fadeDetails, fadeImg]).then(() => {
        role.innerText = target["role"].toUpperCase();
        name.innerText = target["name"].toUpperCase();
        desc.innerText = target["bio"];
        img.src = target["images"]["png"];
    }).then(()=>{
        fadeIn(details);
        fadeIn(img);
    })
}