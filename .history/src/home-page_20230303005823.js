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
    aboutText.innerHTML = ""

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