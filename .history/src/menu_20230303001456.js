import { loadHomePage } from "./home-page";

function loadMenu() {
    const content = document.getElementById("content");

    // reset content div
    content.innerHTML = "";

    const header = document.createElement("div");
    header.id = "header";

    const logo = document.createElement("p");
    logo.id = "logo";
    logo.innerHTML = "SUSHIBATA"

    const footer = document.createElement("div");
    footer.id = "footer";

    const footerLogo = document.createElement("p");
    footerLogo.id = "footer-logo";
    footerLogo.innerHTML = "Copyright ©2023 SUSHIBATA"

    const mainContent = document.createElement("div");
    mainContent.id = "main-content";

    const nigiri = document.createElement("img");
    nigiri.src = "https://maki-sushi.it/wp-content/uploads/2022/01/Nigiri-salmone-Ma-Ki-Sushi.png"

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
    mainContent.append(buttonContainer, nigiri);
    content.append(header, mainContent, footer);
}

export { loadMenu }