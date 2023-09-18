import img from "./100kb.jpg";

var imageElm = `<img src='${img}'/>`;

window.onload = function () {
  document.getElementById("main").innerHTML = imageElm;
};
