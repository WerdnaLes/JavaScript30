// Get the elements:
const player = document.querySelector(".player");
const video = player.querySelector(".viewer");
const progress = player.querySelector(".progress");
const progressBar = player.querySelector(".progress__filled");
const toggle = player.querySelector(".toggle");
const skipButtons = player.querySelectorAll("[data-skip]");
const ranges = player.querySelectorAll(".player__slider");
let isDown = false;

// Build the functions:
function togglePlay() {
  video.paused ? video.play() : video.pause();

  //      course expamle:
  //   const method = video.paused ? "play" : "pause";
  //   video[method]();
}

function updateButton() {
  const icon = this.paused ? "►" : "❚ ❚";
  toggle.textContent = icon;
}

function skip() {
  video.currentTime += parseFloat(this.dataset.skip);
}

function handleProgress() {
  const percentage = (video.currentTime / video.duration) * 100;
  progressBar.style.flexBasis = `${percentage}%`;
}

function handleRangeUpdate() {
  video[this.name] = this.value;
}

function updateProgress(e) {
    const percentage = parseFloat(
      (e.offsetX / progress.offsetWidth) * video.duration
    );
    video.currentTime = percentage;
}

// Hook up event listeners:
video.addEventListener("click", togglePlay);
video.addEventListener("play", updateButton);
video.addEventListener("pause", updateButton);
video.addEventListener("timeupdate", handleProgress);
toggle.addEventListener("click", togglePlay);
skipButtons.forEach((button) => button.addEventListener("click", skip));
ranges.forEach((range) => {
  range.addEventListener("change", handleRangeUpdate);
  range.addEventListener("mousemove", handleRangeUpdate);
});

progress.addEventListener("click", updateProgress);
progress.addEventListener("mousemove", (e)=> isDown && updateProgress(e));
progress.addEventListener("mousedown", () => (isDown = true));
document.addEventListener("mouseup", () => (isDown = false));
