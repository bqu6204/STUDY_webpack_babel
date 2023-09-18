import img from "./random.jpeg";

var imageElm = `<img src='${img}'/>`;

window.onload = function () {
  document.getElementById("main").innerHTML = imageElm;
};
