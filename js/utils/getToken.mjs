/**
 * Gets token from LocalStorage to use in other API requests
 */
export function getToken() {
  const accessToken = localStorage.getItem("token");
  if (accessToken === null) {
    return [];
  } else {
    return JSON.parse(accessToken);
  }
}
