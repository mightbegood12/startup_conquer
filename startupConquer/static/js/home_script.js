const menu_item = document.getElementById("menu-item");
const dd_content = document.getElementById("dd-content");
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

function showDropdown(event, contentId, imgId) {
  const dd_content = document.getElementById(contentId);
  const dd_img = document.getElementById(imgId);
  if (dd_content.style.visibility === "visible") {
    dd_content.style.visibility = "hidden";
    dd_content.style.height = "0";
    dd_content.style.opacity = "0";
  } else {
    dd_content.style.visibility = "visible";
    dd_content.style.height = "fit-content"; // You can set a specific height if you prefer
    dd_content.style.opacity = "1";
  }
  var deg = rotated ? 0 : 180;
  dd_img.style.transform = "rotate(" + deg + "deg)";
  rotated = !rotated;
}
