import "./style.css";
import home from "./home";
import menu from "./menu";
import support from "./support";
import about from "./about";

function addEventListenersToButtons() {
   const homeBtn = document.querySelector(".home");
   const menuBtn = document.querySelector(".menu");
   const supportBtn = document.querySelector(".support");
   const aboutBtn = document.querySelector(".about");

   const content = document.querySelector("#content");
   homeBtn.addEventListener("click", () => {
      content.innerHTML = "";
      home();
   });
   menuBtn.addEventListener("click", () => {
      content.innerHTML = "";
      menu();
   });
   supportBtn.addEventListener("click", () => {
      content.innerHTML = "";
      support();
   });
   aboutBtn.addEventListener("click", () => {
      content.innerHTML = "";
      about();
   });
}

addEventListenersToButtons();
home();
