window.addEventListener("keydown", (element) => {
  const audio = document.querySelector(`audio[data-key="${element.code}"]`);
  const key = document.querySelector(`div[data-key="${element.code}"]`);
  if (!audio) {
    return; // stop the function from running
  }
  audio.currentTime = 0; // rewind to the start
  audio.play();
  key.classList.add("playing");
});

const keys = document.querySelectorAll(".key");
keys.forEach((key) => {
  key.addEventListener("transitionend", removeTransition);
});

function removeTransition(event) {
  //   if (event.propertyName !== "transform") return; // skip if it's not a 'transform'
  this.classList.remove("playing");
}
