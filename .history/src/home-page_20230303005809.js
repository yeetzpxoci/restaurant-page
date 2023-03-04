import { loadMenu } from "./menu";

function loadHomePage() {
    const content = document.getElementById("content");
    
    // reset content div
    content.innerHTML = "";

    const header = document.createElement("div");
    header.id = "header";

    const footer = document.createElement("div");
    footer.id = "footer";

    const mainContent = document.createElement("div");
    mainContent.id = "main-content";

    const logo = document.createElement("p");
    logo.id = "logo";
    logo.innerHTML = "SUSHIBATA"

    const footerLogo = document.createElement("p");
    footerLogo.id = "footer-logo";
    footerLogo.innerHTML = "Copyright ©2023 SUSHIBATA"

    const headline = document.createElement("p");
    headline.id = "headline";
    headline.innerHTML = "\"Best sushi on the planet\""

    const sushiImage = document.createElement("img");
    sushiImage.id = "main-img"
    sushiImage.src = "https://www.thespruceeats.com/thmb/KKVYHEcAN6Jt7yvULfCB4r3ad30=/1500x0/filters:no_upscale():max_bytes(150000):strip_icc()/what-is-sushi-5079606-hero-01-e5a0a26f194a49478f84e04193baaefa.jpg";

    const aboutText = document.createElement("p");
    aboutText.id = "about-text";
    aboutText.innerHTML = "Sushi (すし, 寿司, 鮨, 鮓, pronounced [sɯɕiꜜ] or [sɯꜜɕi]) is a Japanese dish of prepared vinegared rice (鮨飯, sushi-meshi), usually with some sugar and salt, accompanied by a variety of ingredients (ねた, neta), such as seafood, often raw, and vegetables. Styles of sushi and its presentation vary widely, but the one key ingredient is "sushi rice, " also referred to as shari (しゃり), or sumeshi (酢飯).[1]

The inventor of modern sushi is believed to be Hanaya Yohei, who invented nigiri - zushi, a type of sushi most known today, in which seafood is placed on hand - pressed vinegared rice, around 1824 in the Edo period(1603–1867).It was the fast food of the chōnin class in the Edo period.[2][3][4]

Sushi is traditionally made with medium - grain white rice, though it can be prepared with brown rice or short - grain rice.It is very often prepared with seafood, such as squid, eel, yellowtail, salmon, tuna or imitation crab meat.Many types of sushi are vegetarian.It is often served with pickled ginger(gari), wasabi, and soy sauce.Daikon radish or pickled daikon(takuan) are popular garnishes for the dish.

Sushi is sometimes confused with sashimi, a similar dish in Japanese cuisine that consists of thinly sliced raw fish or occasionally meat.[5]"

    const homeButton = document.createElement("button");
    homeButton.id = "home-button"
    homeButton.innerHTML = "HOME"
    homeButton.addEventListener("click", loadHomePage)

    const menuButton = document.createElement("button");
    menuButton.id = "menu-button";
    menuButton.innerHTML = "MENU"
    menuButton.addEventListener("click", loadMenu)

    const contactButton = document.createElement("button");
    contactButton.id = "contact-button"
    contactButton.innerHTML = "CONTACT"

    const buttonContainer = document.createElement("div");
    buttonContainer.id = "button-container"
    buttonContainer.append(homeButton, menuButton, contactButton)

    header.appendChild(logo);
    footer.appendChild(footerLogo);
    mainContent.append(headline, sushiImage, aboutText);
    content.append(header, buttonContainer, mainContent, footer);
}

export { loadHomePage } ;