var prevScrollpos = window.pageYOffset || document.documentElement.scrollTop;
window.addEventListener("scroll", function () {
  var currentScrollPos =
    window.pageYOffset || document.documentElement.scrollTop;
  if (prevScrollpos > currentScrollPos) {
    document.getElementById("navbar").style.top = "0";
  } else {
    document.getElementById("navbar").style.top = "-80px";
  }
  prevScrollpos = currentScrollPos;
});

var videoFeature1 = "https://www.youtube.com/embed/pRmg6z4ydcc";
var videoFeature1Texts = [["Created by"], ["Danish Nasarudin"]];
var videoFeature2 = "https://www.youtube.com/embed/oItNpHQAE9k";
var videoFeature2Texts = [["Created by"], ["Danish Nasarudin"]];

var videoLong1 = "https://www.youtube.com/embed/Mu0Zlg7LuH0";
var videoLong1Texts = [
  ["Directed by", "Co-Directed by", "Shot / Edited by"],
  ["Teh Choon Ming", "Loy Shoong Yit", "Danish Nasarudin"],
];
var videoLong2 = "https://www.youtube.com/embed/fhG3tvP0HW4";
var videoLong2Texts = [
  ["Directed by", "Co-Directed by", "Shot / Edited by"],
  ["Teh Choon Ming", "Loy Shoong Yit", "Danish Nasarudin"],
];
var videoLong3 = "https://www.youtube.com/embed/iac_NwvDX58";
var videoLong3Texts = [
  ["Directed by", "Co-Directed by", "Shot / Edited by"],
  ["Teh Choon Ming", "Loy Shoong Yit", "Danish Nasarudin"],
];

var videoMV1 = "https://www.youtube.com/embed/rKA1mWKXf2w";
var videoMV1Texts = [["Created by"], ["Danish Nasarudin"]];
var videoMV2 = "https://www.youtube.com/embed/vbFQ_phDNDY";
var videoMV2Texts = [["Created by"], ["Danish Nasarudin"]];
var videoMV3 = "https://www.youtube.com/embed/H1pn6T7oylM";
var videoMV3Texts = [["Created by"], ["Danish Nasarudin"]];

var videoWedding1 = "https://www.youtube.com/embed/GG7clmQhlSk";
var videoWedding1Texts = [["Created by"], ["Danish Nasarudin"]];
var videoWedding2 = "https://www.youtube.com/embed/cupGXpotICM";
var videoWedding2Texts = [["Created by"], ["Danish Nasarudin"]];
var videoWedding3 = "https://www.youtube.com/embed/vKhltgFyimY";
var videoWedding3Texts = [["Created by"], ["Danish Nasarudin"]];

var videoTutorial1 = "https://www.youtube.com/embed/ulUlVScZiUo";
var videoTutorial1Texts = [
  ["Directed by", "Shot / Edited by"],
  ["Loy Shoong Yit", "Danish Nasarudin"],
];
var videoTutorial2 = "https://www.youtube.com/embed/VosoiTpm_xQ";
var videoTutorial2Texts = [
  ["Directed by", "Shot / Edited by"],
  ["Loy Shoong Yit", "Danish Nasarudin"],
];
var videoTutorial3 = "https://www.youtube.com/embed/fpxIYtIz-gM";
var videoTutorial3Texts = [
  ["Directed by", "Shot / Edited by"],
  ["Loy Shoong Yit", "Danish Nasarudin"],
];

var videoHigh1 = "https://www.youtube.com/embed/op6EzyB4R0M";
var videoHigh1Texts = [
  ["Directed by", "Shot / Edited by"],
  ["Loy Shoong Yit", "Danish Nasarudin"],
];
var videoHigh2 = "https://www.youtube.com/embed/IbbZ2qwSmxQ";
var videoHigh2Texts = [
  ["Directed by", "Shot / Edited by"],
  ["Loy Shoong Yit", "Danish Nasarudin"],
];
var videoHigh3 = "https://www.youtube.com/embed/uldf7nxLkUA";
var videoHigh3Texts = [
  ["Directed by", "Shot / Edited by"],
  ["Loy Shoong Yit", "Danish Nasarudin"],
];

function onOverlay(videoToView, videoToViewTexts) {
  document.getElementById("overlay-view").style.display = "block";
  document.getElementById("video-overlay").src = videoToView;

  if (videoToViewTexts[0].length > 2) {
    var combine1 =
      videoToViewTexts[0][0] +
      "<br>" +
      videoToViewTexts[0][1] +
      "<br>" +
      videoToViewTexts[0][2];
    var combine2 =
      videoToViewTexts[1][0] +
      "<br>" +
      videoToViewTexts[1][1] +
      "<br>" +
      videoToViewTexts[1][2];
  } else if (videoToViewTexts[0].length > 1) {
    var combine1 = videoToViewTexts[0][0] + "<br>" + videoToViewTexts[0][1];
    var combine2 = videoToViewTexts[1][0] + "<br>" + videoToViewTexts[1][1];
  } else {
    var combine1 = videoToViewTexts[0][0];
    var combine2 = videoToViewTexts[1][0];
  }
  document.getElementById("video-overlay-texts1").innerHTML = combine1;
  document.getElementById("video-overlay-texts2").innerHTML = combine2;
}

function offOverlay() {
  document.getElementById("overlay-view").style.display = "none";
  document.getElementById("video-overlay").src = "";
}
