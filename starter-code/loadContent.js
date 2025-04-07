import {fadeOut, fadeIn, switchBG} from "./animations.js";
const navItems = document.querySelectorAll(".nav-item");
const hamburger = document.querySelector(".hamburger");
const close = document.querySelector(".close");
let data = fetch("./data.json");
export const loadContent = async (page = "home") => {
    let pageText = await fetch(`./${page}.html`).then((response) => response.text());
    let parser = new DOMParser();
    let doc = parser.parseFromString(pageText, "text/html");
    let docBody = doc.querySelector(".body");
    let stylesheet = doc.querySelector(".new");
    let oldStylesheet = document.querySelector(".new");
    const body = document.querySelector(".body");
    const container = document.querySelector(".container");
    let currentState = "mobile";
    if (window.innerWidth >= 768) currentState = "tablet";
    if (window.innerWidth >= 1440) currentState = "desktop";
    let background = `./assets/${page}/background-${page}-${currentState}.jpg`
    let fadeAnimation = fadeOut(body);
    let changeBG = switchBG(container, background);
    let script = import(`./${page}.js`);
    Promise.all([fadeAnimation, changeBG]).then(async () => {
        oldStylesheet.href = stylesheet.href;
        body.innerHTML = docBody.innerHTML;
        script.then((sc) => {
            sc.init();
        })
    }).then(async () => {
        setTimeout(() => {
            fadeIn(body);
        }, 250);
    });


}
document.addEventListener("DOMContentLoaded", (e) => {
    loadContent();
    navItems.forEach((element) => {
        element.addEventListener("click", (e) => {
            navItems.forEach((element2, key2) => {
                element2.classList.remove("active");
            })
            element.classList.add("active");
            if (window.innerWidth <768){
                document.querySelector(".close").click();
            }
            loadContent(element.innerText.split(" ")[1].toLowerCase());
        })
    })

});
export {data};
