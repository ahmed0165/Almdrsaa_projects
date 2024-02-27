import { clickLabelEvent, observeElements } from "./utils.js";
const labelElements = document.querySelectorAll("label");
const sectionElemnts = document.querySelectorAll("section");

labelElements.forEach((item) => {
  clickLabelEvent(item);
});
observeElements(sectionElemnts);
