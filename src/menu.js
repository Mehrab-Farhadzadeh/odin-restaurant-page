export default function () {
   const content = document.querySelector("#content");

   const h1 = document.createElement("h1");
   h1.textContent = "Menu";
   content.append(h1);

   const ITEMS = 10;
   for (let i = 0; i < ITEMS; i++) {
      const item = document.createElement("div");
      item.classList.add(`item`);

      const itemTxt = document.createElement("div");
      itemTxt.classList.add(`item-img`);
      itemTxt.textContent = `Food Name ${i}`;

      const itemImg = document.createElement("div");
      itemImg.classList.add(`item-img`);

      const img = document.createElement("img");
      img.alt = `food-image-${i}`;

      // append item
      item.append(itemTxt, itemImg);
      itemImg.append(img);
      content.append(item);
   }
}
