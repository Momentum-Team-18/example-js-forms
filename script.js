let searchForm = document.querySelector("#search-form");
console.log(searchForm);
let searchInput = document.querySelector("#search-field");
let searchBaseUrl = "https://icanhazdadjoke.com/search?term=";
let jokeContainer = document.querySelector("#joke-container");
let clearButton = document.querySelector(".is-danger");
let searchTerm;

searchForm.addEventListener("submit", (event) => {
  event.preventDefault();
  searchTerm = searchInput.value;
  searchForm.reset();
  jokeContainer.replaceChildren();
  let searchUrl = `${searchBaseUrl}${searchTerm}`;
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
      topic.innerText += searchTerm;

      for (let result of data.results) {
        let jokeEl = document.createElement("div");
        jokeEl.classList.add("box");
        jokeEl.innerText = result.joke;
        jokeContainer.appendChild(jokeEl);
      }
    });
});

clearButton.addEventListener("click", (event) => {
  event.preventDefault();
  jokeContainer.replaceChildren();
});
