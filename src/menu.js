const plates = [
  {
    name: "Margherita Pizza",
    price: 12.5,
    desc: "Classic tomato sauce, fresh mozzarella, and basil.",
  },
  {
    name: "Caesar Salad",
    price: 9.0,
    desc: "Crisp romaine lettuce with garlic croutons and parmesan.",
  },
  {
    name: "Beef Burger",
    price: 14.0,
    desc: "Juicy 8oz patty with cheddar, lettuce, and secret sauce.",
  },
  {
    name: "Sushi Platter",
    price: 22.0,
    desc: "A 12-piece assortment of fresh nigiri and California rolls.",
  },
  {
    name: "Pasta Carbonara",
    price: 15.5,
    desc: "Spaghetti with creamy egg sauce, guanciale, and black pepper.",
  },
  {
    name: "Tacos Al Pastor",
    price: 11.0,
    desc: "Three corn tortillas with marinated pork and pineapple.",
  },
  {
    name: "Mushroom Risotto",
    price: 16.0,
    desc: "Creamy Arborio rice slow-cooked with wild mushrooms.",
  },
  {
    name: "Grilled Salmon",
    price: 19.5,
    desc: "Atlantic salmon fillet served with asparagus and lemon.",
  },
  {
    name: "Chicken Curry",
    price: 13.5,
    desc: "Mildly spiced coconut curry with steamed jasmine rice.",
  },
  {
    name: "Chocolate Lava Cake",
    price: 8.0,
    desc: "Warm chocolate cake with a gooey center and vanilla bean ice cream.",
  },
];

export default function createMenu(contentDiv) {
  contentDiv.classname = "";
  contentDiv.classList.add("menu");

  const title = document.createElement("h1");
  title.textContent = "Menu";
  title.classList.add("menuTitle");

  const platesDiv = document.createElement("div");
  platesDiv.classList.add("platesDiv");

  contentDiv.appendChild(title);

  for (let plate of plates) {
    const plateCard = document.createElement("div");
    plateCard.classList.add("plateCard");
    const plateImg = document.createElement("span");
    plateImg.classList.add("mdi");
    plateImg.classList.add("mdi-food");

    const plateName = document.createElement("h2");
    plateName.textContent = plate.name;
    plateName.classList.add("plateName");

    const platePrice = document.createElement("span");
    platePrice.textContent = plate.price + " $";
    platePrice.classList.add("platePrice");

    const platedesc = document.createElement("p");
    platedesc.textContent = plate.desc;
    platedesc.classList.add("plateDesk");

    const plateReserve = document.createElement("button");
    plateReserve.textContent = "Reserve Plate!";
    plateReserve.classList.add("plateReserve");

    plateCard.appendChild(plateImg);
    plateCard.appendChild(plateName);
    plateCard.appendChild(platePrice);
    plateCard.appendChild(platedesc);
    plateCard.appendChild(plateReserve);

    platesDiv.appendChild(plateCard);

    contentDiv.appendChild(platesDiv);
  }
}
