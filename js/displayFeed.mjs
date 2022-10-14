const url =
  "https://nf-api.onrender.com/api/v1/social/posts?_author=true&_comments=true&limit=1000";

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
  headers: {
    Authorization: `Bearer ${token}`,
  },
};

export const postsContainer = document.querySelector(".post-container");

/**
 * Fetches and displays filtered posts from the API
 */
async function getPosts() {
  // function checkCredentials() {
  //   const checkToken = localStorage.getItem("token");
  //   if (!checkToken) {
  //     window.location = "index.html";
  //   }
  // }

  // checkCredentials();
  //get posts
  const response = await fetch(url, options);
  const profiles = await response.json();
  //
  // display posts
  const filteredPosts = profiles.filter(
    (post) =>
      post.body &&
      post.title &&
      post.author.avatar &&
      !post.body.includes("example")
  );

  for (let i = 0; i < filteredPosts.length; i++) {
    const post = filteredPosts[i];

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
                  class="card-img-top maybe-empty"
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

  // search function

  const searchInput = document.querySelector("#search-input");
  var searchValue = searchInput.value;
  const searchButton = document.querySelector("#search-button");

  // searchButton.addEventListener("click", searchPosts);

  /**
   * Lets you filter displayed posts by author name or title on each onkeyup-event in the search input
   */
  searchInput.onkeyup = function searchPosts() {
    if (searchInput.value === "") {
      postsContainer.innerHTML = "";
      getPosts();
    }
    postsContainer.innerHTML = "";
    console.log(searchInput);
    const searchedPosts = filteredPosts.filter(
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
  };
}

getPosts();

export { getPosts };

// const postImage = document.querySelector(".card-top-img");

// if (media === "") {
//   postImage.style.display = "none";
// }
