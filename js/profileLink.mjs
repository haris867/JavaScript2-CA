const usersName = JSON.parse(localStorage.getItem("name"));
console.log(usersName);

const profileButton = document.querySelector("#profile-button");

console.log(profileButton);

profileButton.href = `profile.html?name=${usersName}`;
