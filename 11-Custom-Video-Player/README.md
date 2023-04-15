My variant of updating progress range:

```javascript
progress.addEventListener("click", updateProgress);
progress.addEventListener("mousemove", updateProgress);
progress.addEventListener("mousedown", () => (isDown = true));
document.addEventListener("mouseup", () => (isDown = false));

function updateProgress(e) {
  if (isDown || e.type === "click") {
    console.log(e);
    const percentage = parseFloat(
      (e.clientX / progress.offsetWidth) * video.duration
    );
    video.currentTime = percentage;
  }
}
```

Course variant:

```javascript
progress.addEventListener("click", updateProgress);
progress.addEventListener("mousemove", (e) => isDown && updateProgress(e));
progress.addEventListener("mousedown", () => (isDown = true));
document.addEventListener("mouseup", () => (isDown = false));

function updateProgress(e) {
  const percentage = parseFloat(
    (e.offsetX / progress.offsetWidth) * video.duration
  );
  video.currentTime = percentage;
}
```
