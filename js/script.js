// console.log(window.location.pathname);

const global = {
  currentPage: window.location.pathname,
};

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
      console.log("Home");
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