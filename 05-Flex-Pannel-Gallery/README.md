# 05-Flex-Pannel-Gallery

A photo gallery page created using nested flexboxes and transitions.

---

### Preview:

![](./assets/flex-panels-demo.gif)

## Noteworthy points:

### Inner transparent shadow:

```css
box-shadow: inset 0 0 0 5px rgba(255, 255, 255, 0.1);
```

### Move first and last childs of an element out of the page borders:

```css
/* Move up: */
.panel > *:first-child {
  transform: translateY(-100%);
}

/* Move down: */
.panel > *:last-child {
  transform: translateY(100%);
}
```

### Toggle the classList when an element's property name includes the word 'flex':

```javascript
function toggleOpenActive(e) {
  console.log(e.propertyName);

  if (e.propertyName.includes(`flex`)) {
    this.classList.toggle("open-active");
  }
}
```
