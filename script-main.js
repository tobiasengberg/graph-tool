var xOrigin;
var yOrigin;
var state = 0;
var createPath;

const lines = [];

var createSVG = document.createElementNS("http://www.w3.org/2000/svg", "svg");
createSVG.setAttribute("width", window.innerWidth);
createSVG.setAttribute("height", window.innerHeight);
document.getElementsByTagName("body")[0].appendChild(createSVG);

window.addEventListener("resize", function (e) {
  createSVG.setAttribute("width", window.innerWidth);
  createSVG.setAttribute("height", window.innerHeight);
});

window.addEventListener("mousedown", function (e) {
  if (state == 0) {
    xOrigin = e.pageX;
    yOrigin = e.pageY;
    state = 1;
  }
});

window.addEventListener("mousemove", function (e) {
  if (state == 1) {
    createPath = document.createElementNS("http://www.w3.org/2000/svg", "path");
    createPath.setAttribute(
      "d",
      "M " + xOrigin + " " + yOrigin + " L " + e.pageX + " " + e.pageY
    );
    createSVG.appendChild(createPath);
    state = 2;
  } else if (state == 2) {
    createPath.setAttribute(
      "d",
      "M " + xOrigin + " " + yOrigin + " L " + e.pageX + " " + e.pageY
    );
  }
});

window.addEventListener("mouseup", function (e) {
  if (state == 2) {
    state = 0;
  }
});
