document.addEventListener("DOMContentLoaded", function () {
  const paths = document.querySelectorAll(".land");
  const tooltip = document.getElementById("tooltip");
  paths.forEach((path) => {
    path.addEventListener("mouseenter", function (event) {
      const title = event.target.getAttribute("title");
      tooltip.textContent = title;
      tooltip.style.display = "block";
      tooltip.style.left = event.pageX + "px";
      tooltip.style.top = event.pageY + 10 + "px";
    });
    path.addEventListener("mousemove", function (event) {
      // Reposition the tooltip as the mouse moves
      tooltip.style.left = event.pageX + "px";
      tooltip.style.top = event.pageY + 10 + "px";
    });
    path.addEventListener("mouseleave", function () {
      tooltip.style.display = "none";
    });
  });
});
