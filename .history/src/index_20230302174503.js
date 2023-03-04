const content = document.getElementById("content");
const header = document.createElement("div");
const mainContent = document.createElement("div");
const logo = document.createElement("p");
const headline = document.createElement("p");
const sushiImage = document.createElement("img");
const aboutText = document.createElement("p");

header.id = "header";
mainContent.id = "main-content";
logo.id = "logo";
logo.innerHTML = "SUSHIBATA"
headline.id = "headline";
sushiImage.src = "https://www.thespruceeats.com/thmb/KKVYHEcAN6Jt7yvULfCB4r3ad30=/1500x0/filters:no_upscale():max_bytes(150000):strip_icc()/what-is-sushi-5079606-hero-01-e5a0a26f194a49478f84e04193baaefa.jpg";
aboutText.id = "about-text";

header.appendChild(logo);
mainContent.append(headline, sushiImage, aboutText);
content.append(header, mainContent);