var video = document.getElementById("showcase"),
  fraction = 0.8;

console.log(video.children);

function checkScroll() {
  var x = video.offsetLeft,
    y = video.offsetTop,
    w = video.offsetWidth,
    h = video.offsetHeight,
    r = x + w, //right
    b = y + h, //bottom
    visibleX,
    visibleY,
    visible;

  //if (
  //  window.pageXOffset >= r ||
  //  window.pageYOffset >= b ||
  //  window.pageXOffset + window.innerWidth < x ||
  //  window.pageYOffset + window.innerHeight < y
  //) {
  //  info.innerHTML = "0%";
  //  return;
  //}

  visibleX = Math.max(
    0,
    Math.min(
      w,
      window.pageXOffset + window.innerWidth - x,
      r - window.pageXOffset
    )
  );
  visibleY = Math.max(
    0,
    Math.min(
      h,
      window.pageYOffset + window.innerHeight - y,
      b - window.pageYOffset
    )
  );

  visible = (visibleX * visibleY) / (w * h);

  //info.innerHTML = Math.round(visible * 100) + "%";

  if (visible > fraction) {
    video.play();
  } else {
    video.pause();
  }
}

window.addEventListener("scroll", checkScroll, false);
window.addEventListener("resize", checkScroll, false);

//one time at the beginning, in case it starts in view
checkScroll();

//as soon as we know the video dimensions
video.addEventListener("loadedmetadata", checkScroll, false);
