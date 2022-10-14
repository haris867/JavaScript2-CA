async function hideEmptyImages() {
  const postImages = document.querySelectorAll(".maybe-empty");

  for (let i = 0; i < postImages.length; i++) {
    const thisImage = postImages[i];
    console.log(thisImage.src);
    if (!media) {
      thisImage.style.display = "none";
    }
  }
}
await hideEmptyImages();
