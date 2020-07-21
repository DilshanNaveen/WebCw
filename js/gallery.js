var imageNumber = 1;
var counter;
var imageDescriptionIndex = 1;

// page color changing function.
function changePageColor(color) {
  document.getElementsByTagName("body")[0].style.backgroundColor = color;
}

// color changing function.
function changeFontColor(color) {
  for (counter = 0; counter < textElements.length; counter++) {
    document.getElementsByClassName("changeable-text")[counter].style.color = color;
  }
}

// Next/previous controls
function plusSlides(n) {
  displayGalleryImages(imageNumber += n);
}

// Thumbnail image controls
function currentSlide(n) {
  displayGalleryImages(imageNumber = n);
}

function displayGalleryImages(selectedImage) {
  var images = document.getElementsByClassName("mySlides");
  var sampleImage = document.getElementsByClassName("sample-image");
  var imageDescription = document.getElementsByClassName("image-description");

  if (selectedImage > images.length) {
    imageNumber = 1;
    imageDescriptionIndex = 1;
  }
  if (selectedImage < 1) {
    imageNumber = images.length;
    imageDescriptionIndex = imageDescription.length;
  }
  for (counter = 0; counter < images.length; counter++) {
    images[counter].style.display = "none";
  }
  for (counter = 0; counter < imageDescription.length; counter++) {
    imageDescription[counter].style.display = "none";
  }
  for (counter = 0; counter < sampleImage.length; counter++) {
    sampleImage[counter].className = sampleImage[counter].className.replace(" active", "");
  }

  // display image and Description
  images[imageNumber - 1].style.display = "block";
  imageDescription[imageNumber - 1].style.display = "block";

}

// execute display function.
displayGalleryImages(imageNumber);