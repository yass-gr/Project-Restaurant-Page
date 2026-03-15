export default function createAbout(contentDiv) {
  const aboutTitle = document.createElement("h1");
  aboutTitle.textContent = "About Resturant";
  aboutTitle.classList.add("abTitle");

  const aboutDesc = document.createElement("p");
  aboutDesc.textContent = `
At Resturant, we believe that food should have no borders. Why choose one cuisine when you can have the whole world on a single table? We got tired of the old rules, so we decided that if you want a Pasta Carbonara followed by Tacos Al Pastor, you shouldn't have to visit two different zip codes
Our kitchen is a laboratory of global flavors, where fresh ingredients meet bold techniques. Whether it’s a quick Caesar Salad lunch or a slow-cooked Mushroom Risotto dinner, every dish we serve is crafted with a simple goal: to bring people together over a great meal.
Zero Borders: From Tokyo to Rome to Mexico City, we bring the best of the world to your plate.
Unapologetic Freshness: If it’s not fresh, it’s not on our menu. We partner with local farmers.
A Space for Everyone: We’ve built Resturant to be more than just a place to eat—it’s a neighborhood hub.
A meal is an experience, not just a transaction. Welcome to the table."`;

  aboutDesc.classList.add("abDesc");

  contentDiv.append(aboutTitle, aboutDesc);
}
