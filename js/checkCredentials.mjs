function checkCredentials() {
  const checkToken = localStorage.getItem("token");
  if (!checkToken) {
    window.location = "login.html";
  }
}

checkCredentials();
