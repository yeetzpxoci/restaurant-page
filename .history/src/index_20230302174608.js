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
aboutText.innerHTML = "Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo inventore veritatis et quasi architecto beatae vitae dicta sunt explicabo.Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit aut fugit, sed quia consequuntur magni dolores eos qui ratione voluptatem sequi nesciunt.Neque porro quisquam est, qui dolorem ipsum quia dolor sit amet, consectetur, adipisci velit, sed quia non numquam eius modi tempora incidunt ut labore et dolore magnam aliquam quaerat voluptatem.Ut enim ad minima veniam, quis nostrum exercitationem ullam corporis suscipit laboriosam, nisi ut aliquid ex ea commodi consequatur ? Quis autem vel eum iure reprehenderit qui in ea voluptate velit esse quam nihil molestiae consequatur, vel illum qui dolorem eum fugiat quo voluptas nulla pariatur ?"

header.appendChild(logo);
mainContent.append(headline, sushiImage, aboutText);
content.append(header, mainContent);