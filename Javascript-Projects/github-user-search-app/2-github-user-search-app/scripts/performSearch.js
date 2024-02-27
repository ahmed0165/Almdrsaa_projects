import { messageElement } from "./elements";
import { setsearchResult } from "./setSearchResult";
import setMessage from "./setMessage";
import getMessage from "./getMessage";
import setLoadingState from "./setLoadingState";
const user_API = "https://api.github.com/search/users?q=";

export const performSearch = (searchTerm, isUserSelected) => {
  getMessage() && setMessage("");
  const typeQuery = isUserSelected ? "+type:user" : "+type:org";

  if (!searchTerm.trim()) {
    setMessage("please fill out the search field");
    return;
  }

  setLoadingState(true);

  fetch(`${user_API}${searchTerm}${typeQuery}`)
    .then((result) => result.json())
    .then((respose) => setsearchResult(respose.items))
    .finally(setLoadingState(false));
};
