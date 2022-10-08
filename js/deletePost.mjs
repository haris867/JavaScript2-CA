import "./post.mjs";

const queryStringName = document.location.search;
const parameter = new URLSearchParams(queryStringName);
const name = parameter.get("name");

// delete post

const queryString = document.location.search;
const parameters = new URLSearchParams(queryString);
const id = parameters.get("id");

const url = "https://nf-api.onrender.com/api/v1/social/posts/" + id;

/**
 * Gets token from LocalStorage to use in other API requests
 */
function getToken() {
  const accessToken = localStorage.getItem("token");
  if (accessToken === null) {
    return [];
  } else {
    return JSON.parse(accessToken);
  }
}

const token = getToken();

const options = {
  method: "delete",
  headers: {
    Authorization: `Bearer ${token}`,
    "Content-Type": "application/json",
  },
};

const deleteButton = document.querySelector("#delete-button");

deleteButton.addEventListener("click", deletePost);
/**
 * Deletes this particular post
 */
async function deletePost() {
  const response = await fetch(url, options);
  const data = await response.json();
  window.location = `profile.html?name="${name}"`;
}
