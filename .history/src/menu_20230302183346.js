function loadMenu() {
    const content = document.getElementById("content");

    // reset content div

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

    const homeButton = document.createElement("button");
    homeButton.id = "home-button"
    homeButton.innerHTML = "HOME"

    const menuButton = document.createElement("button");
    menuButton.id = "menu-button";
    menuButton.innerHTML = "MENU"

    const contactButton = document.createElement("button");
    contactButton.id = "contact-button"
    contactButton.innerHTML = "CONTACT"

    const buttonContainer = document.createElement("div");
    buttonContainer.id = "button-container"
    buttonContainer.append(homeButton, menuButton, contactButton)

    header.appendChild(logo);
    footer.appendChild(footerLogo);
    mainContent.append(buttonContainer, headline, sushiImage, aboutText);
    content.append(header, mainContent, footer);
}