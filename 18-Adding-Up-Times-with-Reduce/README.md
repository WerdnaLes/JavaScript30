# 18-Adding-Up-with-Reduce

Get total time length from every video and convert it in h:mm:ss format

---

## Noteworthy points:

### Parse every element of an array of strings to numbers:

```javascript
const [mins, secs] = timeCode.split(":").map(parseFloat);
```

### Full variant of the above example:

```javascript
const [mins, secs] = timeCode.split(":").map((str) => parseFloat(str));
```

### Convert total seconds in a h:mm:ss format:

```javascript
let secondsLeft = seconds;
const hours = Math.floor(secondsLeft / 3600);
secondsLeft %= 3600;
const mins = Math.floor(secondsLeft / 60);
secondsLeft %= 60;
```
