import { hideEmptyImages } from "./hideEmptyImages.mjs";
import { getToken } from "./utils/getToken.mjs";
const url =
  "https://nf-api.onrender.com/api/v1/social/posts?_author=true&_comments=true&limit=100";

/**
 * Gets token from LocalStorage to use in other API requests
 */

const token = getToken();

const options = {
  headers: {
    Authorization: `Bearer ${token}`,
  },
};

export const postsContainer = document.querySelector(".post-container");

console.log(postsContainer);

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
  console.log(profiles);
  postsContainer.innerHTML = "";
  for (let i = 0; i < profiles.length; i++) {
    const post = profiles[i];

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
                        onerror="this.src='https://user-images.githubusercontent.com/73777398/196037714-5faabc3d-ce7f-427a-a6ec-b13ae9a76348.png';"
                      />
                    </div>
                    <div class="name ms-2 mt-1">
                      <h3>${name}</h3>
                    </div>
                  </div>
                  </a>
              </div>
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

  // search functionality
  const searchInput = document.querySelector("#search-input");
  const searchButton = document.querySelector("#search-button");
  searchButton.addEventListener("click", search);
  searchInput.onkeyup = function (event) {
    if (event.keyCode === 13) {
      searchButton.click();
    } else if (searchInput.value === "") {
      postsContainer.innerHTML = "";
      getPosts();
    }
  };
  async function search() {
    searchFilter();
  }
  /**
   * Lets you filter displayed posts by author name or title on each onkeyup-event in the search input
   */
  async function searchFilter() {
    const searchedPosts = profiles.filter(
      (post) =>
        post.author.name
          .toLowerCase()
          .includes(searchInput.value.toLowerCase()) ||
        post.title.toLowerCase().includes(searchInput.value.toLowerCase())
    );
    console.log(searchedPosts);
    if (searchInput.value === "") {
      postsContainer.innerHTML = "";
      getPosts();
    }
    postsContainer.innerHTML = "";
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
                        onerror="this.src='https://user-images.githubusercontent.com/73777398/196037714-5faabc3d-ce7f-427a-a6ec-b13ae9a76348.png';"
                      />
                    </div>
                    <div class="name ms-2 mt-1">
                      <h3>${name}</h3>
                    </div>
                  </div>
                  </a>
              </div>
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
  }
  await hideEmptyImages();
}

await getPosts();

await hideEmptyImages();

export { getPosts };
