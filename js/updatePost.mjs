import "./post.mjs";
import { getToken } from "./utils/getToken.mjs";

const token = getToken();

// update post
const queryString = document.location.search;
const parameters = new URLSearchParams(queryString);
const id = parameters.get("id");

const url = "https://nf-api.onrender.com/api/v1/social/posts/" + id;

const updateForm = document.querySelector("#update-post");

console.log(updateForm);

updateForm.addEventListener("submit", updatePost);

/**
 * Updates post by making a put request with data from form inputs
 */
export async function updatePost(event) {
  event.preventDefault();
  console.log(title.value);
  const updateData = {
    title: title.value,
    body: caption.value,
    tags: [],
    media: imageUrl.value,
  };

  if (!imageUrl.value || imageUrl.value === "") {
    delete updateData.media;
  }

  const response = await fetch(url, {
    method: "put",
    headers: {
      Authorization: `Bearer ${token}`,
      "Content-Type": "application/json",
    },
    body: JSON.stringify(updateData),
  });
  console.log(response);
  const data = await response.json();
  console.log(data);
  console.log(updateData);
  updateForm.reset();
  location.reload();
}
