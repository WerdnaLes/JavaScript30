# 19-Webcam-Fun

Description

---

## Preview:

<p align="center">
    <img src=""></img>
</p>

## Noteworthy points:

### video.srcObject is a modern way to get media stream data:

```javascript
function getVideo() {
  navigator.mediaDevices
    .getUserMedia({ video: true, audio: false })
    .then((localMediaStream) => {
      video.srcObject = localMediaStream;
      video.play();
    })
    .catch((err) => {
      console.error("OH NOO!!!", err);
    });
}
```

### It replaces an obsolete way of doing this:

```javascript
video.src = window.URL.createObjectUrl(localMediaStream);
```
