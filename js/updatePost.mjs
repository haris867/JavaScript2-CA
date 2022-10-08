import "./post.mjs";

function getToken() {
  const accessToken = localStorage.getItem("token");
  if (accessToken === null) {
    return [];
  } else {
    return JSON.parse(accessToken);
  }
}

const token = getToken();

// update post
const queryString = document.location.search;
const parameters = new URLSearchParams(queryString);
const id = parameters.get("id");

const url = "https://nf-api.onrender.com/api/v1/social/posts/" + id;

const updateForm = document.querySelector("#update-post");

console.log(updateForm);

updateForm.addEventListener("submit", updatePost);

async function updatePost(event) {
  event.preventDefault();
  console.log(title.value);
  const updateData = JSON.stringify({
    title: title.value,
    body: caption.value,
    tags: [],
    media: imageUrl.value,
  });

  const response = await fetch(url, {
    method: "put",
    headers: {
      Authorization: `Bearer ${token}`,
      "Content-Type": "application/json",
    },
    body: updateData,
  });
  console.log(response);
  const data = await response.json();
  console.log(data);
  console.log(updateData);
  updateForm.reset();
  location.reload();
}
