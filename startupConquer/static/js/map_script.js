const states = document.querySelectorAll(".land");
const tooltip = document.getElementById("tooltip");
const questionWrapper = document.getElementById("question-wrapper");
const sectorSelectedElement = document.getElementById("sector-selected");
const spinTheWheel = document.getElementById("spin-the-wheel-section");
const sectorContinue = document.getElementById("sector-pass");
const selectedSectorWrapper = document.querySelector("#sectorWrapper");
const selectedSectorText = document.querySelector("#selected-sector");
const stateConqueredProgress = document.getElementById("state-conquered-bar");
const stateLen = document.getElementById("state-conquered-len");
const resetBtn = document.getElementById("reset-btn");
let stateConquered = JSON.parse(sessionStorage.getItem("stateConquered")) || [];
let gameScore = JSON.parse(sessionStorage.getItem("score")) || 0;
let recentState = JSON.parse(sessionStorage.getItem("recentState")) || "";
let selectedSector;

const keywords = ["hello", "map", "doodle"];
// console.log(states.length); //35

resetBtn.addEventListener("click", function () {
  sessionStorage.clear();
  location.reload();
});

//Map Logic
states.forEach((state) => {
  state.addEventListener("mouseenter", function (event) {
    const title = event.target.getAttribute("title");
    tooltip.textContent = title;
    tooltip.style.display = "block";
    tooltip.style.left = event.pageX + "px";
    tooltip.style.top = event.pageY + 10 + "px";
  });
  state.addEventListener("mousemove", function (event) {
    // Reposition the tooltip as the mouse moves
    tooltip.style.left = event.pageX + "px";
    tooltip.style.top = event.pageY + 10 + "px";
  });
  state.addEventListener("mouseleave", function () {
    tooltip.style.display = "none";
  });
  state.addEventListener("click", function (e) {
    if (!stateConquered.includes(e.target.getAttribute("id"))) {
      stateConquered.push(e.target.getAttribute("id"));
      recentState = e.target.getAttribute("title");
      sessionStorage.setItem("recentState", JSON.stringify(recentState));
      sessionStorage.setItem("stateConquered", JSON.stringify(stateConquered));
      console.log(stateConquered);
      // window.location.href = "http://127.0.0.1:8000/spinthewheel/";
      if (selectedSector) {
        selectedSectorWrapper.classList.toggle("hidden"); //hides
      }
      spinTheWheel.classList.toggle("hidden");
      init();
    } else {
      alert("Already Conquered!");
    }
  });
  if (stateConquered.includes(state.getAttribute("id"))) {
    state.style.fill = "#fcda05";
    stateConqueredProgress.value = stateConquered.length;
    stateLen.textContent = `${stateConquered.length}/35`;
  }
});

//Keyword Match Function

function compareKeywords(userInput, keywords) {
  const matches = [];
  userInput.forEach((input) => {
    if (keywords.includes(input)) {
      matches.push(input);
    }
  });
  return matches;
}

document.addEventListener("DOMContentLoaded", function () {
  console.log("DOM fully loaded and parsed!");
  // You can safely manipulate DOM elements here
  document.getElementById("conquer-btn").addEventListener("click", function () {
    const userInput = document.getElementById("user-input");
    const userSubmitValue = userInput.value.split(" ");
    const keywordMatches = compareKeywords(userSubmitValue, keywords);
    // console.log(userSubmitValue);
    if (keywordMatches.length != 0) {
      questionWrapper.classList.toggle("hidden");
      const score = keywordMatches.length;
      gameScore += score;
      sessionStorage.setItem("score", JSON.stringify(gameScore));
      location.reload();
    } else {
      alert("Not a valid answer");
    }
  });
  sectorContinue.addEventListener("click", function () {
    spinTheWheel.classList.toggle("hidden"); //hides
    questionWrapper.classList.toggle("hidden"); //unhides
    sectorSelectedElement.textContent = selectedSector;
  });
  document.getElementById("recent-state").textContent =
    recentState || "No State Conquered!";
  document.getElementById("game-score").textContent = gameScore || 0;
});

// SPIN THE WHEEL
const sectors = [
  { color: "#1C2127", text: "#fcda05", label: "Technology and Innovation" },
  { color: "#fcda05", text: "#1C2127", label: "Healthcare and Wellness" },
  {
    color: "#1C2127",
    text: "#fcda05",
    label: "Education and Skill Development",
  },
  {
    color: "#fcda05",
    text: "#1C2127",
    label: "Agriculture and Sustainability",
  },
  { color: "#1C2127", text: "#fcda05", label: "Retail and E-commerce" },
  { color: "#fcda05", text: "#1C2127", label: "Infrastructure and Transport" },
];

const events = {
  listeners: {},
  addListener: function (eventName, fn) {
    this.listeners[eventName] = this.listeners[eventName] || [];
    this.listeners[eventName].push(fn);
  },
  fire: function (eventName, ...args) {
    if (this.listeners[eventName]) {
      for (let fn of this.listeners[eventName]) {
        fn(...args);
      }
    }
  },
};

const rand = (m, M) => Math.random() * (M - m) + m;
const tot = sectors.length;
const spinEl = document.querySelector("#spin");
const ctx = document.querySelector("#wheel").getContext("2d");
const dia = ctx.canvas.width;
const rad = dia / 2;
const PI = Math.PI;
const TAU = 2 * PI;
const arc = TAU / sectors.length;

const friction = 0.98; // 0.995=soft, 0.99=mid, 0.98=hard
let angVel = 0; // Angular velocity
let ang = 0; // Angle in radians

let spinButtonClicked = false;

const getIndex = () => Math.floor(tot - (ang / TAU) * tot) % tot;

function drawSector(sector, i) {
  const ang = arc * i;
  ctx.save();

  // COLOR
  ctx.beginPath();
  ctx.fillStyle = sector.color;
  ctx.moveTo(rad, rad);
  ctx.arc(rad, rad, rad, ang, ang + arc);
  ctx.lineTo(rad, rad);
  ctx.fill();

  // TEXT
  ctx.translate(rad, rad);
  ctx.rotate(ang + arc / 2);
  ctx.textAlign = "right";
  ctx.fillStyle = sector.text;
  ctx.font = " 1rem 'Mohave', sans-serif";
  ctx.fillText(sector.label, rad - 10, 10, 180);
  //

  ctx.restore();
}

function rotate() {
  const sector = sectors[getIndex()];
  ctx.canvas.style.transform = `rotate(${ang - PI / 2}rad)`;

  spinEl.textContent = !angVel ? "SPIN" : sector.label;
  spinEl.style.background = sector.color;
  spinEl.style.color = sector.text;
}

function frame() {
  // Fire an event after the wheel has stopped spinning
  if (!angVel && spinButtonClicked) {
    const finalSector = sectors[getIndex()];
    events.fire("spinEnd", finalSector);
    spinButtonClicked = false; // reset the flag
    return;
  }

  angVel *= friction; // Decrement velocity by friction
  if (angVel < 0.002) angVel = 0; // Bring to stop
  ang += angVel; // Update angle
  ang %= TAU; // Normalize angle
  rotate();
}

function engine() {
  frame();
  requestAnimationFrame(engine);
}

function init() {
  sectors.forEach(drawSector);
  rotate(); // Initial rotation
  engine(); // Start engine
  spinEl.addEventListener("click", () => {
    if (!angVel) angVel = rand(0.25, 0.45);
    spinButtonClicked = true;
  });
}

events.addListener("spinEnd", (sector) => {
  selectedSectorWrapper.classList.toggle("hidden");
  selectedSectorText.textContent = sector.label;
  selectedSector = sector.label;
});
