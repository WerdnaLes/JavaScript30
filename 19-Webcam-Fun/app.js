const video = document.querySelector(".player");
const canvas = document.querySelector(".photo");
const ctx = canvas.getContext("2d");
const strip = document.querySelector(".strip");
const snap = document.querySelector(".snap");
const takePicture = document.querySelector(".take-photo");
const currentMod = document.querySelectorAll(".all-mods button");
let interval;

function getVideo() {
  navigator.mediaDevices
    .getUserMedia({ video: true, audio: false })
    .then((localMediaStream) => {
      //   console.log(localMediaStream);
      video.srcObject = localMediaStream;
      video.play();
    })
    .catch((err) => {
      console.error("OH NOO!!!", err);
    });
}

function paintToCanvas(moddedPixels) {
  const width = video.videoWidth;
  const height = video.videoHeight;
  canvas.width = width;
  canvas.height = height;

  console.log(moddedPixels);
  interval = setInterval(() => {
    ctx.drawImage(video, 0, 0);
    // Take the pixels out:
    let pixels = ctx.getImageData(0, 0, width, height);
    // Mess with them:
    if (typeof moddedPixels === "function") {
      if (moddedPixels.name === "rgbSplit") {
        ctx.globalAlpha = 0.1;
      }
      pixels = moddedPixels(pixels);
    }
    // Put them back:
    ctx.putImageData(pixels, 0, 0);
  }, 16);

  return interval;
}

function takePhoto() {
  // played the sound:
  snap.currentTime = 0;
  snap.play();

  // take the data out of the canvas:
  const data = canvas.toDataURL("image/jpeg");
  const link = document.createElement("a");
  link.href = data;
  link.setAttribute("download", "handsome");
  link.innerHTML = `<img src="${data}" alt="Handsome Man" />`;
  strip.insertBefore(link, strip.firstChild);
}

function redEffect(pixels) {
  for (let i = 0; i < pixels.data.length; i += 4) {
    pixels.data[i + 0] += 100; // RED
    pixels.data[i + 1] -= 50; // GREEN
    pixels.data[i + 2] *= 0.5; //BLUE
  }
  return pixels;
}

function rgbSplit(pixels) {
  for (let i = 0; i < pixels.data.length; i += 4) {
    pixels.data[i - 150] = pixels.data[i + 0]; // RED
    pixels.data[i + 500] = pixels.data[i + 1]; // GREEN
    pixels.data[i - 550] = pixels.data[i + 2]; //BLUE
  }
  return pixels;
}

function greenScreen(pixels) {
  const levels = {};

  document.querySelectorAll(".rgb input").forEach((input) => {
    levels[input.name] = input.value;
  });

  // console.log(levels);

  for (let i = 0; i < pixels.data.length; i += 4) {
    let red = pixels.data[i + 0];
    let green = pixels.data[i + 1];
    let blue = pixels.data[i + 2];

    if (
      red >= levels.rmin &&
      green >= levels.gmin &&
      blue >= levels.bmin &&
      red <= levels.rmax &&
      green <= levels.gmax &&
      blue <= levels.bmax
    ) {
      // take it out!
      pixels.data[i + 3] = 0;
    }
  }
  return pixels;
}

function changeMode() {
  clearInterval(interval);
  if (this.classList.contains("red-mode")) {
    paintToCanvas(redEffect);
  } else if (this.classList.contains("ghost-mode")) {
    paintToCanvas(rgbSplit);
  } else if (this.classList.contains("green-screen")) {
    paintToCanvas(greenScreen);
  } else {
    paintToCanvas();
  }
}

video.addEventListener("canplay", paintToCanvas);
takePicture.addEventListener("click", takePhoto);

currentMod.forEach((mod) => mod.addEventListener("click", changeMode));

window.onload = () => {
  getVideo();
};
