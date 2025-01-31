import heroImgFile from "./jay-wennington-N_Y88TWmGwA-unsplash.jpg";
export default function () {
   const content = document.querySelector("#content");

   const h1 = document.createElement("h1");
   h1.textContent = "Welcome to the best restaurant in the universe";

   const hero = document.createElement("div");
   hero.classList.add("hero");

   const heroTxt = document.createElement("div");
   heroTxt.classList.add("hero-txt");
   heroTxt.textContent =
      "I am a strong text. Lorem ipsum dolor sit amet consectetur adipisicing elit. Debitis molestias assumenda iure dignissimos doloremque minima perspiciatis quam iste, facilis expedita eum, vero id nostrum! Consequuntur assumenda ducimus officia eum modi.";

   const heroImg = document.createElement("div");
   heroImg.classList.add("hero-img");

   const img = document.createElement("img");
   img.src = heroImgFile;
   img.alt = "This a strong image";

   // append children
   content.append(h1, hero);
   hero.append(heroTxt, heroImg);
   heroImg.append(img);
}
