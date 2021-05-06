// create references to the modal...
var modal = document.getElementById('myModal');
// to all images -- note I'm using a class!
var images = document.getElementsByClassName('myImages');
// the image in the modal
var modalImg = document.getElementById("img01");
// and the caption in the modal
var captionText = document.getElementById("caption");
var dataSrc;

var span = document.getElementsByClassName("close")[0];
var prev = document.getElementsByClassName("prev")[0];
var next = document.getElementsByClassName("next")[0];

var num = 0;

// Go through all of the images with our custom class
for (var i = 0; i < images.length; i++) {
  var img = images[i];
  images[i].setAttribute("index-data", i);
  // and attach our click listener for this image.
  img.onclick = function(evt) {
    num = this.getAttribute("index-data");
    modal.style.display = "block";
    if (images.length < 2) {
      prev.style.display = "none";
      next.style.display = "none";
    }
    dataSrc = this.getAttribute("data-src");
    if (dataSrc!=null) {
      modalImg.src = dataSrc;
    }
    else {
      modalImg.src = this.src;
    }
    captionText.innerHTML = this.alt;
  }
}

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
  dataSrc = img.getAttribute("data-src");
  modalImg.src = img.src;
  if (dataSrc!=null) {
    modalImg.src = dataSrc;
  }
  captionText.innerHTML = img.alt;
}

next.onclick = function() {
  num++;
  if (num >= images.length) {
    num = 0;
  }
  var img = images[num];
  dataSrc = img.getAttribute("data-src");
  modalImg.src = img.src;
  if (dataSrc!=null) {
    modalImg.src = dataSrc;
  }
  captionText.innerHTML = img.alt;
}

 // function to set a given theme/color-scheme
 function setTheme(themeName) {
  localStorage.setItem('theme', themeName);
  document.documentElement.className = themeName;
}

// function to toggle between light and dark theme
function toggleTheme() {
  if (localStorage.getItem('theme') === 'dark-theme') {
      setTheme('light-theme');
  } else {
      setTheme('dark-theme');
  }
}

// Immediately invoked function to set the theme on initial load
(function () {
  if (localStorage.getItem('theme') === 'dark-theme') {
      setTheme('dark-theme');
      document.getElementById('slider').checked = false;
  } else {
      setTheme('light-theme');
    document.getElementById('slider').checked = true;
  }
})();