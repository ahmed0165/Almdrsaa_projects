import { cardElements } from "./elements";
export const setsearchResult = (response) => {
  //   console.log(response);
  let result = "";
  if (response?.length === 0) {
    console.log("hello");
    result = "<p>No results found.</p>";
  } else if (response === null) {
    result = "";
  } else if (response?.length) {
    response.map((item) => {
      result += `
      <article class="card">
            <img class="img" loading="lazy" src="${item.avatar_url}"/>
            <h2 class="name"> ${item.login}</h2>
        </article>`;
    });
  }
  cardElements.innerHTML = result;
};
