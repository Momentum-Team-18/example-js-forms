let searchForm = document.querySelector("#search-form");
console.log(searchForm);
let searchInput = document.querySelector("#search-field");
let searchBaseUrl = "https://icanhazdadjoke.com/search?term=";
let jokeContainer = document.querySelector("#joke-container");

searchForm.addEventListener("submit", (event) => {
  event.preventDefault();
  console.log(searchInput.value);
  let searchUrl = `${searchBaseUrl}${searchInput.value}`;
  console.log(searchUrl);
  fetch(searchUrl, {
    method: "GET",
    headers: {
      Accept: "application/json",
    },
  })
    .then((response) => {
      return response.json();
    })
    .then((data) => {
      console.log(data.results);
      for (let result of data.results) {
        let jokeEl = document.createElement("div");
        jokeEl.classList.add("box");
        jokeEl.innerText = result.joke;
        jokeContainer.appendChild(jokeEl);
      }
    });
});
