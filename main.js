//function to change CSS to switch between gallery-types

function showGallery(galleryType) {
  if (galleryType !== "designer-developer-gallery") {
    document.getElementById("designer-developer-gallery").style.display =
      "none";
  }
  if (galleryType !== "artist-gallery") {
    document.getElementById("artist-gallery").style.display = "none";
  }
  if (galleryType !== "dancer-gallery") {
    document.getElementById("dancer-gallery").style.display = "none";
  }

  document.getElementById(galleryType).style.display = "grid";
}
