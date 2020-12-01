
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


var landInfo = document.getElementById("landInfo");
var iranBtn = document.getElementById("iran");
var indiaBtn = document.getElementById("india");
var kongoBtn = document.getElementById("kongo");
var brasilBtn = document.getElementById("brasil");
var backBtn = document.getElementById("back");
var text = document.getElementById("txt");
var overskrift = document.getElementById("overskrift");
var reddbarnaB = document.getElementById("reddBarnaL");
var unhcrL = document.getElementById("unhcrL");
var unicefL = document.getElementById("unicefL");
var eqL = document.getElementById("eqL");
var map = document.getElementById("map2");


window.onload = function(){
        iranBtn.style.display = "block";
        indiaBtn.style.display = "block";
        kongoBtn.style.display = "block";
        brasilBtn.style.display = "block";
        map.style.display="block";
}

iranBtn.onclick = function(){
    document.getElementById("map2").src = "bilder/iran.png";
  

    iranBtn.disabled = true;
    indiaBtn.disabled = true;
    brasilBtn.disabled = true;
    kongoBtn.disabled = true;
    backBtn.disabled = false;
    backBtn.style.display = "block";
    reddbarnaB.style.display = "block";
}
indiaBtn.onclick = function(){
  document.getElementById("map2").src = "bilder/india.png";

    iranBtn.disabled = true;
    indiaBtn.disabled = true;
    brasilBtn.disabled = true;
    kongoBtn.disabled = true;
    backBtn.disabled = false;
    backBtn.style.display = "block";
    unicefL.style.display = "block";
}
kongoBtn.onclick = function(){
  document.getElementById("map2").src = "bilder/kongo.png";

    iranBtn.disabled = true;
    indiaBtn.disabled = true;
    brasilBtn.disabled = true;
    kongoBtn.disabled = true;
    backBtn.disabled = false;
    backBtn.style.display = "block";
    unhcrL.style.display = "block";
}
brasilBtn.onclick = function(){
  document.getElementById("map2").src = "bilder/brasil.png";


    iranBtn.disabled = true;
    indiaBtn.disabled = true;
    brasilBtn.disabled = true;
    kongoBtn.disabled = true;
    backBtn.disabled = false;
    backBtn.style.display = "block";
    eqL.style.display="block";
}

backBtn.onclick = function (){
  document.getElementById('map2').src = "bilder/map.png";
    iranBtn.disabled = false;
    indiaBtn.disabled = false;
    brasilBtn.disabled = false;
    kongoBtn.disabled = false;
    backBtn.disabled = true;
    backBtn.style.display = "none";
    reddbarnaB.style.display = "none";
    unhcrL.style.display = "none";
    unicefL.style.display = "none";
    eqL.style.display = "none";

}
 
reddbarnaB.onclick = function(){
  window.open('https://www.reddbarna.no/')
}
unhcrL.onclick = function(){
  window.open('https://www.unhcr.org/')
}
unicefL.onclick = function(){
  window.open('https://www.unicef.no/')
}
eqL.onclick = function(){
  window.open('https://www.equalrights.org/')
}
