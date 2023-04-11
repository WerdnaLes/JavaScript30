# 08-Fun-with-HTML5-Canvas

Paint something on canvas with your mouse

---

### Preview:

<p align="center">
    <img src="./assets/html-fun-demo.gif"></img>
</p>

## Noteworthy points:

### Declare a 2d canvas:

```javascript
const canvas = document.querySelector("#draw");
const ctx = canvas.getContext("2d");
```

### Make canvas width and hight match your window dimensions:

```javascript
canvas.width = window.innerWidth;
canvas.height = window.innerHeight;
```

### Shorthand of assigning some variables:

```javascript
[lastX, lastY] = [e.offsetX, e.offsetY]; // shorthand
//   lastX = e.offsetX;
//   lastY = e.offsetY;
```

### Increase or decrease line width:

```javascript
if (ctx.lineWidth >= 100 || ctx.lineWidth <= 1) {
  direction = !direction;
}
if (direction) {
  ctx.lineWidth++;
} else {
  ctx.lineWidth--;
}
```
