const paths = document.querySelectorAll(".land");
const tooltip = document.getElementById("tooltip");
const questionWrapper = document.getElementById("question-wrapper");

const keywords = ["hello", "map", "doodle"];

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
  path.addEventListener("click", function () {
    sessionStorage.removeItem("selectedSector");
    window.location.href = "http://127.0.0.1:8000/spinthewheel/";
  });
});

document.addEventListener("DOMContentLoaded", function () {
  console.log("DOM fully loaded and parsed!");
  // You can safely manipulate DOM elements here
  const element = document.getElementById("sector-selected");
  element.textContent = sessionStorage.getItem("selectedSector");
  if (sessionStorage.getItem("selectedSector")) {
    questionWrapper.classList.toggle("hidden");
  }

  document.getElementById("conquer-btn").addEventListener("click", function () {
    const userInput = document.getElementById("user-input");
    const userSubmitValue = userInput.value;
    if (keywords.includes(userSubmitValue)) {
      questionWrapper.classList.toggle("hidden");
      console.log(userInput, userSubmitValue);
    }
    console.log("Conquer button clicked", userSubmitValue);
  });
});
