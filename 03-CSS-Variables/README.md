# 03-CSS-Variables

A responsive web page where you can set image's background color, blur it or space it.

---

### Preview:

![CSS Variables](./assets/scoped-css-demo.gif)

## Noteworthy points:

### Event listener for input change:

```javascript
input.addEventListener("change", handleUpdate);
```

### Event listener to check input value while dragging it with mouse:

```javascript
input.addEventListener("mousemove", handleUpdate);
```

### Check what type of data attribute belongs to an element:

```javascript
function handleUpdate() {
  const suffix = this.dataset.sizing || "";
  document.documentElement.style.setProperty(
    `--${this.name}`,
    this.value + suffix
  );
}
```

### Add variables to the :root element:

```javascript
:root {
  --base: #ffc600;
  --spacing: 10px;
  --blur: 10px;
}
```
