# 13-Slide-in-on-Scroll

Make images appear on the page when you scroll past them

---

## Noteworthy points:

## Find out when you are half way through an image:

```javascript
const slideInAt = window.scrollY + window.innerHeight - sliderImage.height / 2;
```

## Find out where the bottom of an image:

```javascript
const imageBottom = sliderImage.offsetTop + sliderImage.height;
```

## Debounce method, that prevents overhead when scrolling events are fired:

```javascript
function debounce(func, wait = 20, immediate = true) {
  let timeout;
  return () => {
    let context = this;
    let args = arguments;
    let later = () => {
      timeout = null;
      if (!immediate) {
        func.apply(context, args);
      }
    };
    let callNow = immediate && !timeout;
    clearTimeout(timeout);
    timeout = setTimeout(later, wait);
    if (callNow) func.apply(context, args);
  };
}
```
