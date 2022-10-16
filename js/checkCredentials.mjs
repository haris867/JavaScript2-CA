export function checkCredentials() {
  const checkToken = localStorage.getItem("token");
  if (!checkToken) {
    window.location = "index.html";
  }
}

checkCredentials();
