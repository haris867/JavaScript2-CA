// register profile

const url = "https://nf-api.onrender.com/api/v1/social/auth/register";

const form = document.getElementById("form");

// const usernameInput = document.querySelector("#username");
// const emailInput = document.querySelector("#email");
// const passwordInput = document.querySelector("#password");

form.addEventListener("submit", registerProfile);

/**
 * Registers a profile by making a POST request containing values from register form-inputs
 */
async function registerProfile(event) {
  event.preventDefault();
  const data = JSON.stringify({
    name: username.value,
    email: email.value,
    password: password.value,
    avatar: avatar.value,
    banner: banner.value,
  });

  const register = await fetch(url, {
    method: "post",
    headers: {
      "Content-Type": "application/json",
    },
    body: data,
  });
  console.log(register);
  form.reset();
}
