const apiUrl = "https://api.themoviedb.org/3/discover/movie?sort_by=popularity.desc&api_key=28c73f8f765d2a7a746b5f044c4d8a6e&page=1";
const imagePath = "https://image.tmdb.org/t/p/w1280";
const searchMovie = "https://api.themoviedb.org/3/search/movie?&api_key=28c73f8f765d2a7a746b5f044c4d8a6e&query=";

const main = document.getElementById("main");
const form = document.getElementById("form");
const search = document.getElementById("search");
const top20 = document.getElementById("top20");


getMovies(apiUrl);

async function getMovies(url) {
    const resp = await fetch(url);
    const respData = await resp.json();

    console.log(respData);

    popularMovies(respData.results);
}


function popularMovies(movies) {
    main.innerHTML = "";

    movies.forEach((movie) => {
        const { poster_path, title, vote_average, release_date, overview } = movie;

        const movieContent = document.createElement("div");
        movieContent.classList.add("movie");

        movieContent.innerHTML = `
    <img src="${imagePath + poster_path}" alt="${title}">
    <div class= "movie-data">
        <h3>${title}</h3>
        <p>Release date: ${release_date}</p>
        <p>Average</p>
        <span>${vote_average}</span>
    <div/>
    <div class="overview">
    ${overview}
    </div>`;

        main.appendChild(movieContent);
    });
}

form.addEventListener("submit", (e) => {
    e.preventDefault();

    const movieQuery = search.value;

    if (movieQuery) {
        getMovies(searchMovie + movieQuery);

        search.value = "";
        top20.innerHTML = "Your results!";
    }
});