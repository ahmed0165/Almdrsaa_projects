//create function => performSearch(searchTerm,isUserSelected)
//call performSearch button eventListener

// pefrformSearch
//  *fetch data from URL
//  *if ok then show data in the page
//  *else show error messsage
import {
  searchInput,
  buttonElement,
  cardElements,
  userInputElement,
} from "./scripts/elements";
import { performSearch } from "./scripts/performSearch";

buttonElement.addEventListener("click", (e) => {
  e.preventDefault();
  performSearch(searchInput.value, userInputElement.checked);
});
