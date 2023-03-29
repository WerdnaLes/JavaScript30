window.addEventListener("keydown", playSound);

const keys = document.querySelectorAll(".key");
keys.forEach((key) => {
  key.addEventListener("transitionend", removeTransition);
});

function playSound(element) {
  const audio = document.querySelector(`audio[data-key="${element.code}"]`);
  const key = document.querySelector(`div[data-key="${element.code}"]`);
  if (!audio) {
    return; // stop the function from running
  }
  audio.currentTime = 0; // rewind to the start
  audio.play();
  key.classList.add("playing");
}

function removeTransition(event) {
  //   if (event.propertyName !== "transform") return; // actually causes a bug if you press a button for longer
  this.classList.remove("playing");
}
