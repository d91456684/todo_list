import "./styles.css";

import { generateHome } from "../src/home";
import { generateAbout } from "../src/about";
import { generateMenu } from "../src/menu";
generateHome()

addEventListener("click", (event) => {
    let target = event.target
    console.log(target)
    switch(target.className) {
        case "home":
            generateHome()
            break;
        case "menu":
            generateMenu()
            break;
        case "about":
            generateAbout()
            break;
    }
})