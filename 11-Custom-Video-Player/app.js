// Get the elements:
const player = document.querySelector(".player");
const video = player.querySelector(".viewer");
const progress = player.querySelector(".progress");
const progressBar = player.querySelector(".progress__filled");
const toggle = player.querySelector(".toggle");
const skipButtons = player.querySelectorAll("[data-skip]");
const ranges = player.querySelectorAll(".player__slider");
const screenChange = document.getElementById("screen-change");
const playbackRateText = player.querySelector(".speed");
const muteButton = player.querySelector(".mute");
const showVolume = player.querySelector(".mute span");
const volumeRange = player.querySelector("#volume-range");
let isDown = false;
let isFullScreen = false;
let isMuted = false;
let lastVolumeRate;

// Build the functions:
function togglePlay() {
  video.paused ? video.play() : video.pause();

  //      course expamle:
  //   const method = video.paused ? "play" : "pause";
  //   video[method]();
}

// Toggle play and stop buttons icons:
function updateButton() {
  const icon = this.paused ? "►" : "❚ ❚";
  toggle.textContent = icon;
}

// Skip forward or backward:
function skip() {
  video.currentTime += parseFloat(this.dataset.skip);
}

// Constantly update progress bar:
function handleProgress() {
  const percentage = (video.currentTime / video.duration) * 100;
  progressBar.style.flexBasis = `${percentage}%`;
}

// Adjust volume and playback rate:
function handleRangeUpdate() {
  video[this.name] = this.value;

  switch (this.name) {
    case "playbackRate":
      playbackRateText.textContent = `${this.value}x`;
      break;
    case "volume":
      if (this.value === "0") {
        showVolume.textContent = `volume_off`;
      } else if (this.value < 0.5) {
        showVolume.textContent = `volume_down`;
      } else {
        showVolume.textContent = `volume_up`;
      }
      break;
  }
}

// Update progress bar manually:
function updateProgress(e) {
  const percentage = parseFloat(
    (e.offsetX / progress.offsetWidth) * video.duration
  );
  video.currentTime = percentage;
}

// Display the video in a full screen:
function changeScreenSize() {
  if (player.requestFullscreen && !isFullScreen) {
    player.requestFullscreen();
  } else document.exitFullscreen();

  isFullScreen = !isFullScreen;
}

function muteVolume() {
  if (isMuted) {
    showVolume.textContent = `volume_up`;
    volumeRange.value = lastVolumeRate;
  } else {
    lastVolumeRate = volumeRange.value;
    volumeRange.value = 0;
    showVolume.textContent = `volume_off`;
  }
  video["volume"] = volumeRange.value;
  isMuted = !isMuted;
}

// Hook up event listeners:
video.addEventListener("click", togglePlay);
video.addEventListener("play", updateButton);
video.addEventListener("pause", updateButton);
video.addEventListener("timeupdate", handleProgress);
video.addEventListener("dblclick", changeScreenSize);
toggle.addEventListener("click", togglePlay);
skipButtons.forEach((button) => button.addEventListener("click", skip));
ranges.forEach((range) => {
  range.addEventListener("change", handleRangeUpdate);
  range.addEventListener("mousemove", handleRangeUpdate);
});

progress.addEventListener("click", updateProgress);
progress.addEventListener("mousemove", (e) => isDown && updateProgress(e));
progress.addEventListener("mousedown", () => (isDown = true));
document.addEventListener("mouseup", () => (isDown = false));

screenChange.addEventListener("click", changeScreenSize);
muteButton.addEventListener("click", muteVolume);
