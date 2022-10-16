const searchIcon = document.querySelector(".bi-search");

const searchForm = document.querySelector(".container-fluid-search");
const postContainer = document.querySelector(".post-container");

searchIcon.addEventListener("click", displaySearch);

/**
 * Displays search bar when clicking search icon
 */
export function displaySearch() {
  searchForm.classList.toggle("display-search");
  postContainer.classList.toggle("search-initiated");
}
