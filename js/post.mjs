import { hideDropdown } from "./hideDropdown.mjs";
import { getToken } from "./utils/getToken.mjs";
const queryString = document.location.search;
const parameters = new URLSearchParams(queryString);
const id = parameters.get("id");

const url =
  "https://nf-api.onrender.com/api/v1/social/posts/" + id + "?_author=true";

/**
 * Gets token from LocalStorage to use in other API requests
 */

const token = getToken();

const options = {
  headers: {
    Authorization: `Bearer ${token}`,
  },
};

const postContainer = document.querySelector(".post-container");

/**
 * Retrieves the post you just clicked on, using query string which was added when you clicked the post. Using the ID in the query string, this function makes an API call to retrieve just this particaular post
 */
async function getPost() {
  //get posts
  const response = await fetch(url, options);
  const post = await response.json();
  const { title, body, media } = post;
  const author = post.author;
  const { name, avatar } = author;
  //   const { name, avatar, posts } = profiles;
  //   const { followers, following } = profiles._count;

  //
  // display post

  postContainer.innerHTML = `<div class="post my-3">
                <div class="author d-flex align-items-center justify-content-between my-2">
                <a href="profile.html?name=${name}" class="text-decoration-none">
                  <div class="d-flex">
                      <div class="rounded-circle">
                        <img
                          class="rounded-circle post-avatar"
                          src="${avatar}"
                          alt=""
                          onerror="this.src='https://user-images.githubusercontent.com/73777398/196037714-5faabc3d-ce7f-427a-a6ec-b13ae9a76348.png';"
                        />
                      </div>
                      <div class="name ms-2 mt-1">
                        <h3 class="post-author-name">${name}</h3>
                      </div>
                    </div>
                    </a>
                    <div class="dropdown edit-dots" id="edit-dots">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="20"
                      height="20"
                      fill="currentColor"
                      class="bi bi-three-dots-vertical"
                      viewBox="0 0 16 16"
                      data-bs-toggle="dropdown"
                      aria-expanded="false"
                    >
                      <path
                        d="M9.5 13a1.5 1.5 0 1 1-3 0 1.5 1.5 0 0 1 3 0zm0-5a1.5 1.5 0 1 1-3 0 1.5 1.5 0 0 1 3 0zm0-5a1.5 1.5 0 1 1-3 0 1.5 1.5 0 0 1 3 0z"
                      />
                    </svg>
                    <ul class="dropdown-menu">
                      <li>
                      <button id="update-button" class="dropdown-item" type="button" data-bs-toggle="modal" data-bs-target="#updateModal" data-bs-whatever="@mdo">Update</button></li>
                      <li>
                        <button class="dropdown-item" type="button" data-bs-toggle="modal" data-bs-target="#deleteModal" data-bs-whatever="@mdo">Delete</button>
                      </li>
                    </ul>
                  </div>
                </div>
                <form class="test-form">
                </form>
                <!-- Update modal -->
                <div class="modal fade" id="updateModal" tabindex="-1" aria-labelledby="updateModalLabel" aria-hidden="true">
                <div class="modal-dialog">
                  <div class="modal-content">
                    <div class="modal-header">
                      <h5 class="modal-title" id="updateModalLabel">Update</h5>
                      <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
                    </div>
                    <div class="modal-body">

                      <form id="update-post" class="update-post">
                        <div>
                          <label for="imageUrl" class="col-form-label">Image URL:</label>
                          <input type="text" class="form-control" id="imageUrl" value="${media}">
                        </div>
                        <div>
                          <label for="title" class="col-form-label">Title:</label>
                          <input type="text" class="form-control" id="title" value="${title}">
                        </div>
                        <div>
                          <label for="caption" class="col-form-label">Caption:</label>
                          <textarea class="form-control" id="caption">${body}</textarea>
                        </div>
                        <div class="modal-footer d-flex justify-content-center">
                        <button type="submit" class="btn btn-primary form-button">Update post</button>
                        </div>
                      </form>

                    </div>

                  </div>
                </div>
              </div>
              <!--  -->
              <!-- Delete modal -->
                    <div class="modal fade" id="deleteModal" tabindex="-1" aria-labelledby="deleteModalLabel" aria-hidden="true">
                <div class="modal-dialog">
                  <div class="modal-content">
                    <div class="modal-header">
                      <h5 class="modal-title" id="deleteModalLabel">Delete</h5>
                      <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
                    </div>
                    <div class="modal-body">
                      <h6>Are you sure you want to delete this post?</h6>
                    </div>
                    <div class="modal-footer d-flex justify-content-center">
                      <button id="delete-button" type="button" class="btn btn-primary form-button">Delete post</button>
                    </div>
                  </div>
                </div>
              </div>
              <!--  -->

                <div class="card image-div">
                  <img
                    src="${media}"
                    class="card-img-top"
                    alt=""
                  />
                  <div class="card-body">
                    <h3>${title}</h3>
                    <p class="card-text">
                      ${body}
                    </p>
                  </div>
                </div>
              </div>`;
  hideDropdown();
}

await getPost();

export { getPost };
// function hideDropdown() {
//   const dropdown = document.querySelector("#edit-dots");
//   console.log(dropdown);

//   const usersName = JSON.parse(localStorage.getItem("name"));

//   console.log(usersName);

//   const postName = document.querySelector(".name h3");
//   console.log(postName.innerHTML);
//   dropdown.style.display = "none";
// }

// if (usersName !== postName) {
//   hideDropdown();
// }
