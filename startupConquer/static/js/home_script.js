const menu_item = document.getElementById("menu-item");
const dd_content = document.getElementById("dd-content");
function showMenu() {
  menu_item.classList.toggle("open");
  var div = document.getElementById("nav-btn"),
    deg = rotated ? 0 : 90;
  div.style.transform = "rotate(" + deg + "deg)";

  rotated = !rotated;
}

function showDropdown(event, contentId, imgId) {
  const dd_content = document.getElementById(contentId);
  const dd_img = document.getElementById(imgId);
  if (dd_content.style.visibility === "visible") {
    dd_content.style.visibility = "hidden";
    dd_content.style.height = "0";
    dd_content.style.opacity = "0";
    dd_content.style.padding = "0";
    dd_img.style.transform = "rotate(" + 0 + "deg)";
  } else {
    dd_content.style.visibility = "visible";
    dd_content.style.height = "fit-content"; // You can set a specific height if you prefer
    dd_content.style.opacity = "1";
    dd_content.style.padding = "20px";
    dd_img.style.transform = "rotate(" + 180 + "deg)";
  }
}

var rotated = false;

let [navigation] = performance.getEntriesByType("navigation");
if (navigation && navigation.type === "navigate") {
  let urlHref = window.location.pathname;
  console.log(urlHref);
  if (urlHref.includes("/leaderboard/")) {
    document.getElementById("leaderboard").classList.add("active");
  } else if (urlHref.includes("/about/")) {
    document.getElementById("about").classList.add("active");
  } else if (urlHref.includes("/")) {
    document.getElementById("home").classList.add("active");
  } else if (urlHref.includes("/login/")) {
    document.getElementById("login").classList.add("active");
  } else if (urlHref.includes("/signup/")) {
    document.getElementById("register").classList.add("active");
  }
}
