const hamburger = document.querySelector(".hamburger");
const nav = document.querySelector(".navigation");
const close = document.querySelector(".close");
const navOptions = document.querySelectorAll(".nav-item");
export const fadeOut = async (element, duration = 500) => {
    return element.animate([
            {opacity: 1}, {opacity: 0}
        ],
        {
            duration: duration,
            easing: "ease-in-out",
            fill: "forwards"
        }).finished;
}
export const fadeIn = async (element, duration = 500) => {
    return element.animate([
            {opacity: 0}, {opacity: 1}
        ],
        {
            duration: duration,
            easing: "ease-in-out",
            fill: "forwards"
        }).finished;
}
export const switchBG = async (element, newBG) => {
    return element.animate([
            {backgroundImage: `url(${newBG})`, offset: 1}
        ],
        {
            duration: 500,
            easing: "ease-in-out"

        }
    ).finished.then(() => {
        element.style.backgroundImage = `url(${newBG})`;
    });
}
hamburger.addEventListener("click", (e) => {
    nav.style.display = "flex";
    let keyframes = [
        {right: "-60%", offset: 0},
        {right: "-15%", offset: 0.5},
        {right: "0", offset: 1}
    ];
    let options = {
        easing: "ease-out",
        duration: 1000,
        fill: "forwards"
    }
    nav.animate(keyframes, options);
});
close.addEventListener("click", e => {
    nav.animate([
        {right: 0}, {right: "-60%"}
    ], {
        duration: 1000,
        easing: "ease-out",
        fill: "forwards"
    }).finished;
})

