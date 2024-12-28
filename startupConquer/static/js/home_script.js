const menu_item = document.getElementById("menu-item");
function showMenu() {
  menu_item.classList.toggle("open");
  var div = document.getElementById("nav-btn"),
    deg = rotated ? 0 : 90;

  div.style.webkitTransform = "rotate(" + deg + "deg)";
  div.style.mozTransform = "rotate(" + deg + "deg)";
  div.style.msTransform = "rotate(" + deg + "deg)";
  div.style.oTransform = "rotate(" + deg + "deg)";
  div.style.transform = "rotate(" + deg + "deg)";

  rotated = !rotated;
}

var rotated = false;
