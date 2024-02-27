import { loaderElement } from "./elements";
import { setsearchResult } from "./setSearchResult";

export default function (loadingstate) {
  loaderElement.classList.toggle("hidden", !loadingstate);
  loadingstate && setsearchResult(null);
}
