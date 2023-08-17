// console.log(window.location.pathname);

const global = {
  currentPage: window.location.pathname,
};

//Displaying Popular Movies
async function displayPopularMovies() {
  const {results} = await fetchAPIData('/movie/popular')
 
  results.forEach((movie) => {
    const div = document.createElement('div')
    div.classList.add('card')
    div.innerHTML = `
    
    
    <a href="movie-details.html?id=${movie.id}">
    ${movie.poster_path ? `<img src="https://image.tmdb.org/t/p/w500${movie.poster_path}" class="card-img-top" alt="${movie.title}"/>` 
    : `      <img
    src="./images/no-image.jpg"
    class="card-img-top"
    alt="Movie Title"
  />`}
    </a>
    <div class="card-body">
      <h5 class="card-title">${movie.title}</h5>
      <p class="card-text">
        <small class="text-muted">Release: ${movie.release_date}</small>
      </p>
    </div>
  
    `;

    document.querySelector('#popular-movies').appendChild(div);
  })
}


//Fetch data from TMDB API
async function fetchAPIData(endpoint) {
const API_KEY = '2c7b41aeee968eb46df10ecb0df3793c';
const API_URL = 'http://api.themoviedb.org/3/';

const response = await fetch(
  `${API_URL}${endpoint}?api_key=${API_KEY}&language=en-US`
);

const data = await response.json();

return data;
}

//Highlighting Active Link
function highlightActiveLink() {
  const links = document.querySelectorAll(".nav-link")
  links.forEach((link) => {
    const linkPath = link.getAttribute("href")
    if(
      linkPath === global.currentPage || 
      linkPath === `.${global.currentPage}`
    ) {
      link.classList.add("active")
    }
  })
}

function init() {
  switch(global.currentPage) {
    case "/":
      displayPopularMovies();
      break;
    case "/shows.html":
      console.log("Shows");
      break;
    case "/movie-details.html":
      console.log("Movie Details");
      break;
    case "/tv-details.html":
      console.log("TV Details");
      break;
    case "/search.html":
      console.log("Search");
      break;    
  }
  highlightActiveLink();
}

document.addEventListener("DOMContentLoaded", init)