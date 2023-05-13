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

## UPDATED SOLUTION:

### I found a way to make this simpler and perform better by using IntersectionObserver(), with help of which we can just place an observer on every needed element, so it will appear when it intersects our view and disappear when we cross past it:

```javascript
const observer = new IntersectionObserver((entries) => {
  entries.forEach((entry) => {
    console.log(entry);
    if (entry.isIntersecting) {
      entry.target.classList.add("active");
    } else {
      entry.target.classList.remove("active");
    }
  });
});

const slideInImages = document.querySelectorAll(".slide-in");
slideInImages.forEach((image) => observer.observe(image));
```
