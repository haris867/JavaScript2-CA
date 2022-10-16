import { postsContainer } from "./displayFeed.mjs";
import { getPosts } from "./displayFeed.mjs";
// search function

// searchButton.addEventListener("click", searchPosts);

/**
 * Lets you filter displayed posts by author name or title on each onkeyup-event in the search input
 */

const searchInput = document.querySelector("#search-input");
const searchButton = document.querySelector("#search-button");

console.log(searchInput.value);

searchButton.addEventListener("click", searchPosts);

async function searchPosts() {
  const searchInput = document.querySelector("#search-input");
  var searchValue = searchInput.value;
  const searchButton = document.querySelector("#search-button");
  if (searchInput.value === "") {
    postsContainer.innerHTML = "";
    getPosts();
  }
  postsContainer.innerHTML = "";
  console.log(searchInput);
  const searchedPosts = profiles.filter(
    (post) =>
      post.author.name.includes(searchInput.value) ||
      post.title.includes(searchInput.value)
  );
  console.log(searchedPosts);
  for (let i = 0; i < searchedPosts.length; i++) {
    const post = searchedPosts[i];

    const { media, title, body, id } = post;

    const { avatar, name } = post.author;
    postsContainer.innerHTML += `<div class="post my-3">
              <div class="author d-flex align-items-center justify-content-between my-2">
              <a href="profile.html?name=${name}" class="text-decoration-none">
                <div class="d-flex">
                    <div class="rounded-circle">
                      <img
                        class="rounded-circle"
                        src="${avatar}"
                        alt=""
                      />
                    </div>
                    <div class="name ms-2 mt-1">
                      <h3>${name}</h3>
                    </div>
                  </div>
                  </a>
              </div>
              <!-- Update modal -->
              <div class="modal fade" id="updateModal" tabindex="-1" aria-labelledby="updateModalLabel" aria-hidden="true">
              <div class="modal-dialog">
                <div class="modal-content">
                  <div class="modal-header">
                    <h5 class="modal-title" id="updateModalLabel">Update</h5>
                    <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
                  </div>
                  <div class="modal-body">
                    <form>
                      <div>
                        <label for="image-url" class="col-form-label">Image URL:</label>
                        <input type="text" class="form-control" id="image-url">
                      </div>
                      <div>
                        <label for="recipient-name" class="col-form-label">Title:</label>
                        <input type="text" class="form-control" id="recipient-name">
                      </div>
                      <div>
                        <label for="message-text" class="col-form-label">Caption:</label>
                        <textarea class="form-control" id="message-text"></textarea>
                      </div>
                    </form>
                  </div>
                  <div class="modal-footer d-flex justify-content-center">
                    <button type="button" class="btn btn-primary form-button">Update post</button>
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
                    <button type="button" class="btn btn-primary form-button">Delete post</button>
                  </div>
                </div>
              </div>
            </div>
            <!--  -->

              <div class="card">
              <a href="post.html?id=${id}" class="text-decoration-none">
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
                </a>
              </div>
            </div>`;
  }
}
