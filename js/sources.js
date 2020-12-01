

var scrollEn = window.pageYOffset;
window.onscroll = function() {
  var scrollTo = window.pageYOffset;
  if (scrollEn > scrollTo) {
    document.getElementById("navbar").style.top = "0";
  } else {
    document.getElementById("navbar").style.top = "-200px";
  }
  scrollEn = scrollTo;
}
