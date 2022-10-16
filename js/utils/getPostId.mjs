const queryString = document.location.search;
const parameters = new URLSearchParams(queryString);
const id = parameters.get("id");
