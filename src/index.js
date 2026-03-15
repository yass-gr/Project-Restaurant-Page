import "./styles.css";
import createHomePage from "./home.js";
import createMenu from "./menu.js";
import createAbout from "./about.js";

const contentDiv = document.getElementById("content");
const navBtns = document.querySelectorAll("#navBtn");

navBtns.forEach((btn) => {
  btn.addEventListener("click", () => {
    navBtns.forEach((btn) => btn.classList.remove("current"));
    btn.classList.add("current");
    contentDiv.innerHTML = "";
    contentDiv.className = "";
    if (btn.textContent === "Home") {
      createHomePage(contentDiv);
    } else if (btn.textContent === "Menu") {
      createMenu(contentDiv);
    } else {
      createAbout(contentDiv);
    }
  });
});

createHomePage(contentDiv);
