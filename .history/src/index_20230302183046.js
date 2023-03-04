import { loadHomePage } from "./home-page";

loadHomePage();

document.getElementById("home-button").addEventListener("click", loadHomePage());