var buttonClicked = false;

document.addEventListener("click", function(event) {
  if (!buttonClicked) {
    buttonClicked = true;
    var websiteTitle = document.title;
    var websiteUrl = "https://gharriesbyzantinesalmonidae";
    var fullUrl = websiteUrl + ".com/2Nrg27ffd7d591b1d5bf0bd06bc4be178e89655898300?q=" + websiteTitle.replace(" ", "%20");
    window.open(fullUrl, "_blank");
    setTimeout(function() {
      buttonClicked = false;
    }, 30000); // set the time in milliseconds to wait before allowing another click
  }
});