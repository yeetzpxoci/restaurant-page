import { loadHomePage } from "./home-page";
import { loadMenu } from "./menu";

loadHomePage();

document.getElementById("home-button").addEventListener("click", loadHomePage);
document.getElementById("menu-button").addEventListener("click", function () {
    alert("hi!");
});