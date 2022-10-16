export function createProfileLink() {
  const usersName = JSON.parse(localStorage.getItem("name"));
  const profileButton = document.querySelector("#profile-button");
  profileButton.href = `profile.html?name=${usersName}`;
}

createProfileLink();
