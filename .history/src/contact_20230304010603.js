import { loadHomePage } from "./home-page";
import { loadMenu } from "./menu";

function loadContact() {
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
    mainContent.id = "contact-content";
    const homeButton = document.createElement("button");
    homeButton.id = "home-button"
    homeButton.innerHTML = "HOME"
    homeButton.addEventListener("click", loadHomePage)

    const contactImg = document.createElement("img");
    contactImg.src = "https://media.licdn.com/dms/image/D4E03AQG5fRsR2CTR0g/profile-displayphoto-shrink_800_800/0/1676631216871?e=2147483647&v=beta&t=A0wc6WYrjKLlr876T4mp2N9MjOet1VQFPHkN9CVtpqM";

    const contactHead = document.createElement("p");
    contactHead.innerHTML = "Hitomi Shibata"
    contactHead.id = "contact-head";

    const contactPhone = document.createElement("p");
    contactPhone.innerHTML = "+31857284252"
    contactPhone.id = "contact-normal";

    const contactMail = document.createElement("p");
    contactMail.innerHTML = "sushibata@gmail.com"
    contactMail = "contact-normal";

    const contactAddress = document.createElement("p");
    contactAddress.innerHTML = "Osaka, Japan"
    contactAddress = "contact-normal";

    const menuButton = document.createElement("button");
    menuButton.id = "menu-button";
    menuButton.innerHTML = "MENU"
    menuButton.addEventListener("click", loadMenu)

    const contactButton = document.createElement("button");
    contactButton.id = "contact-button"
    contactButton.innerHTML = "CONTACT"
    contactButton.addEventListener("click", loadContact)

    const buttonContainer = document.createElement("div");
    buttonContainer.id = "button-container"
    buttonContainer.append(homeButton, menuButton, contactButton)

    header.appendChild(logo);
    footer.appendChild(footerLogo);
    mainContent.append(buttonContainer, contactImg, contactHead, contactPhone, contactMail, contactAddress);

    content.append(header, buttonContainer, mainContent, footer);
}

export { loadContact }