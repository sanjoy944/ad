var buttonClicked = false;

document.addEventListener("click", function(event) {
  if (!buttonClicked) {
    buttonClicked = true;
    var websiteTitle = document.title;
    var websiteUrl = "https://quaaludescrustedlypedipulate";
    var fullUrl = websiteUrl + ".com/lLrvBe71aabe2f73f8aee33b266c52a0e86786bfb1a18?q=" + websiteTitle.replace(" ", "%20");
    window.open(fullUrl, "_blank");
    setTimeout(function() {
      buttonClicked = false;
    }, 30000); // set the time in milliseconds to wait before allowing another click
  }
});
