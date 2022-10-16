// login function

const url = "https://nf-api.onrender.com/api/v1/social/auth/login";

const form = document.getElementById("form");
const successMessage = document.querySelector(".success");
/**
 * Checks if token is in LocalStorage, and if so, it sends you to the feed page
 */
function checkCredentials() {
  const checkToken = localStorage.getItem("token");
  if (checkToken) {
    window.location = "feed.html";
  }
}

checkCredentials();

form.addEventListener("submit", login);

/**
 * Allows user to log in, by sending a post request to retrieve token, which is stored in LocalStorage for making other API requests
 */

async function login(event) {
  event.preventDefault();
  const credentials = JSON.stringify({
    email: email.value,
    password: password.value,
  });
  const response = await fetch(url, {
    method: "post",
    headers: {
      "Content-Type": "application/json",
    },
    body: credentials,
  });
  console.log(response);
  const data = await response.json();
  console.log(data);
  const { accessToken, name } = data;
  localStorage.setItem("token", JSON.stringify(accessToken));
  localStorage.setItem("name", JSON.stringify(name));
  form.reset();
  successMessage.style.opacity = "1";
  window.location = `profile.html?name=${name}`;
}
