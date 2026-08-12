let movies = [];

async function getData() {
  const searchInput = document.querySelector(".search__input");
  const searchValue = searchInput.value;

  const response = await fetch(
    `https://www.omdbapi.com/?s=${searchValue}&apikey=87422d08`,
  );

  const data = await response.json();

  movies = data.Search;

  displayMovies(movies);
}

function displayMovies(movieList) {
  const results = document.querySelector(".results");

  results.innerHTML = "";

  movieList.forEach((movie) => {
    results.innerHTML += `
      <div class="movie__card">
        <img src="${movie.Poster}" class="movie__poster" />

        <div class="movie__info">
          <h3 class="movie__title">${movie.Title}</h3>
          <h2 class="movie__year">${movie.Year}</h2>
        </div>
      </div>
    `;
  });
}

function filterByYear() {
  const yearSelect = document.querySelector(".choose__year");
  const selectedYear = yearSelect.value;

  let filteredMovies;

  if (selectedYear === "2020 to today") {
    filteredMovies = movies.filter((movie) => {
      const year = parseInt(movie.Year);
      return year >= 2020;
    });
  }

  if (selectedYear === "2010 to 2019") {
    filteredMovies = movies.filter((movie) => {
      const year = parseInt(movie.Year);
      return year >= 2010 && year <= 2019;
    });
  }

  if (selectedYear === "2000 to 2009") {
    filteredMovies = movies.filter((movie) => {
      const year = parseInt(movie.Year);
      return year >= 2000 && year <= 2009;
    });
  }

  if (selectedYear === "past to 1999") {
    filteredMovies = movies.filter((movie) => {
      const year = parseInt(movie.Year);
      return year <= 1999;
    });
  }

  displayMovies(filteredMovies);
}
