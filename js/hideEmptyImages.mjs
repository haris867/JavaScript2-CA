export async function hideEmptyImages() {
  const postImages = document.querySelectorAll(".maybe-empty");

  for (let i = 0; i < postImages.length; i++) {
    const thisImage = postImages[i];
    if (thisImage.currentSrc === "") {
      thisImage.style.display = "none";
    }
  }
}
