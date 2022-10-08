// create post

const url = "https://nf-api.onrender.com/api/v1/social/posts";

const form = document.getElementById("create-post");

form.addEventListener("submit", createPost);

const token =
  "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6MTEzLCJuYW1lIjoiSGFyaXMxMyIsImVtYWlsIjoiTXVoVXNtNjgwNTZAc3R1ZC5ub3JvZmYubm8iLCJhdmF0YXIiOm51bGwsImJhbm5lciI6bnVsbCwiaWF0IjoxNjYzNTE4OTg4fQ._ypbgqVk_BvKBwg3Zl5DejtZ9m4MqI6y7hqNP2K6GQ8";

/**
 * Creates post by making a post request using inputs in the Create Post-form and reloads page to let you see the new post
 */
async function createPost(event) {
  event.preventDefault();
  const postData = JSON.stringify({
    title: title.value,
    body: caption.value,
    tags: [],
    media: imageUrl.value,
  });

  const response = await fetch(url, {
    method: "post",
    headers: {
      Authorization: `Bearer ${token}`,
      "Content-Type": "application/json",
    },
    body: postData,
  });
  const data = await response.json();
  form.reset();
  location.reload();
}
