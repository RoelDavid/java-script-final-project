async function getData() {
  const searchInput = document.querySelector(".search__input");
  const searchValue = searchInput.value;
  const response = await fetch(
    `http://www.omdbapi.com/?s=${searchValue}&apikey=87422d08`,
  );
  const data = await response.json();

  const results = document.querySelector(".results");

  results.innerHTML = "";

  data.Search.forEach((movie) => {
    results.innerHTML += `<div class="movie__card">
          <img src="${movie.Poster}" class="movie__poster" />
          <div class="movie__info">
            <h3 class="movie__title">${movie.Title}</h3>
            <h2 class="movie__year">${movie.Year}</h2>
          </div>`;
  });
}
