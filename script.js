/** @format */

let timerDisplay = document.getElementById("timerDisplay");
let startbtn = document.getElementById("startTimer");
let resetbtn = document.getElementById("resetTimer");
let hidddenMsg = document.getElementById("timer-texthidden");
const totalSeconds = 25 * 60;
let remainingTime = totalSeconds;
let intervalId = null;

function updateTimer() {
  let minutes = Math.floor(remainingTime / 60);
  let seconds = remainingTime % 60;

  if (seconds < 10) seconds = "0" + seconds;
  timerDisplay.textContent = minutes + ":" + seconds;
  remainingTime--;

  if (remainingTime < 0) {
    clearInterval(intervalId); // Stop the timer
    alert("Time's up!"); // Show popup
    remainingTime = totalSeconds; // Reset timer
    intervalId = null; // Allow restart
  }
}

resetbtn.addEventListener("click", function () {
  clearInterval(intervalId); // Timer stop
  remainingTime = totalSeconds; // Time reset
  intervalId = null; // Start button
  timerDisplay.textContent = "25:00"; // Display reset
  hidddenMsg.style.display = "none";
});

//-------Sign up form---------//

const modal = document.getElementById("loginModal");
const openModalBtn = document.getElementById("getStartedBtn");
const closeModal = document.querySelector(".close");

startbtn.addEventListener("click", function () {
  if (intervalId === null) {
    // Prevent multiple timers
    intervalId = setInterval(updateTimer, 1000);
  }
  hidddenMsg.style.display = "inline";
});

openModalBtn.addEventListener("click", () => {
  modal.style.display = "flex";
});

closeModal.addEventListener("click", () => {
  modal.style.display = "none";
});

window.addEventListener("click", (e) => {
  if (e.target === modal) {
    modal.style.display = "none";
  }
});
