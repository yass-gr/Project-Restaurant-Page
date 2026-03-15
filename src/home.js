import pImg from "./pizza.png";

export default function createHomePage(contentDiv) {
  contentDiv.classname = "";
  contentDiv.classList.add("home");

  const title = document.createElement("h1");
  title.textContent = "Welcome To Our Resturant!";
  title.classList.add("homeTitle");

  const pizzaImg = document.createElement("img");
  pizzaImg.src = pImg;
  pizzaImg.classList.add("homeImg");

  const homeBtn = document.createElement("button");
  homeBtn.textContent = "Check our Menu!";
  homeBtn.classList.add("homeBtn");

  contentDiv.appendChild(title);
  contentDiv.appendChild(pizzaImg);
  contentDiv.appendChild(homeBtn);
}
