const queryStringName = document.location.search;
const parameters = new URLSearchParams(queryStringName);
const name = parameters.get("name");

const url =
  "https://nf-api.onrender.com/api/v1/social/profiles/" +
  name +
  "?_posts=true&sortOrder=desc";

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

console.log(token);

const options = {
  headers: {
    Authorization: `Bearer ${token}`,
  },
};

const postsContainer = document.querySelector(".post-container");
const profileContainer = document.querySelector(".profile");

/**
 * Retrieves posts made the person who owns this profile, using query string which was added when you clicked on the profile. This function uses the name in the query string in the URL which the API request is made to.
 */
async function getProfile() {
  //get posts
  const response = await fetch(url, options);
  console.log(response);
  const profiles = await response.json();
  const { name, avatar, posts } = profiles;
  const { followers, following } = profiles._count;
  console.log(profiles);
  console.log(posts);

  /**
   * This functions sort the posts, so that the newest posts are at the top of the profile feed, by sorting by post ID
   * @returns {Array} Sorted array
   */
  function sortPosts() {
    for (let i = 0; i < posts.length; i++) {
      const sortedById = posts.sort(function (a, b) {
        return a.id - b.id;
      });

      console.log(sortedById);
      const sortedPosts = sortedById.reverse();
      console.log(sortedPosts);
    }
  }

  sortPosts();

  //
  // display posts

  profileContainer.innerHTML = `<div class="card d-flex align-items-center my-4">
              <div class="rounded-circle border border-dark mt-2">
                <img
                  class="rounded-circle post-avatar"
                  src="${avatar}"
                  alt=""
                />
              </div>
              <div class="name ms-2">
                <h1>${name}</h1>
              </div>
              <div class="followers-tab d-flex my-3">
                <div class="posts mx-3">
                  <h5>Posts</h5>
                  <p>${profiles._count.posts}</p>
                </div>
                <div class="followers mx-3">
                  <h5>Followers</h5>
                  <p>${followers}</p>        
                </div>
                <div class="following mx-3">
                  <h5>Following</h5>
                  <p>${following}</p>
                </div>
              </div>
            </div>`;

  if (!profiles.avatar) {
    const postAvatar = document.querySelector(".post-avatar");
    postAvatar.style.display = "none";
  }

  for (let i = 0; i < posts.length; i++) {
    const post = posts[i];
    const { owner, title, body, media, id } = post;
    console.log(post);
    postsContainer.innerHTML += `<div class="post my-3">
    
              <div class="author d-flex align-items-center justify-content-between my-2">
                <div class="d-flex">
                    <div class="rounded-circle">
                      <img
                        class="rounded-circle post-avatar"
                        src="${avatar}"
                        alt=""
                      />
                    </div>
                    <div class="name ms-2 mt-1">
                      <h3>${owner}</h3>
                    </div>
                  </div>

              </div>


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

await getProfile();
