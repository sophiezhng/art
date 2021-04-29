// create references to the modal...
var modal = document.getElementById('myModal');
// to all images -- note I'm using a class!
var images = document.getElementsByClassName('myImages');
// the image in the modal
var modalImg = document.getElementById("img01");
// and the caption in the modal
var captionText = document.getElementById("caption");

var num = 0;

// Go through all of the images with our custom class
for (var i = 0; i < images.length; i++) {
  var img = images[i];
  // and attach our click listener for this image.
  img.onclick = function(evt) {
    num = i;
    modal.style.display = "block";
    modalImg.src = this.src;
    captionText.innerHTML = this.alt;
  }
}

var span = document.getElementsByClassName("close")[0];
var prev = document.getElementsByClassName("prev")[0];
var next = document.getElementsByClassName("next")[0];

// When the user clicks on <span> (x), close the modal
span.onclick = function() {
  modal.style.display = "none";
}

prev.onclick = function() {
  num--;
  if (num < 0) {
    num = images.length - 1;
  }
  var img = images[num];
  modalImg.src = img.src;
  captionText.innerHTML = img.alt;
}

next.onclick = function() {
  num++;
  if (num >= images.length) {
    num = 0;
  }
  var img = images[num];
  modalImg.src = img.src;
  captionText.innerHTML = img.alt;
}