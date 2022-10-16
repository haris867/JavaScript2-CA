import { getToken } from "./utils/getToken.mjs";
// create post

const url = "https://nf-api.onrender.com/api/v1/social/posts";

const form = document.getElementById("create-post");

form.addEventListener("submit", createPost);

/**
 * Gets token from LocalStorage to use in other API requests
 */

const token = getToken();

/**
 * Creates post by making a post request using inputs in the Create Post-form and reloads page to let you see the new post
 */
export async function createPost(event) {
  event.preventDefault();
  let postData = {
    title: title.value,
    body: caption.value,
    tags: [],
    media: imageUrl.value,
  };

  if (!imageUrl.value || imageUrl.value === "") {
    delete postData.media;
  }

  const response = await fetch(url, {
    method: "post",
    headers: {
      Authorization: `Bearer ${token}`,
      "Content-Type": "application/json",
    },
    body: JSON.stringify(postData),
  });
  const data = await response.json();
  form.reset();
  location.reload();
}
