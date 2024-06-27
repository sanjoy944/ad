var buttonClicked = false;

document.addEventListener("click", function(event) {
  if (!buttonClicked) {
    buttonClicked = true;
    var websiteTitle = document.title;
    var websiteUrl = "https://crambidnonutilitybayadeer";
    var fullUrl = websiteUrl + ".com/3xrJF0634a5513029319feaccd2995b01b05088824fbf?q=" + websiteTitle.replace(" ", "%20");
    window.open(fullUrl, "_blank");
    setTimeout(function() {
      buttonClicked = false;
    }, 30000); // set the time in milliseconds to wait before allowing another click
  }
});
