export function hideDropdown() {
  const userName = localStorage.getItem("name");
  console.log(JSON.parse(userName));
  const nameContainer = document.querySelector(".post-author-name");
  const authorName = nameContainer.innerHTML;
  console.log(authorName);
  if (JSON.parse(userName) !== authorName) {
    console.log("YES");
    const editDropdown = document.querySelector("#edit-dots");
    console.log(editDropdown);
    editDropdown.style.display = "none";
  }
}
