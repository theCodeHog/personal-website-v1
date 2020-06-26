function showGallery(galleryType) {
  console.log(galleryType);

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
